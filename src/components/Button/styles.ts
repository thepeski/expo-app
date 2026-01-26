/* @components/Button/styles.ts */

// react
import { StyleSheet } from "react-native";

// src
import { border, radius, spacing, Theme, typo } from "@constants";
import { resolveTypo } from "@utils";

// local
import { resolveColors } from "./logic";
import { Size, Styles, Tone, Variant } from "./types";

const sizes: Record<Size, { container: any, label: any }> = {
    "xs": StyleSheet.create({
        container: {
            gap: spacing.sm,
            paddingVertical: spacing.sm,
            paddingHorizontal: spacing.md,
            borderWidth: border.sm,
            borderRadius: radius.pill,
            minHeight: typo.size.xs.lineHeight + spacing.sm * 2,
        },
        label: resolveTypo({ font: "system", weight: "bold", size: "xs" }),
    }),
    "sm": StyleSheet.create({
        container: {
            gap: spacing.sm,
            paddingVertical: spacing.sm,
            paddingHorizontal: spacing.md,
            borderWidth: border.sm,
            borderRadius: radius.pill,
            minHeight: typo.size.sm.lineHeight + spacing.sm * 2,
        },
        label: resolveTypo({ font: "system", weight: "bold", size: "sm" }),
    }),
    "md": StyleSheet.create({
        container: {
            gap: spacing.md,
            paddingVertical: spacing.md,
            paddingHorizontal: spacing.lg,
            borderWidth: border.sm,
            borderRadius: radius.pill,
            minHeight: typo.size.md.lineHeight + spacing.md * 2,
        },
        label: resolveTypo({ font: "system", weight: "bold", size: "md" }),
    }),
    "lg": StyleSheet.create({
        container: {
            gap: spacing.lg,
            paddingVertical: spacing.lg,
            paddingHorizontal: spacing.xl,
            borderWidth: border.sm,
            borderRadius: radius.pill,
            minHeight: typo.size.lg.lineHeight + spacing.lg * 2,
        },
        label: resolveTypo({ font: "system", weight: "bold", size: "lg" }),
    }),
    "xl": StyleSheet.create({
        container: {
            gap: spacing.xl,
            paddingVertical: spacing.xl,
            paddingHorizontal: spacing.xxl,
            borderWidth: border.sm,
            borderRadius: radius.pill,
            minHeight: typo.size.xl.lineHeight + spacing.xs * 2,
        },
        label: resolveTypo({ font: "system", weight: "bold", size: "xl" }),
    }),
    "xxl": StyleSheet.create({
        container: {
            gap: spacing.xxl,
            paddingVertical: spacing.xxl,
            paddingHorizontal: spacing.xxl * 1.2,
            borderWidth: border.sm,
            borderRadius: radius.pill,
            minHeight: typo.size.xxl.lineHeight + spacing.xl * 2,
        },
        label: resolveTypo({ font: "system", weight: "bold", size: "xxl" }),
    }),
};

function makeStyles(
    theme: Theme,
    variant: Variant,
    tone: Tone,
    size: Size,
    iconOnly: boolean,
    fullWidth?: boolean
): Styles {
    const colors = resolveColors(theme, variant, tone);

    return {
        container: [
            {
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            },
            {
                alignSelf: fullWidth ? "stretch" : "flex-start",
                backgroundColor: colors.bg,
                borderColor: colors.border,
            },
            sizes[size].container,
            iconOnly || (variant === "link") ? {
                paddingHorizontal: spacing.none,
                paddingVertical: spacing.none,
                borderWidth: 0,
                backgroundColor: "transparent",
                minHeight: typo.size.xs
            } : null,
        ],
        label: [
            { color: colors.label },
            sizes[size].label,
            variant === "link" ? { textDecorationLine: "underline" } : null,
        ],
        loading: {
            ...StyleSheet.absoluteFillObject,
            justifyContent: "center",
            alignItems: "center",
        },
        loadingColor: colors.loading,
        colors,
    };
}

export { makeStyles };