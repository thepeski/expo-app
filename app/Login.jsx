/* Login.jsx */
// renders if not logged in

import { useRouter } from "expo-router"
import { useEffect } from "react";
import { SafeAreaView, Text, Button } from "react-native";

import { useAuth } from '../src/contexts/AuthContext';

function Login() {
    const router = useRouter();

    // auth state variables & methods
    const { user, signUp, signIn, signOut, forgot } = useAuth();

    // redirect to home if user set
    useEffect(() => {
        if (user) router.replace("Home");
    }, [user, router]);

    return (
        <SafeAreaView className="flex-1 justify-center items-center">

            {/* header */}
            <Text className="text-2xl font-lbb">Hello {user ? user.email : "world"}!</Text>

            {/* auth buttons */}
            <Button title="Sign In" onPress={() => signIn("test@test.com", "test!12")} />
            <Button title="Sign Up" onPress={() => signUp("test@test.com", "test!12")} />
            <Button title="Sign Out" onPress={() => signOut()} />
            <Button title="Send Password Reset Link" onPress={() => forgot("test@test.com")} />
        </SafeAreaView>
    );
}

export default Login;