/* @screens/Fallback/styles.ts */

// react
import { StyleSheet } from "react-native";

// src
import { typo } from "@constants";
import { resolveTypo } from "@utils";

// local
import { Styles } from "./types";

function makeStyles(): Styles {
    return StyleSheet.create({
        container: { flex: 1, justifyContent: "center", alignItems: "center", gap: 8 },
        message: resolveTypo(typo.preset.heading.h3),
    });
}

export { makeStyles };