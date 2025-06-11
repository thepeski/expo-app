/* @utils/loadFonts.ts */
// load custom fonts

// expo imports
import * as Font from "expo-font";

// src imports
import { Logger } from "@dev";

async function loadFonts() {
    const logger = new Logger("loadFonts.ts");

    try {
        // success
        await Font.loadAsync({
            lato: require("@fonts/Lato/latoRegular.ttf"),
            latoItalic: require("@fonts/Lato/latoItalic.ttf"),
            latoBold: require("@fonts/Lato/latoBold.ttf"),
            latoBoldItalic: require("@fonts/Lato/latoBoldItalic.ttf"),
            latoBlack: require("@fonts/Lato/latoBlack.ttf"),
            latoBlackItalic: require("@fonts/Lato/latoBlackItalic.ttf")
        });

        // crash
        // await Font.loadAsync({ font: require("") });

        logger.info("loaded fonts");
    } catch (e) {
        const error = e instanceof Error ? e.message : String(e);

        logger.error("loading fonts failed", error);

        // rethrow for caller
        throw error;
    }
}

export default loadFonts;