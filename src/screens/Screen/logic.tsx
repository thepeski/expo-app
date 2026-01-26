/* @screens/Screen/logic.tsx */

// src
import { Theme } from "@constants";

// local
import { Variant } from "./types";

// return background colour
function resolveBg(theme: Theme, variant?: Variant) {
    switch (variant) {
        case "canvas": return theme.bg.canvas;
        case "elevated": return theme.bg.elevated;
        default: return theme.bg.surface;
    }
}

export { resolveBg };