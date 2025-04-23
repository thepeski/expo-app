/* Home.jsx */
// renders if logged in

// default imports
import { useEffect } from "react";
import { SafeAreaView, View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

// custom imports
import { useAuth } from "../src/contexts/AuthContext";
import { useTheme } from "../src/contexts/ThemeContext";
import Theme from "../src/constants/Theme";

function Home() {
    const router = useRouter();

    // auth state variables & methods
    const { user, signOut } = useAuth();

    // theme state variables & methods
    const { theme, userTheme, systemTheme, themeMode, changeTheme, toggleThemeMode } = useTheme();

    // redirect to login if user not set
    useEffect(() => {
        if (!user) router.replace("Login");
    }, [user, router]);

    return (
        <SafeAreaView className="flex-1 justify-center items-center">

            {/* header */}
            <Text className="text-2xl font-lbb">Hello {user ? user.email : "world"}!</Text>

            {/* theme state variables */}
            <View className="my-4">
                <Text>theme: {theme}</Text>
                <Text>user theme: {userTheme}</Text>
                <Text>system theme: {systemTheme}</Text>
                <Text>mode: {themeMode}</Text>
            </View>

            {/* theme buttons */}
            <Button title="Light Mode" onPress={() => changeTheme(Theme.name.light)} />
            <Button title="Dark Mode" onPress={() => changeTheme(Theme.name.dark)} />
            <Button title="Toggle Theme Mode" onPress={() => toggleThemeMode()} />

            {/* sign out */}
            <Button title="Sign Out" onPress={signOut} />
        </SafeAreaView>
    );

}

export default Home;