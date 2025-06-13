/* @utils/loadFonts.ts */
// load custom fonts

// expo imports
import { loadAsync } from "expo-font";

// src imports
import { Logger } from "@dev";

function loadFonts() {
    const logger = new Logger("loadFonts.ts");

    void (async () => {
        try {
            await loadAsync({
                lato: require("@fonts/latoRegular.ttf"),
                latoItalic: require("@fonts/latoItalic.ttf"),
                latoBold: require("@fonts/latoBold.ttf"),
                latoBoldItalic: require("@fonts/latoBoldItalic.ttf"),
                latoBlack: require("@fonts/latoBlack.ttf"),
                latoBlackItalic: require("@fonts/latoBlackItalic.ttf")
            });

            logger.info("fonts loaded");
        } catch (e) {
            const error = e instanceof Error ? e.message : String(e);

            logger.error(error);

            // rethrow for caller
            throw error;
        }
    })();
}

export default loadFonts;