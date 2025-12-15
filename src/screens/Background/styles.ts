/* @screens/Background/styles.ts */

// react
import { ColorValue, StyleSheet } from "react-native";

function makeStyles(color?: ColorValue) {
    return StyleSheet.create({ container: { flex: 1, backgroundColor: color } });
}

export { makeStyles };