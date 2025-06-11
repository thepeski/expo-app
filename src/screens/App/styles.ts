/* @screens/App/styles.ts */

// react imports
import { StyleSheet } from "react-native";

// src imports
import { ThemeType } from "@constants";

function makeAppStyles(theme: ThemeType) {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            gap: 12,
            backgroundColor: theme.colors.background
        },
        header: {
            fontSize: 24,
            fontWeight: "700",
            color: theme.colors.text
        },
        list: {
            width: "90%"
        },
        category: {
            marginBottom: 10,
            fontSize: 20,
            fontWeight: "700",
            color: theme.colors.text
        },
        group: {
            marginBottom: 10,
            fontSize: 18,
            color: theme.colors.text
        },
        button: {
            alignItems: "center",
            marginBottom: 10,
            padding: 20,
            backgroundColor: theme.colors.buttonBg,
            borderRadius: 20
        },
        buttonLabel: {
            fontSize: 16,
            fontWeight: "700",
            color: theme.colors.buttonLabel
        }
    });
}

export default makeAppStyles;