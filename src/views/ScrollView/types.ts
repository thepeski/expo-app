/* @views/ScrollView/types.ts */

// react imports
import { Animated, ViewStyle } from "react-native";

// expo imports
import { ImpactFeedbackStyle, NotificationFeedbackType } from "expo-haptics";

type AnimationFunctionType = (
    x: Animated.Value,
    inputRange?: { min: number; max: number }
) => Partial<Animated.WithAnimatedObject<ViewStyle>>;

type AnimationConfigType = AnimationFunctionType | {
    fn: AnimationFunctionType;
    inputRange?: { min: number; max: number };
};

type HeaderType = {
    min?: number,
    max?: number;
    offset?: number;
};

type HapticsType = {
    on?: boolean;
    style?: keyof typeof ImpactFeedbackStyle |
    keyof typeof NotificationFeedbackType;
    step?: number;
};

type ScrollViewType = {
    headers?: React.ReactNode[];
    animations?: AnimationConfigType[][];
    styles?: {
        container?: ViewStyle;
        headers?: ViewStyle;
        scrollable?: ViewStyle;
    }
    options?: {
        extend?: boolean;
        header?: HeaderType;
        haptics?: HapticsType;
    }
    children: React.ReactNode;
};

type ResolveOptionsType = {
    extend?: boolean;
    header?: HeaderType;
    haptics?: HapticsType;

};

type ResolvedHapticsType = {
    on: boolean;
    style?: keyof typeof ImpactFeedbackStyle |
    keyof typeof NotificationFeedbackType;
    step: number;
};

type OverscrollType = {
    top: React.RefObject<number>;
    bottom: React.RefObject<number>;
};

type HandleScrollType = {
    scrollY: Animated.Value;
    resolvedOptions: {
        haptics: ResolvedHapticsType;
    };
    lastOverscrollStep: OverscrollType;
};

type AccumulatorType = Animated.WithAnimatedObject<ViewStyle>;

export {
    AnimationFunctionType,
    AnimationConfigType,
    ScrollViewType,
    ResolveOptionsType,
    HandleScrollType,
    AccumulatorType
};