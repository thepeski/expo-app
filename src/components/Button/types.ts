/* @components/Button/types.ts */

// react imports
import { ImageSourcePropType, ViewStyle, TextStyle } from "react-native";

// expo imports
import { ImpactFeedbackStyle, NotificationFeedbackType } from "expo-haptics";

type IconType = {
    vector?: React.ReactNode;
    image?: ImageSourcePropType;
    tint?: string;
    size?: number;
};

type HapticsType = {
    on?: boolean;
    style?: keyof typeof ImpactFeedbackStyle | keyof typeof NotificationFeedbackType;
};

type ButtonType = {
    label?: string;
    type?: "default" | "primary" | "secondary" | "third" | "success" | "warning" | "error";
    icon?: {
        active?: IconType;
        inactive?: IconType;
    }
    onPress?: () => void;
    styles?: {
        container?: ViewStyle;
        label?: TextStyle;
    };
    options?: {
        border?: { on?: boolean; width?: number };
        duration?: number;
        haptics?: HapticsType;
    }
};

export { IconType, HapticsType, ButtonType };