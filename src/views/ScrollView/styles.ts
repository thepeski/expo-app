/* @views/ScrollView/styles.ts */

// react imports
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    headers: {
        width: "100%"
    }
});

export default styles;