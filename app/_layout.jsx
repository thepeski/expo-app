/* _layout.jsx */

// default imports
import { Slot } from "expo-router";

// custom imports
import "../global.css";
import { ThemeProvider } from "../src/context/ThemeContext";

function _layout() {
    return (
        // provide theme context to app
        <ThemeProvider>
            <Slot />
        </ThemeProvider>
    );
}

export default _layout;