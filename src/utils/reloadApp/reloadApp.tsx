/* @utils/reloadApp/reloadApp.tsx */
// reloads app

// expo
import { reloadAsync } from "expo-updates";

// src
import { Logger } from "@dev";

function reloadApp() {
    const log = new Logger("reloadApp");

    void (async () => {
        try {
            await reloadAsync();
            log.info("reloaded app");
        } catch (e) {
            const error = e instanceof Error ? e.message : String(e);
            log.error(error);
        }
    })();
}

export { reloadApp };