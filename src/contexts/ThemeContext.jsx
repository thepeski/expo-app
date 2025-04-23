/* ThemeContext.jsx */
// provides theme state variables & methods

// default imports
import { createContext, useContext, useState, useEffect } from "react";
import { useColorScheme, Appearance } from "react-native";

// custom imports
import { getToken, setToken } from "../services/storage";
import Storage from "../constants/Storage";
import Theme from "../constants/Theme";
import { ConsoleWarn, ConsoleError } from "../constants/ConsoleMessages";

// create context
const ThemeContext = createContext();

// enable access to context
function useTheme() {
    return useContext(ThemeContext);
}

function ThemeProvider({ children }) {

    // state variables
    const [theme, setTheme] = useState(Theme.name.system);
    const [userTheme, setUserTheme] = useState(Theme.name.system);
    const [themeMode, setThemeMode] = useState(Theme.mode.system);
    const [isThemeLoading, setIsThemeLoading] = useState(true);
    const [themeError, setThemeError] = useState("");

    // track system theme
    const systemTheme = useColorScheme();

    // resolve theme on mount
    useEffect(() => {
        async function resolveTheme() {
            let errorMessage = "";

            try {
                // load stored user theme & mode
                const storedUserTheme = await getToken(Storage.userTheme);
                const storedThemeMode = await getToken(Storage.themeMode);

                // resolve user theme
                const resolvedUserTheme = Theme.name[storedUserTheme]
                    ? storedUserTheme : systemTheme;

                // resolve theme mode
                const resolvedThemeMode = Theme.mode[storedThemeMode]
                    ? storedThemeMode : Theme.mode.system;

                // resolve theme
                const resolvedTheme = resolvedThemeMode === Theme.mode.system
                    ? systemTheme : resolvedUserTheme;

                // set state variables
                setTheme(resolvedTheme);
                setUserTheme(resolvedUserTheme);
                setThemeMode(resolvedThemeMode);

                // stored user theme invalid or missing
                if (!Theme.name[storedUserTheme]) {
                    await setToken(Storage.userTheme, systemTheme); // default to system theme
                    console.warn(ConsoleWarn.ThemeContext.userTheme);
                }

                // stored theme mode invalid or missing
                if (!Theme.mode[storedThemeMode]) {
                    await setToken(Storage.themeMode, Theme.mode.system); // default to system mode
                    console.warn(ConsoleWarn.ThemeContext.themeMode);
                }

            } catch (error) {
                // resolve error
                errorMessage = error.message || String(error);

                console.error(ConsoleError.ThemeContext.resolveTheme);
            } finally {
                // set error message & finish loading
                setThemeError(errorMessage);
                setIsThemeLoading(false);
            }
        }

        // function call
        resolveTheme();
    }, []);

    // listen for system theme changes
    useEffect(() => {

        // don't listen if system mode not set
        if (themeMode !== Theme.mode.system) return;

        // set up listener
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            setTheme(colorScheme);
        });

        // clean up listener
        return () => subscription.remove();
    }, [themeMode]);

    async function changeTheme(newTheme) {

        // don't toggle if theme invalid or user mode not set
        if (!Theme.name[newTheme] || themeMode !== Theme.mode.user) return;

        let errorMessage = "";

        try {
            // set state variables & store new token
            setTheme(newTheme);
            setUserTheme(newTheme);
            await setToken(Storage.userTheme, newTheme);
        } catch (error) {
            // resolve error
            errorMessage = error.message || String(error);

            console.error(ConsoleError.ThemeContext.changeTheme);
        } finally {
            // set error message
            setThemeError(errorMessage);
        }
    }

    async function toggleThemeMode() {
        let errorMessage = "";

        // resolve theme
        const newTheme = themeMode === Theme.mode.system
            ? userTheme : systemTheme;

        // resolve theme mode
        const newThemeMode = themeMode === Theme.mode.system
            ? Theme.mode.user : Theme.mode.system;

        try {
            // set state variables & store new token
            setTheme(newTheme);
            setThemeMode(newThemeMode);
            await setToken(Storage.themeMode, newThemeMode);
        } catch (error) {
            // resolve error
            errorMessage = error.message || String(error);

            console.error(ConsoleError.ThemeContext.toggleThemeMode);
        } finally {
            // set error message
            setThemeError(errorMessage);
        }
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                userTheme,
                systemTheme,
                themeMode,
                isThemeLoading,
                themeError,
                changeTheme,
                toggleThemeMode
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export { useTheme, ThemeProvider };