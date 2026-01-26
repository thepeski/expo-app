/* _layout.tsx */
// root layout

// react
import { SafeAreaProvider } from "react-native-safe-area-context";

// expo
import { Slot } from "expo-router";

// src
import { ThemeProvider, useBoot } from "@hooks";

function Root() {
    useBoot();

    return (
        <ThemeProvider>
            <SafeAreaProvider>
                <Slot />
            </SafeAreaProvider>
        </ThemeProvider>
    );
}

export default Root;