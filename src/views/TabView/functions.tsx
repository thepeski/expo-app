/* @components/TabView/functions.ts */

// react imports
import { Image } from "react-native";

// expo imports
import { Router } from "expo-router";

// src imports
import { hapticFeedback } from "@utils";

// local imports
import { HapticsOptionsType, RenderTabIconType } from "./types";

// trigger haptics & redirect on press
function handlePress(
    router: Router,
    activePath: string,
    name: string,
    haptics?: HapticsOptionsType
) {

    // trigger haptics if enabled
    if (haptics?.on) {
        hapticFeedback(haptics.style);
    }

    // redirect
    if (activePath !== name) {
        router.replace(`/${name}`);
    }
}

// render tab bar icons
function renderTabIcon({
    isActive,
    activeColor,
    inactiveColor,
    icon,
    iconActive,
    iconImage,
    iconImageActive,
    iconImageColors,
    iconImageSize
}: RenderTabIconType) {

    // render vector icon
    if (icon || iconActive) {
        return isActive ? iconActive : icon;
    }

    // render image icon
    if (iconImage || iconImageActive) {

        // check & apply image source
        const source = isActive ? iconImageActive : iconImage;
        if (!source) return null;

        // check & apply color if enabled
        let color;
        if (iconImageColors) {
            color = isActive ? activeColor : inactiveColor;
        }

        return (
            <Image
                source={source}
                style={{
                    width: iconImageSize,
                    height: iconImageSize,
                    tintColor: color
                }}
            />
        );
    }

    return null;
}

export { handlePress, renderTabIcon };