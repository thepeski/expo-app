/* @screens/Screen/types.ts */

// react
import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SafeAreaViewProps } from "react-native-safe-area-context";

// src
import { spacing } from "@constants";

type Variant = "canvas" | "surface" | "elevated";
type KeyboardDismiss = "none" | "tap" | "drag" | "both";

type Props = Omit<SafeAreaViewProps, "style" | "children"> & {
    variant?: Variant;
    keyboardDismiss?: KeyboardDismiss;

    padding?: keyof typeof spacing;
    styles?: {
        wrapper?: StyleProp<ViewStyle>;
        container?: StyleProp<ViewStyle>;
        content?: StyleProp<ViewStyle>;
    };
    children: ReactNode;
};

type Styles = {
    wrapper: StyleProp<ViewStyle>;
    container: StyleProp<ViewStyle>;
    content: StyleProp<ViewStyle>;
};

export type { Variant, Props, Styles };