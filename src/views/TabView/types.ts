/* @views/TabView/types.ts */

// react imports
import { ImageSourcePropType, TextStyle, ViewStyle } from "react-native";

// expo imports
import * as Haptics from "expo-haptics";

type BounceOptionsType = {
    on?: boolean;
    min?: number;
    max?: number;
    damping?: number;
    stiffness?: number;
};

type TabButtonType = {
    label: string;
    isActive: boolean;
    onPress: () => void;
    activeColor: string;
    inactiveColor: string;
    icon?: React.ReactNode;
    iconActive?: React.ReactNode;
    iconImage?: ImageSourcePropType;
    iconImageActive?: ImageSourcePropType;
    iconImageColors?: boolean;
    iconImageSize?: number;
    styles?: {
        tab?: ViewStyle;
        tabIcon?: ViewStyle;
        tabLabel?: TextStyle;
    },
    options?: { bounce?: BounceOptionsType; };
};

type TabsType = {
    path: string;
    label: string;
    activeColor: string;
    inactiveColor: string;
    icon?: React.ReactNode;
    iconActive?: React.ReactNode;
    iconImage?: ImageSourcePropType;
    iconImageActive?: ImageSourcePropType;
    iconImageColors?: boolean;
    iconImageSize?: number;
};

type HapticsOptionsType = {
    on?: boolean;
    style?: keyof typeof Haptics.ImpactFeedbackStyle |
    keyof typeof Haptics.NotificationFeedbackType;
};

type TabViewType = {
    tabs: TabsType[];
    styles?: {
        container?: ViewStyle;
        content?: ViewStyle;
        tabContainer?: ViewStyle;
        tab?: ViewStyle;
        tabIcon?: ViewStyle;
        tabLabel?: TextStyle;
    };
    options?: {
        bounce?: BounceOptionsType;
        haptics?: HapticsOptionsType;
    };
    children: React.ReactNode;
};

type RenderTabIconType = {
    isActive: boolean;
    activeColor: string;
    inactiveColor: string;
    icon?: React.ReactNode;
    iconActive?: React.ReactNode;
    iconImage?: ImageSourcePropType;
    iconImageActive?: ImageSourcePropType;
    iconImageColors?: boolean;
    iconImageSize?: number;
};

export { TabButtonType, HapticsOptionsType, TabViewType, RenderTabIconType };