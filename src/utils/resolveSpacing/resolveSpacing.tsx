/* @utils/resolveSpacing/resolveSpacing.tsx */
// convert spacing preset into numeric values

// src
import { spacing } from "@constants";

function resolveSpacing(preset?: keyof typeof spacing) {
    return spacing[preset ?? "none"];
}

export { resolveSpacing };