/* @components/Button/styles.ts */

// react imports
import { StyleSheet } from "react-native";

const buttonStyles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 20
    },
    label: {
        justifyContent: "center",
        fontSize: 15,
        fontFamily: "latoBold",
        fontWeight: "700"
    }
});

export default buttonStyles;