/* @screens/Fallback/Fallback.tsx */
// render loading or error screen

// react imports
import { SafeAreaView, View, ActivityIndicator, Text, Button } from "react-native";

// src imports
import { fallback } from "@constants";

// local imports
import styles from "./styles";
import FallbackType from "./types";

function Fallback({ loading, error, message, action, onAction }: FallbackType) {
    return (

        // container
        <SafeAreaView style={styles.container}>

            {/* loading screen */}
            {loading && !error &&
                <View style={styles.content}>
                    <ActivityIndicator size="large" />
                    <Text style={styles.loading}>{message || fallback.default.loadingMsg}</Text>
                </View>
            }

            {/* error screen */}
            {error && !loading &&
                <View style={styles.content}>
                    <Text style={styles.error}>{message || fallback.default.errorMsg}</Text>
                    <Button
                        title={action || fallback.default.action}
                        onPress={onAction || fallback.default.onAction}
                    />
                </View>
            }
        </SafeAreaView>
    );
}

export default Fallback;