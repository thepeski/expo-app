/* @screens/Screen/styles.ts */

// react
import { StyleSheet } from "react-native";

// src
import { spacing, Theme } from "@constants";
import { resolveSpacing } from "@utils";

// local
import { resolveBg } from "./logic";
import { Styles, Variant } from "./types";

function makeStyles(theme: Theme, variant?: Variant, padding?: keyof typeof spacing): Styles {
    const bg = resolveBg(theme, variant);
    const pad = resolveSpacing(padding);

    return StyleSheet.create({
        wrapper: { flex: 1 },
        container: { flex: 1, backgroundColor: bg },
        content: { flex: 1, padding: pad },
    });
}

export { makeStyles };