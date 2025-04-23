/* _layout.jsx */
// app entry point

// default imports
import { Slot } from "expo-router";

// custom imports
import "../global.css";

function RootLayout() {
    // render app
    return (
        <Slot />
    );
}

export default RootLayout;