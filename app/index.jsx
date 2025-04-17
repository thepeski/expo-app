/* index.jsx */

// default imports
import { useState, useEffect } from "react";
import { SafeAreaView, Text, Button, TextInput } from "react-native";
import { useRouter } from "expo-router";

// custom imports
import { useAuth } from "../src/context/AuthContext";

function Index() {
    const router = useRouter();

    // state variables
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // auth context
    const { user, register, login, forgot, isLoading } = useAuth();

    useEffect(() => {
        if (user && !isLoading) router.replace("home");
    }, [user, isLoading, router]);

    // while loading
    if (isLoading) {
        return null;
    }

    // if not logged in
    return (
        <SafeAreaView>
            <Text className="text-xl">Hello world!</Text>

            {/* credentials */}
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="email"
                className="border border-white p-4"
            />
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="password"
                secureTextEntry
                className="border border-white p-4"
            />

            {/* auth functions */}
            <Button title="Register" onPress={() => register(email, password)} />
            <Button title="Login" onPress={() => login(email, password)} />
            <Button title="Forgot Password" onPress={() => forgot(email)} />
        </SafeAreaView>
    );
}

export default Index;