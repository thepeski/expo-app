/* @views/BackgroundView/types.ts */

// react imports
import { ColorValue, ImageSourcePropType, ViewStyle, ImageResizeMode } from "react-native";

type BackgroundViewType = {
    color?: string;
    gradient?: readonly [ColorValue, ColorValue, ...ColorValue[]];
    source?: ImageSourcePropType;
    style?: ViewStyle;
    options?: {
        resizeMode?: ImageResizeMode;
        excludeSafeArea?: boolean;
    }
    children: React.ReactNode;
};

export { BackgroundViewType };