/* @views/TabView/functions.ts */

// react imports
import { Image } from "react-native";

// src imports
import { animations } from "@services";
import { hapticFeedback } from "@utils";

// local imports
import { HandlePressType, RenderTabIconType } from "./types";

// trigger tab press effects & redirect
function handlePress({ router, activePath, path, scale, options }: HandlePressType) {

    // bounce
    if (options?.bounce?.on) {
        animations.tabs.bounce(
            scale,
            options.bounce.min,
            options.bounce.max,
            options.bounce.damping,
            options.bounce.stiffness
        );
    }

    // trigger haptics
    hapticFeedback(options?.haptics?.on ?? false, options?.haptics?.style);

    // redirect
    if (activePath !== path) {
        router.replace(`/${path}`);
    }
}

// render vector or image icons
function renderTabIcon({ isActive, activeIcon, inactiveIcon }: RenderTabIconType) {

    // active icon
    if (isActive) {

        // vector icon
        if (activeIcon?.vector) {
            return activeIcon.vector;
        }

        // image icon
        if (activeIcon?.image) {
            const activeSize = activeIcon?.size ?? 24;

            return (
                <Image
                    source={activeIcon.image}
                    style={{ width: activeSize, height: activeSize, tintColor: activeIcon?.tint }}
                />
            );
        }
    }

    // inactive icon
    if (!isActive) {

        // vector icon
        if (inactiveIcon?.vector) {
            return inactiveIcon.vector;
        }

        // image icon
        if (inactiveIcon?.image) {
            const inactiveSize = inactiveIcon?.size ?? 24;

            return (
                <Image
                    source={inactiveIcon.image}
                    style={{
                        width: inactiveSize,
                        height: inactiveSize,
                        tintColor: inactiveIcon?.tint
                    }}
                />
            );
        }
    }

    return null;
}

export { handlePress, renderTabIcon };