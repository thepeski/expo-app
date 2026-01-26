/* @constants/typo/typo.ts */
// typography

// local
import { fonts } from "../fonts";

const typo = {
    family: {
        system: "system",
        ...Object.fromEntries(
            Object.entries(fonts).map(([key, font]) => [key, font.name])
        ) as { [K in keyof typeof fonts]: (typeof fonts)[K]["name"] }
    },
    weight: {
        thin: "100",
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        black: "900",
    },
    size: {
        xs: { fontSize: 12, lineHeight: 16 },
        sm: { fontSize: 14, lineHeight: 20 },
        md: { fontSize: 16, lineHeight: 24 },
        lg: { fontSize: 20, lineHeight: 28 },
        xl: { fontSize: 24, lineHeight: 32 },
        xxl: { fontSize: 32, lineHeight: 40 },
    },
    preset: {
        heading: {
            h1: { font: "system", weight: "bold", size: "xxl" },
            h2: { font: "system", weight: "bold", size: "xl" },
            h3: { font: "system", weight: "bold", size: "lg" },
        },
        text: {
            body: { font: "system", weight: "regular", size: "md" },
            bodySm: { font: "system", weight: "regular", size: "sm" },
            caption: { font: "system", weight: "regular", size: "xs" },
        },
    },
} as const;

export { typo };