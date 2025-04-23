/* index.jsx */
// rendered by root layout

// default imports
import { useEffect } from "react";
import { useRouter } from "expo-router";

// custom imports
import { useBootstrap } from "../src/hooks/useBootstrap";
import { useAuth } from "../src/contexts/AuthContext";
import { useTheme } from "../src/contexts/ThemeContext";
import FallbackScreen from "../src/components/FallbackScreen";
import Fallback from "../src/constants/Fallback";

function App() {
    const router = useRouter();

    // load data required on statup
    const { bootReady, bootError } = useBootstrap();

    // auth state variables & methods
    const { user, isAuthLoading, authError } = useAuth();

    // theme state variables & methods
    const { isThemeLoading, themeError } = useTheme();

    useEffect(() => {
        if (!isAuthLoading && !isThemeLoading) {
            router.replace(user ? "Home" : "Login");
        }
    }, [user, isAuthLoading, isThemeLoading, router]);

    // show error or loading screen
    if (bootError || authError || themeError) {
        return (
            <FallbackScreen
                loading={false}
                error={bootError || authError || themeError}
                message={Fallback.loadApp.error}
                action={Fallback.loadApp.action}
                onAction={Fallback.loadApp.onAction}
            />
        );
    } else if (!bootReady || isAuthLoading || isThemeLoading) {
        return (
            <FallbackScreen
                loading={true}
                error={false}
                message={Fallback.loadApp.loading}
            />
        );
    }

    return null;
}

export default App;