/* index.jsx */
// rendered by root layout

// default imports
import { SafeAreaView, View, Text, Button } from "react-native";

// custom imports
import { useBootstrap } from "../src/hooks/useBootstrap";
import { useTheme } from "../src/contexts/ThemeContext";
import FallbackScreen from "../src/components/FallbackScreen";
import Fallback from "../src/constants/Fallback";
import Theme from "../src/constants/Theme";

function App() {

    // load data required on statup
    const { bootReady, bootError } = useBootstrap();

    // theme state variables & methods
    const {
        theme,
        userTheme,
        systemTheme,
        themeMode,
        isThemeLoading,
        themeError,
        changeTheme,
        toggleThemeMode
    } = useTheme();

    // show error or loading screen
    if (bootError || themeError) {
        return (
            <FallbackScreen
                loading={false}
                error={bootError || themeError}
                message={Fallback.loadApp.error}
                action={Fallback.loadApp.action}
                onAction={Fallback.loadApp.onAction}
            />
        );
    } else if (!bootReady || isThemeLoading) {
        return (
            <FallbackScreen
                loading={true}
                error={false}
                message={Fallback.loadApp.loading}
            />
        );
    }

    return (
        <SafeAreaView className="flex-1 justify-center items-center">
            <Text className="text-2xl font-lbb">Hello world!</Text>
            <View className="my-4">
                <Text>theme: {theme}</Text>
                <Text>user theme: {userTheme}</Text>
                <Text>system theme: {systemTheme}</Text>
                <Text>mode: {themeMode}</Text>
            </View>
            <Button title="Light Mode" onPress={() => changeTheme(Theme.name.light)} />
            <Button title="Dark Mode" onPress={() => changeTheme(Theme.name.dark)} />
            <Button title="Toggle Theme Mode" onPress={() => toggleThemeMode()} />
        </SafeAreaView>
    );
}

export default App;