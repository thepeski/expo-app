/* @components/Button/logic.tsx */

// src
import { Theme } from "@constants";

// local
import { Tone, Variant } from "./types";

// return button colours
function resolveColors(theme: Theme, variant: Variant, tone: Tone) {
    let colors;
    switch (tone) {
        case "brand":
            colors = theme.brand;
            break;
        case "alt":
            colors = theme.alt;
            break;
        case "accent":
            colors = theme.accent;
            break;
        case "success":
            colors = theme.success;
            break;
        case "warning":
            colors = theme.warning;
            break;
        case "error":
            colors = theme.error;
            break;
        default:
            colors = theme.neutral;
    }

    let bg, bgPressed, border, borderPressed, label, labelPressed, loading;
    switch (variant) {
        case "secondary":
            bg = "transparent";
            bgPressed = "transparent";
            border = colors.default;
            borderPressed = colors.vivid;
            label = colors.default;
            labelPressed = colors.vivid;
            loading = colors.bold;
            break;
        case "third":
            bg = colors.default;
            bgPressed = colors.vivid;
            border = colors.gentle;
            borderPressed = colors.default;
            label = colors.faint;
            labelPressed = colors.faint;
            loading = colors.heavy;
            break;
        case "ghost":
            bg = "transparent";
            bgPressed = "transparent";
            border = "transparent";
            borderPressed = "transparent";
            label = colors.default;
            labelPressed = colors.muted;
            loading = colors.bold;
            break;
        case "link":
            bg = "transparent";
            bgPressed = "transparent";
            border = "transparent";
            borderPressed = "transparent";
            label = colors.default;
            labelPressed = colors.muted;
            loading = colors.bold;
            break;
        default:
            bg = colors.default;
            bgPressed = colors.vivid;
            border = colors.vivid;
            borderPressed = colors.strong;
            label = theme.text.inverse;
            labelPressed = colors.subtle;
            loading = colors.heavy;
    }

    return { bg, bgPressed, border, borderPressed, label, labelPressed, loading };
}

export { resolveColors };