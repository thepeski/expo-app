/* @hooks/useDriver/useDriver.tsx */
// drive animations

// react
import { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";

// src
import { SpringTransitions, TimingTransitions } from "@constants";
import { SpringConfig, TimingConfig, transition } from "@services";

// local
import { mapStyles } from "./logic";
import { MapStylesProps } from "./types";

function useDriver(initial: number) {
    const shared = useSharedValue(initial);
    const onScroll = useAnimatedScrollHandler({
        onScroll: (event) => { shared.value = event.contentOffset.y; }
    });

    const api = {
        shared,
        onScroll,
        set: (to: number) => {
            shared.value = to;
            return api;
        },
        timing: (to: number, props: TimingTransitions | TimingConfig) => {
            shared.value = transition.timing(to, props);
            return api;
        },
        spring: (to: number, props: SpringTransitions | SpringConfig) => {
            shared.value = transition.spring(to, props);
            return api;
        },
        mapStyles: (props: MapStylesProps) => mapStyles(shared, props),
    };

    return api;
}

export { useDriver };