/* @services/animations.ts */
// react animated animations

// react imports
import { Animated, Easing } from "react-native";
import { SharedValue, withSequence, withSpring } from "react-native-reanimated";

const animations = {
    card: {
        backgroundColor: (x: Animated.Value, inactive: string, active: string) => {
            return {
                backgroundColor: x.interpolate({
                    inputRange: [0, 1],
                    outputRange: [inactive, active],
                    extrapolate: "clamp"
                })
            }
        },
        borderColor: (x: Animated.Value, inactive: string, active: string) => {
            return {
                borderColor: x.interpolate({
                    inputRange: [0, 1],
                    outputRange: [inactive, active],
                    extrapolate: "clamp"
                })
            }
        },
        shadow: (x: Animated.Value, inactive = 2, active = 8) => ({
            shadowOpacity: x.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.03],
                extrapolate: "clamp",
            }),
            shadowRadius: x.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 8],
                extrapolate: "clamp",
            }),
            elevation: x.interpolate({
                inputRange: [0, 1],
                outputRange: [inactive, active],
                extrapolate: "clamp",
            }),
        })
    },
    forms: {
        backgroundColor: (x: Animated.Value, inactive: string, active: string) => {
            return {
                backgroundColor: x.interpolate({
                    inputRange: [0, 1],
                    outputRange: [inactive, active],
                    extrapolate: "clamp"
                })
            }
        },
        borderColor: (x: Animated.Value, inactive: string, active: string) => {
            return {
                borderColor: x.interpolate({
                    inputRange: [0, 1],
                    outputRange: [inactive, active],
                    extrapolate: "clamp"
                })
            }
        },
        borderRadius: (x: Animated.Value, inactive: number, active: number) => {
            return {
                borderRadius: x.interpolate({
                    inputRange: [0, 1],
                    outputRange: [inactive, active],
                    extrapolate: "clamp"
                })
            }
        },
        color: (x: Animated.Value, inactive: string, active: string) => {
            return {
                color: x.interpolate({
                    inputRange: [0, 1],
                    outputRange: [inactive, active],
                    extrapolate: "clamp"
                })
            }
        }
    },
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
        },
    },
    universal: {
        ease: (trigger: boolean, x: Animated.Value, duration = 100) => {
            Animated.timing(x, {
                toValue: trigger ? 1 : 0,
                duration: duration,
                easing: Easing.out(Easing.quad),
                useNativeDriver: false,
            }).start();
        },
    }
}

export default animations;