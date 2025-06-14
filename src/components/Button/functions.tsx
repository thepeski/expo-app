/* @components/Button/functions.ts */

// react imports
import { Image } from "react-native";

// src imports
import { hapticFeedback } from "@utils";

// local imports
import { HapticsType, IconType } from "./types";

// trigger haptics & press effects
function handlePress(onPress?: () => void, hapticsOptions?: HapticsType) {
    hapticFeedback(hapticsOptions?.on ?? false, hapticsOptions?.style);
    onPress?.();
}

// render vector or image icons
function renderIcon(isActive: boolean, icon?: { active?: IconType; inactive?: IconType; }) {

    // active icon
    if (isActive) {

        // vector icon
        if (icon?.active?.vector) {
            return icon.active.vector;
        }

        // image icon
        if (icon?.active?.image) {
            const activeSize = icon.active.size ?? 24;

            return (
                <Image
                    source={icon.active.image}
                    style={{ width: activeSize, height: activeSize, tintColor: icon.active.tint }}
                />
            );
        }
    }

    // inactive icon
    if (!isActive) {

        // vector icon
        if (icon?.inactive?.vector) {
            return icon.inactive.vector;
        }

        // image icon
        if (icon?.inactive?.image) {
            const activeSize = icon.inactive.size ?? 24;

            return (
                <Image
                    source={icon.inactive.image}
                    style={{
                        width: activeSize,
                        height: activeSize,
                        tintColor: icon.inactive.tint
                    }}
                />
            );
        }
    }

    return null;
}

export { handlePress, renderIcon };