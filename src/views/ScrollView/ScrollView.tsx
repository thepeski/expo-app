/* @views/ScrollView/ScrollView.tsx */
// scroll view with custom headers & animations

// react imports
import { useRef } from "react";
import { Animated } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// local imports
import {
    resolveOptions,
    handleScrollFactory,
    makeHeaderProps,
    makeAnimatedStyles
} from "./functions";
import scrollViewStyles from "./styles";
import { ScrollViewType, AnimationConfigType } from "./types";

function ScrollView({ headers, animations, styles, options, children }: ScrollViewType) {

    // resolve component options
    const resolvedOptions = resolveOptions(options ?? {});

    // initialise reference values
    const scrollY = useRef(new Animated.Value(0)).current;
    const lastOverscrollStep = { top: useRef(0), bottom: useRef(0) };

    // track safe area bounds
    const { top, bottom } = useSafeAreaInsets();
    const safeArea = { top: top, bottom: bottom };

    // create handle scroll
    const handleScroll = handleScrollFactory({ scrollY, lastOverscrollStep, resolvedOptions });

    // create header properties
    const { headerHeight, heightOutput } = makeHeaderProps(
        scrollY,
        safeArea.top,
        {
            min: options?.header?.min ?? 1,
            max: options?.header?.max ?? 2,
            offset: options?.header?.offset ?? 0
        },
        options?.extend ?? false
    );

    return (
        <>
            {/* container */}
            <Animated.View
                style={{
                    height: heightOutput,
                    minHeight: headerHeight.collapsed,
                    ...scrollViewStyles.container,
                    ...(styles?.container ?? {})
                }}
            >

                {/* headers */}
                {(headers ?? []).map((HeaderElement, index) => {

                    // extract animations
                    const headerAnimations = (animations?.[index] ?? []) as AnimationConfigType[];

                    return (
                        <Animated.View
                            key={index}
                            style={[
                                makeAnimatedStyles(headerAnimations, scrollY, headerHeight.delta),
                                scrollViewStyles.headers,
                                styles?.headers
                            ]}
                        >
                            {HeaderElement}
                        </Animated.View>
                    );
                })}
            </Animated.View>

            {/* scrollable */}
            <Animated.ScrollView
                onScroll={handleScroll}
                scrollEventThrottle={8}
                contentContainerStyle={{
                    paddingTop: headerHeight.expanded,
                    paddingBottom: safeArea.bottom
                }}
                style={styles?.scrollable}
            >
                {children}
            </Animated.ScrollView>
        </>
    );
}

export default ScrollView;