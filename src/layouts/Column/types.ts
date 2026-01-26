/* @layouts/Column/types.ts */

// react
import { ReactNode } from "react";
import { FlexAlignType, StyleProp, ViewProps, ViewStyle } from "react-native";

// src
import { spacing } from "@constants";

type Props = Omit<ViewProps, "style" | "children"> & {
    align?: FlexAlignType;
    gap?: keyof typeof spacing;
    style?: StyleProp<ViewStyle>;
    children: ReactNode;
};

type Styles = { container: StyleProp<ViewStyle>; };

export type { Props, Styles };