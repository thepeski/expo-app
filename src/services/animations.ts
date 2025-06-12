/* @services/headerAnimations.ts */
// react animted animations

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
    scale: {
        bounce: (
            scale: SharedValue<number>,
            min?: number,
            max?: number,
            damping?: number, 
            stiffness?: number
        ) => {
            scale.value = withSequence(
                withSpring(
                    max ?? 1.12,
                    { damping: damping ?? 8, stiffness: stiffness ?? 500 }
                ),
                withSpring(min ?? 1)
            )
        }
    }
}

export default animations;