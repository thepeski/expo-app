/* _layout.jsx */

// default imports
import { Slot } from "expo-router";

// custom imports
import "../global.css";
import { AuthProvider } from "../src/context/AuthContext";

function _layout() {
    return (
        <AuthProvider>
            <Slot />
        </AuthProvider>
    );
}

export default _layout;