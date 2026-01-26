/* @components/Button/types.ts */

// react
import { ReactNode } from "react";
import { ColorValue, PressableProps, StyleProp, TextStyle, ViewStyle } from "react-native";
import { AnimatedStyle } from "react-native-reanimated";

// src
import { Haptics } from "@utils";

// local
import { resolveColors } from "./logic";

type Variant = "primary" | "secondary" | "third" | "ghost" | "link";
type Tone = "brand" | "alt" | "accent" | "success" | "warning" | "error" | "neutral";
type Size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

type Props = Omit<PressableProps, "style" | "children"> & {
    label?: string;
    left?: ReactNode;
    right?: ReactNode;

    variant?: Variant;
    tone?: Tone;
    size?: Size;
    fullWidth?: boolean;

    loading?: boolean;
    disabled?: boolean;

    haptics?: Haptics;
    styles?: {
        container?: StyleProp<AnimatedStyle<ViewStyle>>;
        label?: StyleProp<AnimatedStyle<TextStyle>>;
    };
};

type Styles = {
    container: StyleProp<AnimatedStyle<ViewStyle>>;
    label: StyleProp<AnimatedStyle<TextStyle>>;
    loading: StyleProp<AnimatedStyle<ViewStyle>>;
    loadingColor: ColorValue;
    colors: ReturnType<typeof resolveColors>;
};

export type { Variant, Tone, Size, Props, Styles };