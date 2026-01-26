/* @constants/transitions/transitions.ts */
// transition presets

// local
import { motion } from "../motion";

const transitions = {
    timing: {
        instant: { duration: motion.instant, easing: "linear" },
        xfast: { duration: motion.xfast, easing: "cubicOut" },
        fast: { duration: motion.fast, easing: "quadOut" },
        normal: { duration: motion.normal, easing: "easeInOut" },
        steady: { duration: motion.steady, easing: "easeInOut" },
        slow: { duration: motion.slow, easing: "ease" },
        xslow: { duration: motion.xslow, easing: "cubicInOut" },
    },
    spring: {
        bounce: { damping: 14, stiffness: 260, mass: 1 },
        snappy: { damping: 18, stiffness: 300, mass: 1 },
        smooth: { damping: 20, stiffness: 180, mass: 1 },
        gentle: { damping: 24, stiffness: 120, mass: 1 },
        heavy: { damping: 26, stiffness: 140, mass: 1.4 },
        elastic: { damping: 10, stiffness: 320, mass: 0.8 },
    },
} as const;

export { transitions };