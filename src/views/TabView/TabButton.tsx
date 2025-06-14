/* @views/TabView/TabButton.tsx */
// custom tab bar button

// react imports
import { Pressable, Text } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle } from "react-native-reanimated";

// local imports
import { handlePress, renderTabIcon } from "./functions";
import { tabButtonStyles } from "./styles";
import { TabButtonType } from "./types";

function TabButton({ isActive, active, inactive, onPressProps, styles }: TabButtonType) {

    // initialise scale animation
    const scale = useSharedValue(1);
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }]
    }));

    return (

        // tab button container
        <Pressable
            onPress={() => {
                handlePress({
                    router: onPressProps.router,
                    activePath: onPressProps.activePath,
                    path: onPressProps.path,
                    scale: scale,
                    options: onPressProps.options
                })
            }}
            style={[tabButtonStyles.tab, styles?.tab]}
        >

            {/* tab icon */}
            <Animated.View style={[animatedStyle, styles?.tabIcon]}>
                {renderTabIcon({
                    isActive: isActive,
                    activeIcon: active?.icon,
                    inactiveIcon: inactive?.icon
                })}
            </Animated.View>

            {/* active tab label */}
            {isActive && active?.label?.text &&
                <Text style={[{ color: active?.label?.color }, styles?.tabLabel]}>
                    {active?.label?.text}
                </Text>
            }

            {/* inactive tab label */}
            {!isActive && inactive?.label?.text &&
                <Text style={[{ color: inactive?.label?.color }, styles?.tabLabel]}>
                    {inactive?.label?.text}
                </Text>
            }
        </Pressable>
    );
}

export default TabButton;