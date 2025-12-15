/* @screens/Background/types.ts */

// react
import { ReactNode } from "react";
import { ColorValue, ImageResizeMode, ImageSourcePropType, ViewStyle } from "react-native";

type Props = {
    color?: ColorValue;
    source?: ImageSourcePropType;
    resizeMode?: ImageResizeMode;
    styles?: ViewStyle;
    children: ReactNode;
};

export { Props };