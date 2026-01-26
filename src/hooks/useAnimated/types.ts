/* @hooks/useAnimated/types.ts */

// react
import { SharedValue } from "react-native-reanimated";

// src
import { SpringTransitions, TimingTransitions } from "@constants";
import { SpringConfig, TimingConfig } from "@services";

type Props = {
    shared: SharedValue<number>;
    set: (to: number) => Props;
    reset: () => Props;
    timing: (to: number, props: TimingTransitions | TimingConfig) => Props;
    spring: (to: number, props: SpringTransitions | SpringConfig) => Props;
};

export type { Props };