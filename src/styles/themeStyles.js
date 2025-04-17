/* themeStyles.js */

// default imports
import { StyleSheet } from "react-native";

function makeStyles(theme) {
    return StyleSheet.create({
        background: {
            backgroundColor: theme === "light" ? "#ffffff" : "#000000"
        },

        text: {
            color: theme === "light" ? "#000000" : "#ffffff"
        }
    });
};

export default makeStyles;