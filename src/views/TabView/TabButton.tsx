/* @views/TabView/TabButton.tsx */

// react imports
import { Pressable, Text } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle } from "react-native-reanimated";

// src imports
import { animations } from "@services";

// local imports
import { renderTabIcon } from "./functions";
import tabViewStyles from "./styles";
import { TabButtonType } from "./types";

function TabButton({
    label,
    isActive,
    onPress,
    activeColor,
    inactiveColor,
    icon,
    iconActive,
    iconImage,
    iconImageActive,
    iconImageColors,
    iconImageSize,
    styles,
    options
}: TabButtonType) {

    // initialise scale animation
    const scale = useSharedValue(1);
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }]
    }));

    return (

        // tab container
        <Pressable
            onPress={() => {
                if (options?.bounce?.on) {
                    animations.scale.bounce(
                        scale,
                        options.bounce.min,
                        options.bounce.max,
                        options.bounce.damping,
                        options.bounce.stiffness
                    );
                }
                onPress();
            }}
            style={[tabViewStyles.tab, styles?.tab]}>

            {/* tab icon */}
            <Animated.View style={[animatedStyle, styles?.tabIcon]}>
                {renderTabIcon({
                    isActive,
                    activeColor,
                    inactiveColor,
                    icon,
                    iconActive,
                    iconImage,
                    iconImageActive,
                    iconImageColors,
                    iconImageSize
                })}
            </Animated.View>

            {/* tab label */}
            {label &&
                <Text style={[
                    { color: isActive ? activeColor : inactiveColor },
                    styles?.tabLabel
                ]}>
                    {label}
                </Text>
            }
        </Pressable>
    );
}

export default TabButton;