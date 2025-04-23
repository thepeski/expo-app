/* reloadApp.js */
// reloads the app

// default imports
import * as Updates from "expo-updates";

// custom imports
import { ConsoleError } from "../constants/ConsoleMessages";

async function reloadApp() {
    try {
        await Updates.reloadAsync();
    } catch (error) {
        console.error(ConsoleError.reloadApp, error);
    }
}

export default reloadApp;