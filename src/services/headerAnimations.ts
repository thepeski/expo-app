/* @services/headerAnimations.ts */
// headers animations in scrollable views

// react imports
import { Animated } from "react-native";

const headerAnimations = {
    fadeIn: (x: Animated.Value, inputRange = { min: 0, max: 1 }) => {
        return {
            opacity: x.interpolate({
                inputRange: [inputRange.min, inputRange.max],
                outputRange: [0, 1], // opacity from 0% to 100%
                extrapolate: "clamp"
            })
        };
    },
    fadeOut: (x: Animated.Value, inputRange = { min: 0, max: 1 }) => {
        return {
            opacity: x.interpolate({
                inputRange: [inputRange.min, inputRange.max],
                outputRange: [1, 0], // opacity from 100% to 0%
                extrapolate: "clamp"
            })
        };
    }
}

export default headerAnimations;