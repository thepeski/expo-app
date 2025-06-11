/* @utils/reloadApp.ts */
// reload the app

// expo imports
import * as Updates from "expo-updates";

// src imports
import { Logger } from "@dev";

async function reloadApp() {
    const logger = new Logger("reloadApp.ts");

    try {
        logger.info("reloading app");

        await Updates.reloadAsync();
    } catch (e) {
        const error = e instanceof Error ? e.message : String(e);

        logger.error("failed reloading app", error);
    }
}

export default reloadApp;