/* @layouts/Row/styles.ts */

// react
import { FlexAlignType, StyleSheet } from "react-native";

function makeStyles(alignment?: FlexAlignType) {
    return StyleSheet.create({
        container: { flexDirection: "row", alignItems: alignment ?? "center" }
    });
}

export { makeStyles };