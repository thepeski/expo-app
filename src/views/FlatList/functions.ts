/* @views/FlatList/functions.ts */

// react imports
import { Animated, NativeScrollEvent, NativeSyntheticEvent, ViewStyle } from "react-native";

// src imports
import { hapticFeedback } from "@utils";

// local imports
import {
    ResolveOptionsType,
    HandleScrollType,
    AnimationConfigType,
    AccumulatorType
} from "./types";

// resolve default options
function resolveOptions(options: ResolveOptionsType) {
    return {
        bounce: options?.bounce ?? false,
        scrollIndicator: options?.scrollIndicator ?? false,
        header: {
            min: 1,
            max: 2,
            offset: 0,
            ...(options?.header || {})
        },
        haptics: {
            on: false,
            step: 0.2,
            ...(options?.haptics || {})
        }
    }
}

// create custom handle scroll function
function handleScrollFactory({ scrollY, lastOverscrollStep, resolvedOptions }: HandleScrollType) {
    return function handleScroll(event: NativeSyntheticEvent<NativeScrollEvent>) {

        // deconstruct native event
        const {
            contentOffset: { y: y },
            contentSize: { height: scrollableHeight },
            layoutMeasurement: { height: viewportHeight }
        } = event.nativeEvent;

        // haptics logic
        if (resolvedOptions.haptics.on) {

            // calculate current overscroll
            const currentOverscrollStep = {
                top: Math.floor(Math.max(0, -y) / (viewportHeight * resolvedOptions.haptics.step)),
                bottom: Math.floor(
                    Math.max(0, y - (scrollableHeight - viewportHeight)) /
                    (viewportHeight * resolvedOptions.haptics.step)
                )
            }

            // top overscroll step changes
            if (currentOverscrollStep.top !== lastOverscrollStep.top.current) {

                // update overscroll step & trigger haptics
                lastOverscrollStep.top.current = currentOverscrollStep.top;
                hapticFeedback(resolvedOptions.haptics.style);
            }

            // bottom overscroll step changes
            if (currentOverscrollStep.bottom !== lastOverscrollStep.bottom.current) {

                // update overscroll step & trigger haptics
                lastOverscrollStep.bottom.current = currentOverscrollStep.bottom;
                hapticFeedback(resolvedOptions.haptics.style);
            }
        }

        // update animated scroll value
        scrollY.setValue(y);
    }
}

// calculate header height states & output values
function makeHeaderProps(
    scrollY: Animated.Value,
    safeAreaTop: number,
    header: { min: number, max: number, offset: number },
    bounce: boolean) {

    const headerHeight = {
        collapsed: safeAreaTop * header.min,
        expanded: safeAreaTop * header.max,
        delta: safeAreaTop * (header.max - header.min) * (1 + header.offset)
    };

    const heightOutput = scrollY.interpolate({
        inputRange: [0, headerHeight.delta],
        outputRange: [headerHeight.expanded, headerHeight.collapsed],
        extrapolate: bounce ? "extend" : "clamp"
    });

    return { headerHeight, heightOutput };
}

// create animated style properties
function makeAnimatedStyles(
    configs: AnimationConfigType[],
    scrollY: Animated.Value,
    delta: number
): Animated.WithAnimatedObject<ViewStyle> {
    return configs.reduce((acc: AccumulatorType, config) => {

        // [function] format
        if (typeof config === "function") {
            const fn = config;
            return { ...acc, ...fn(scrollY, { min: 0, max: delta }) };
        }
        // { fn: function, inputRange: { min: 0, max: 1 } } format
        else {
            const { fn, inputRange } = config;
            return {
                ...acc,
                ...fn(scrollY, inputRange ?? { min: 0, max: delta })
            };
        }
    }, {});
}

export { resolveOptions, handleScrollFactory, makeHeaderProps, makeAnimatedStyles };