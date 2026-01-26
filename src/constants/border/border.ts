/* @constants/border/border.ts */
// border width presets

// react
import { StyleSheet } from "react-native";

const border = {
    hairline: StyleSheet,
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
    xxl: 6,
} as const;

export { border };