/* @layouts/Row/styles.ts */

// react
import { FlexAlignType, StyleSheet } from "react-native";

// src
import { spacing } from "@constants";

// local
import { Styles } from "./types";
import { resolveSpacing } from "@utils";

function makeStyles(align?: FlexAlignType, gap?: keyof typeof spacing): Styles {
    return StyleSheet.create({
        container: {
            flexDirection: "row",
            alignItems: align ?? "center",
            gap: resolveSpacing(gap)
        },
    });
}

export { makeStyles };