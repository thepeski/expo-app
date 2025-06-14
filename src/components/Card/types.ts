/* @components/Card/types.ts */

// react imports
import { ViewStyle } from "react-native";

// expo imports
import { ImpactFeedbackStyle, NotificationFeedbackType } from "expo-haptics";

type HapticsType = {
    on?: boolean;
    style?: keyof typeof ImpactFeedbackStyle | keyof typeof NotificationFeedbackType;
};

type CardType = {
    type?: "default";
    onPress?: () => void;
    styles?: {
        container?: ViewStyle;
        content?: ViewStyle;
    };
    options?: {
        border?: { on?: boolean; width?: number };
        duration?: number;
        haptics?: HapticsType;
        shadow?: boolean;
    }
    children: React.ReactNode;
};

export { HapticsType, CardType };