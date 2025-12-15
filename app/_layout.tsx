/* _layout.tsx */
// root layout

// react
import { SafeAreaProvider } from "react-native-safe-area-context";

// expo
import { Slot } from "expo-router";

// src
import { AppErrorBoundary } from "@components";
import { reloadApp } from "@utils";

function RootLayout() {
    return (
        <AppErrorBoundary onRetry={reloadApp}>
            <SafeAreaProvider><Slot /></SafeAreaProvider>
        </AppErrorBoundary>
    );
}

export default RootLayout;