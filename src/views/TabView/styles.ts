/* @views/TabView/styles.ts */

// react imports
import { StyleSheet } from "react-native";

const tabViewStyles = StyleSheet.create({
    container: { flex: 1 },
    content: { flex: 1 },
    tabContainer: { flexDirection: "row", justifyContent: "space-around" },
    tab: { flex: 1, alignItems: "center" }
});

export default tabViewStyles;