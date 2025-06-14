/* @views/TabView/styles.ts */

// react imports
import { StyleSheet } from "react-native";

const tabButtonStyles = StyleSheet.create({
    tab: { flex: 1, alignItems: "center" }
});

const tabViewStyles = StyleSheet.create({
    container: { flex: 1 },
    content: { flex: 1 },
    tabBar: { flexDirection: "row", justifyContent: "space-around" }
});

export { tabButtonStyles, tabViewStyles };