/* FallbackScreen.jsx */
// renders loading & error screens

// default imports
import { SafeAreaView, ActivityIndicator, Text, Button } from "react-native";

// custom imports
import Fallback from "../constants/Fallback";

function FallbackScreen({ loading = false, error = false, message = "", action = "", onAction }) {

    // loading screen
    if (loading) {
        return (
            <SafeAreaView className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" />
                <Text className="mt-2 text-xl font-bold">
                    {message || Fallback.default.loading}
                </Text>
            </SafeAreaView>
        );
    }

    // error screen
    if (error) {
        return (
            <SafeAreaView className="flex-1 justify-center items-center">
                <Text className="text-2xl font-bold">
                    {message || Fallback.default.error}
                </Text>
                <Button
                    className="mt-2"
                    title={action || Fallback.default.action}
                    onPress={onAction || Fallback.default.onAction} // custom retry function
                />
            </SafeAreaView>
        );
    }

    return null;
}

export default FallbackScreen;