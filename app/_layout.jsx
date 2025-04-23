/* _layout.jsx */
// app entry point

// default imports
import { Slot } from "expo-router";

// custom imports
import "../global.css";
import AppErrorBoundary from "../src/components/AppErrorBoundary";
import reloadApp from "../src/utils/reloadApp";

function RootLayout() {

    // render app
    return (
        <AppErrorBoundary onRetry={reloadApp}>
            <Slot />
        </AppErrorBoundary>
    );
}

export default RootLayout;