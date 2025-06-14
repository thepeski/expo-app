/* @views/TabView/types.ts */

// react imports
import { ImageSourcePropType, ViewStyle, TextStyle } from "react-native";
import { SharedValue } from "react-native-reanimated";

// expo imports
import { ImpactFeedbackStyle, NotificationFeedbackType } from "expo-haptics";
import { Router } from "expo-router";

type IconType = {
    vector?: React.ReactNode;
    image?: ImageSourcePropType;
    tint?: string;
    size?: number;
};

type HapticsType = {
    on?: boolean;
    style?: keyof typeof ImpactFeedbackStyle | keyof typeof NotificationFeedbackType
};

type OptionsType = {
    bounce?: { on?: boolean; min?: number; max?: number; damping?: number; stiffness?: number };
    haptics?: HapticsType;
};

type TabButtonType = {
    isActive: boolean;
    active?: {
        label?: { text: string; color: string };
        icon?: IconType;
        tint?: string;
    };
    inactive?: {
        label?: { text: string; color: string };
        icon?: IconType;
        tint?: string;
    };
    onPressProps: {
        router: Router;
        activePath: string;
        path: string;
        options?: OptionsType;
    };
    styles?: {
        tab?: ViewStyle;
        tabLabel?: TextStyle;
        tabIcon?: ViewStyle;
    }
};

type TabsType = {
    path: string;
    active?: {
        label?: { text: string; color: string };
        icon?: IconType;
    };
    inactive?: {
        label?: { text: string; color: string };
        icon?: IconType;
    };
};

type TabViewType = {
    tabs: TabsType[];
    styles?: {
        container?: ViewStyle;
        content?: ViewStyle;
        tabBar?: ViewStyle;
        tab?: ViewStyle;
        tabLabel?: TextStyle
        tabIcon?: ViewStyle;
    },
    options?: OptionsType;
    children: React.ReactNode;
}

type HandlePressType = {
    router: Router;
    activePath: string;
    path: string;
    scale: SharedValue<number>;
    options?: OptionsType;
};

type RenderTabIconType = {
    isActive: boolean;
    activeIcon?: IconType;
    inactiveIcon?: IconType;
};

export { TabButtonType, TabViewType, HandlePressType, RenderTabIconType };