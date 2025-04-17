/* ThemeContext.jsx */

// default imports
import { createContext, useContext, useState, useEffect } from "react";
import { useColorScheme, Appearance } from "react-native";

// custom imports
import StorageKeys from "../constants/StorageKeys";
import { getStorageToken, setStorageToken } from "../services/storage";

// create context
const ThemeContext = createContext();

// enable access to context
function useTheme() {
    return useContext(ThemeContext);
}

function ThemeProvider({ children }) {

    // state variables
    const [theme, setTheme] = useState(null);
    const [userTheme, setUserTheme] = useState(null);
    const [themePreference, setThemePreference] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // track system theme
    const systemTheme = useColorScheme();

    // run on mount
    useEffect(() => {
        async function resolveTheme() {

            // load stored user theme and preference
            const storedUserTheme = await getStorageToken(StorageKeys.userTheme);
            const storedPreference = await getStorageToken(StorageKeys.themePreference);

            // resolve initial user theme
            if (storedUserTheme === "light" || storedUserTheme === "dark") {
                // check if stored user theme value valid
                setUserTheme(storedUserTheme);
            } else {
                // default to system theme & store valid string
                setUserTheme(systemTheme);
                await setStorageToken(StorageKeys.userTheme, systemTheme);
            }

            // resolve initial theme & theme preference
            if (storedPreference === "user") {
                // user preference set
                setTheme(storedUserTheme);
                setThemePreference("user");
            } else if (storedPreference === "system") {
                // system preference set
                setTheme(systemTheme);
                setThemePreference("system");
            } else {
                // default to system theme & preference, store valid string
                setTheme(systemTheme);
                setThemePreference("system");
                await setStorageToken(StorageKeys.themePreference, "system");
            }

            // finish loading
            setIsLoading(false);
        }

        // function call
        resolveTheme();
    }, []);

    // listen to system theme changes
    useEffect(() => {

        // don't listen if user preference set
        if (themePreference !== "system") return;

        // set up listener
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            setTheme(colorScheme);
        });

        // clean up listener
        return () => subscription.remove();
    }, [themePreference]); // trigger on theme preference change


    // toggle theme & store user theme
    async function toggleTheme() {
        if (themePreference === "user") {
            // only toggle if user preference set
            const newTheme = userTheme === "light" ? "dark" : "light";
            setTheme(newTheme);
            setUserTheme(newTheme);
            await setStorageToken(StorageKeys.userTheme, newTheme);
        }
    }

    // toggle theme preference & store preference
    async function togglePreference() {
        if (themePreference === "user") {
            // toggle from user to system
            setTheme(systemTheme);
            setThemePreference("system");
            await setStorageToken(StorageKeys.themePreference, "system");
        } else if (themePreference === "system") {
            // toggle from system to user
            setTheme(userTheme);
            setThemePreference("user");
            await setStorageToken(StorageKeys.themePreference, "user");
        }
    }

    // while loading
    if (isLoading) {
        return null;
    }

    return (
        <ThemeContext.Provider value={{ theme, userTheme, themePreference, systemTheme, toggleTheme, togglePreference }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { useTheme, ThemeProvider };