/* @hooks/useAnimated/useAnimated.tsx */
// provide animated value

// react
import { useRef } from "react";
import { useSharedValue } from "react-native-reanimated";

// src
import { transition } from "@services";

// local
import { Props } from "./types";

function useAnimated(initial: number): Props {
    const initialRef = useRef(initial);
    const shared = useSharedValue(initialRef.current);

    const api: Props = {
        shared,
        set: (to) => {
            shared.value = to;
            return api;
        },
        reset: () => {
            shared.value = initialRef.current;
            return api;
        },
        timing: (to, props) => {
            shared.value = transition.timing(to, props);
            return api;
        },
        spring: (to, props) => {
            shared.value = transition.spring(to, props);
            return api;
        },
    };

    return api;
}

export { useAnimated };