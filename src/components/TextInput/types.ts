/* @components/TextInput/types.ts */

// react imports
import { ViewStyle, TextStyle, KeyboardTypeOptions } from "react-native";

// expo imports
import { ImpactFeedbackStyle, NotificationFeedbackType } from "expo-haptics";

type HapticsType = {
    on?: boolean;
    style?: keyof typeof ImpactFeedbackStyle | keyof typeof NotificationFeedbackType;
};

type TextInputType = {
    placeholder?: string;
    type?: "default" | "primary" | "secondary" | "third" | "success" | "warning" | "error";
    value: string;
    onChangeText: (text: string) => void;
    styles?: {
        container?: ViewStyle;
        input?: TextStyle;
    };
    options?: {
        autocapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
        autocorrect?: boolean;
        duration?: number;
        haptics?: HapticsType;
        keyboard?: KeyboardTypeOptions;
        password?: boolean;
    }
};

export { HapticsType, TextInputType };