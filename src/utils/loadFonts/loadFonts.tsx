/* @utils/loadFonts/loadFonts.tsx */
// load custom fonts

// expo
import { loadAsync } from "expo-font";

// src
import { Logger } from "@dev";

async function loadFonts() {
    const log = new Logger("loadFonts");

    try {
        await loadAsync({
            lato: require("@fonts/latoRegular.ttf"),
            latoItalic: require("@fonts/latoItalic.ttf"),
            latoBold: require("@fonts/latoBold.ttf"),
            latoBoldItalic: require("@fonts/latoBoldItalic.ttf"),
            latoBlack: require("@fonts/latoBlack.ttf"),
            latoBlackItalic: require("@fonts/latoBlackItalic.ttf")
        });

        log.info("fonts loaded");
    } catch (e) {
        const error = e instanceof Error ? e.message : String(e);
        log.error(error);

        // rethrow for caller
        throw error;
    }
}

export { loadFonts };