/* @utils/loadFonts/loadFonts.tsx */
// load custom fonts

// expo
import { loadAsync } from "expo-font";

// src
import { fonts } from "@constants";
import { Logger } from "@dev";

// local
import { Props } from "./types";

async function loadFonts(): Props {
    const log = new Logger("loadFonts");

    try {
        // convert to format { font1: path1, font2: path2 }
        await loadAsync(Object.fromEntries(Object.values(fonts).map((f) => [f.name, f.path])));
        log.info("fonts loaded");
    } catch (e) {
        const error = e instanceof Error ? e.message : String(e);
        log.error(error);

        // rethrow for caller
        throw error;
    }
}

export { loadFonts };