/* @services/animations.ts */
// react animated animations

// react imports
import { Animated } from "react-native";
import { SharedValue, withSequence, withSpring } from "react-native-reanimated";

const animations = {
    headers: {
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
    },
    tabs: {
        bounce: (
            scale: SharedValue<number>, min = 1, max = 1.12, damping = 8, stiffness = 500) => {
            scale.value = withSequence(
                withSpring(max, { damping: damping, stiffness: stiffness }), withSpring(min)
            )
        }
    }
}

export default animations;