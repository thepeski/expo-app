/* @screens/Fallback/styles.ts */

// react imports
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    content: {
        gap: 10
    },
    loading: {
        fontSize: 16,
        fontWeight: "700"
    },
    error: {
        fontSize: 20,
        fontWeight: "700"
    }
});

export default styles;