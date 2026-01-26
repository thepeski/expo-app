/* @services/transition/logic.tsx */

// react
import { Easing, withSpring, withTiming } from "react-native-reanimated";

// src
import { SpringTransitions, TimingTransitions, transitions } from "@constants";

// local
import { EasingConfig, SpringConfig, TimingConfig } from "./types";

// return easing function
function resolveEasing(easing?: EasingConfig) {
    "worklet";

    // default
    if (!easing) return Easing.inOut(Easing.cubic);

    // advanced
    if (typeof easing === "object") {
        if ("bezier" in easing) return Easing.bezier(...easing.bezier);

        if ("steps" in easing) {
            const n = Math.max(1, Math.floor(easing.steps));
            const roundUp = easing.mode !== "start";
            return Easing.steps(n, roundUp);
        }

        if ("custom" in easing) return easing.custom;
    }

    // basic
    switch (easing) {
        case "linear": return Easing.linear;

        case "ease": return Easing.inOut(Easing.cubic);
        case "easeIn": return Easing.in(Easing.cubic);
        case "easeOut": return Easing.out(Easing.cubic);
        case "easeInOut": return Easing.inOut(Easing.cubic);

        case "quadIn": return Easing.in(Easing.quad);
        case "quadOut": return Easing.out(Easing.quad);
        case "quadInOut": return Easing.inOut(Easing.quad);

        case "cubicIn": return Easing.in(Easing.cubic);
        case "cubicOut": return Easing.out(Easing.cubic);
        case "cubicInOut": return Easing.inOut(Easing.cubic);

        case "expoIn": return Easing.in(Easing.exp);
        case "expoOut": return Easing.out(Easing.exp);

        case "backIn": return Easing.in(Easing.back(1.70158));
        case "backOut": return Easing.out(Easing.back(1.70158));

        case "elasticIn": return Easing.in(Easing.elastic(1));
        case "elasticOut": return Easing.out(Easing.elastic(1));

        default: return Easing.inOut(Easing.cubic);
    }
}

// get timing config from preset
function getTimingConfig(preset: TimingTransitions): TimingConfig {
    "worklet";
    return transitions.timing[preset];
}

// get spring config from preset
function getSpringConfig(preset: SpringTransitions): SpringConfig {
    "worklet";
    return transitions.spring[preset];
}

// transition with timing
function runTiming(to: number, config: TimingConfig) {
    "worklet";

    return withTiming(to, {
        duration: config.duration ?? 150,
        easing: resolveEasing(config.easing ?? "easeInOut")
    });
}

// transition with spring
function runSpring(to: number, config: SpringConfig) {
    "worklet";

    return withSpring(to, {
        damping: config.damping ?? 16,
        stiffness: config.stiffness ?? 220,
        mass: config.mass ?? 1,
        overshootClamping: config.overshootClamping ?? false
    });
}

export { resolveEasing, getTimingConfig, getSpringConfig, runTiming, runSpring };