/* @services/transition/types.ts */

// react
import { EasingFunction } from "react-native-reanimated";

type EasingConfig =
    | "linear"
    | "ease"
    | "easeIn"
    | "easeOut"
    | "easeInOut"
    | "quadIn"
    | "quadOut"
    | "quadInOut"
    | "cubicIn"
    | "cubicOut"
    | "cubicInOut"
    | "expoIn"
    | "expoOut"
    | "backIn"
    | "backOut"
    | "elasticIn"
    | "elasticOut"
    | { bezier: [number, number, number, number] }
    | { steps: number; mode?: "start" | "end" }
    | { custom: EasingFunction };

type TimingConfig = { duration?: number; easing?: EasingConfig; };

type SpringConfig = {
    damping?: number;
    stiffness?: number;
    mass?: number;
    overshootClamping?: boolean;
};

export type { EasingConfig, TimingConfig, SpringConfig };