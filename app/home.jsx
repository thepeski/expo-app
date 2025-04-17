/* Home.jsx */

// default imports
import { useEffect } from "react";
import { SafeAreaView, Text, Button } from "react-native";
import { useRouter } from "expo-router";

// custom imports
import { useAuth } from "../src/context/AuthContext";

function Home() {
    const router = useRouter();

    // auth context
    const { user, logout, isLoading } = useAuth();

    // redirect to login if not logged in
    useEffect(() => {
        if (!user && !isLoading) router.replace("/");
    }, [user, isLoading, router]);

    // while loading
    if (isLoading) {
        return null;
    }

    // if logged in
    return (
        <SafeAreaView>
            <Text>Home</Text>
            <Button
                title="Logout"
                onPress={logout}
            />
        </SafeAreaView>
    )

}

export default Home;