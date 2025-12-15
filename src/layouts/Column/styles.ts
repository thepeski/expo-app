/* @layouts/Column/styles.ts */

// react
import { FlexAlignType, StyleSheet } from "react-native";

function makeStyles(alignment?: FlexAlignType) {
    return StyleSheet.create({ container: { alignItems: alignment ?? "center" } });
}

export { makeStyles };