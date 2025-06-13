/* @utils/reloadApp.ts */
// reload the app

// expo imports
import { reloadAsync } from "expo-updates";

// src imports
import { Logger } from "@dev";

function reloadApp() {
    const logger = new Logger("reloadApp.ts");

    void (async () => {
        try {
            logger.info("reloading app");

            await reloadAsync();
        } catch (e) {
            const error = e instanceof Error ? e.message : String(e);

            logger.error(error);
        }
    })();
}

export default reloadApp;