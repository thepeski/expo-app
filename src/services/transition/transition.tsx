/* @services/transition/transition.tsx */
// transition values to target

// src
import { SpringTransitions, TimingTransitions } from "@constants";

// local
import { getSpringConfig, getTimingConfig, runSpring, runTiming } from "./logic";
import { SpringConfig, TimingConfig } from "./types";

const transition = {
    timing: (to: number, props: TimingTransitions | TimingConfig) => {
        "worklet";

        const config = typeof props === "string" ? getTimingConfig(props) : props;
        return runTiming(to, config);
    },
    spring: (to: number, props: SpringTransitions | SpringConfig) => {
        "worklet";

        const config = typeof props === "string" ? getSpringConfig(props) : props;
        return runSpring(to, config);
    },
} as const;

export { transition };