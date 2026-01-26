/* _layout.tsx */
// root layout

// react
import { SafeAreaProvider } from "react-native-safe-area-context";

// expo
import { Slot } from "expo-router";

// src
import { useBoot } from "@hooks";

function Root() {
    useBoot();

    return (
        <SafeAreaProvider>
            <Slot />
        </SafeAreaProvider>
    );
}

export default Root;