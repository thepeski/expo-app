/* @views/BackgroundView/BackgroundView.tsx */
// view with custom color, gradient or image background

// react imports
import { View, ImageBackground } from "react-native";

// expo imports
import { LinearGradient } from "expo-linear-gradient";

// local impots
import makeBackgroundViewStyles from "./styles";
import { BackgroundViewType } from "./types";

function BackgroundView({
    color,
    gradient,
    source,
    options,
    style,
    children
}: BackgroundViewType) {
    const backgroundViewStyles = makeBackgroundViewStyles(options?.excludeSafeArea);

    // color background
    if (color && !gradient && !source) {
        return (
            <View style={[
                { backgroundColor: color },
                backgroundViewStyles.container,
                style]}
            >
                {children}
            </View>
        )
    }

    // gradient background
    if (gradient && !color && !source) {
        return (
            <LinearGradient
                colors={gradient}
                style={[backgroundViewStyles.container, style]}
            >
                {children}
            </LinearGradient>
        );
    }

    // image background
    if (source && !color && !gradient) {
        return (
            <ImageBackground
                source={source}
                resizeMode={options?.resizeMode}
                style={[backgroundViewStyles.container, style]}
            >
                {children}
            </ImageBackground>
        );
    }

    return null;
}

export default BackgroundView;