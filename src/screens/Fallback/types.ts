/* @screens/Fallback/types.ts */

// react
import { TextStyle, ViewStyle } from "react-native";

type Props = {
    loading?: boolean;
    error?: boolean;
    message?: string;
    action?: string;
    onAction?: () => void;
    styles?: { container?: ViewStyle; message?: TextStyle; };
};

export { Props };