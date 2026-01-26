/* @components/Button/Button.tsx */
// default button

// react
import { useMemo } from "react";
import { ActivityIndicator, Pressable } from "react-native";
import Animated, { interpolate, interpolateColor, useAnimatedStyle } from "react-native-reanimated";

// src
import { opacity, scale } from "@constants";
import { useAnimated, useTheme } from "@hooks"
import { haptics as h } from "@utils";

// local
import { makeStyles } from "./styles";
import { Props } from "./types";

function Button({
    label,
    left,
    right,
    variant = "primary",
    tone = "brand",
    size = "md",
    fullWidth,
    loading,
    disabled,
    haptics,
    styles,
    ...rest
}: Props) {
    const { theme } = useTheme();
    const iconOnly = !label && (!!left || !!right);
    const s = useMemo(() => {
        return makeStyles(theme, variant, tone, size, iconOnly, fullWidth);
    }, [theme, variant, tone, size, iconOnly, fullWidth]);

    const x = useAnimated(0);
    const animContainer = useAnimatedStyle(() => ({
        borderColor: interpolateColor(
            x.shared.value,
            [0, 1],
            [s.colors.border, s.colors.borderPressed],
        ),
        backgroundColor: interpolateColor(
            x.shared.value,
            [0, 1],
            [s.colors.bg, s.colors.bgPressed],
        ),
        opacity: disabled ? opacity.soft : opacity.full,
        transform: [
            { scale: interpolate(x.shared.value, [0, 1], [scale.full, scale.press.default]) },
        ],
    }), [theme, variant, tone, size, iconOnly, fullWidth]);

    const animLabel = useAnimatedStyle(() => ({
        color: interpolateColor(x.shared.value, [0, 1], [s.colors.label, s.colors.labelPressed]),
    }), [theme, variant, tone, size, iconOnly, fullWidth]);

    return (
        <Pressable
            {...rest}
            disabled={loading || disabled}
            onPressIn={(event) => {
                x.timing(1, "xfast");
                rest.onPressIn?.(event);
            }}
            onPressOut={(event) => {
                x.timing(0, "normal");
                rest.onPressOut?.(event);
            }}
            onPress={(event) => {
                if (haptics) h(haptics);
                rest.onPress?.(event);
            }}
        >
            {/* container */}
            <Animated.View style={[animContainer, s.container, styles?.container]}>
                {/* left */}
                {left ?? null}

                {/* label */}
                {label && <Animated.Text style={[animLabel, s.label, styles?.label]}>{label}</Animated.Text>}

                {/* right */}
                {right ?? null}

                {/* loading */}
                {loading ? (
                    <Animated.View pointerEvents="none" style={s.loading}>
                        <ActivityIndicator size="small" color={s.loadingColor} />
                    </Animated.View>
                ) : null}
            </Animated.View>
        </Pressable>
    );
}

export default Button;