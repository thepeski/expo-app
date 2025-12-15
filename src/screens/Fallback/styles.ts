/* @screens/Fallback/styles.ts */

// react
import { StyleSheet } from "react-native";

// src
import { spacing, textStyles } from "@constants";

function makeStyles() {
    return StyleSheet.create({
        container: { flex: 1, justifyContent: "center", alignItems: "center", gap: spacing.sm },
        message: textStyles.title
    });
}

export { makeStyles };