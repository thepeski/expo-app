/* @screens/Fallback/types.ts */

// react
import { StyleProp, TextStyle, ViewProps, ViewStyle } from "react-native";

type Props = Omit<ViewProps, "style" | "children"> & {
    loading?: boolean;
    error?: boolean;
    message?: string;
    action?: string;
    onAction?: () => void;
    styles?: { container?: StyleProp<ViewStyle>; message?: StyleProp<TextStyle>; };
};

type Logic = void;
type Styles = { container: StyleProp<ViewStyle>; message: StyleProp<TextStyle>; };

export type { Props, Logic, Styles };