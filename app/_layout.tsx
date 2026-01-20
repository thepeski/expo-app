/* _layout.tsx */
// root layout

// react
import { SafeAreaProvider } from "react-native-safe-area-context";

// expo
import { Slot } from "expo-router";

function Root() {
    return (
        <SafeAreaProvider>
            <Slot />
        </SafeAreaProvider>
    );
}

export default Root;