/* _layout.jsx */
// app entry point

// default imports
import { Slot } from "expo-router";

// custom imports
import "../global.css";
import AppErrorBoundary from "../src/components/AppErrorBoundary";
import reloadApp from "../src/utils/reloadApp";
import { AuthProvider } from "../src/contexts/AuthContext";
import { ThemeProvider } from "../src/contexts/ThemeContext";

function RootLayout() {

    // render app
    return (
        <AppErrorBoundary onRetry={reloadApp}>
            <AuthProvider>
                <ThemeProvider>
                    <Slot />
                </ThemeProvider>
            </AuthProvider>
        </AppErrorBoundary>
    );
}

export default RootLayout;