/* @views/FlatList/types.ts */

// react imports
import { Animated, ViewStyle } from "react-native";

// expo imports
import * as Haptics from "expo-haptics";

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
    style?: keyof typeof Haptics.ImpactFeedbackStyle |
    keyof typeof Haptics.NotificationFeedbackType;
    step?: number;
};

type FlatListType = {
    headers?: React.ReactNode[];
    data: any[];
    renderItem: ({ item, index }: { item: any; index: number }) => React.ReactElement;
    keyExtractor: (item: any, index: number) => string;
    animations?: AnimationConfigType[][];
    styles?: {
        container?: ViewStyle;
        headers?: ViewStyle;
        scrollable?: ViewStyle;
    }
    options?: {
        bounce?: boolean;
        scrollIndicator?: boolean;
        header?: HeaderType;
        haptics?: HapticsType;
    }
};

type AccumulatorType = Animated.WithAnimatedObject<ViewStyle>;

type ResolveOptionsType = {
    bounce?: boolean;
    scrollIndicator?: boolean;
    header?: HeaderType;
    haptics?: HapticsType;

};

type ResolvedHapticsType = {
    on: boolean;
    style?: keyof typeof Haptics.ImpactFeedbackStyle |
    keyof typeof Haptics.NotificationFeedbackType;
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

export {
    AnimationFunctionType,
    AnimationConfigType,
    FlatListType,
    AccumulatorType,
    ResolveOptionsType,
    HandleScrollType
};