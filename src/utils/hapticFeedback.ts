/* @utils/hapticFeedback.ts */
// trigger haptic feedback

// expo imports
import * as Haptics from "expo-haptics";

// src imports
import { Logger } from "@dev";

// check if string matches impact style
function isImpactStyle(style: string):
    style is keyof typeof Haptics.ImpactFeedbackStyle {
    return style in Haptics.ImpactFeedbackStyle;
}

// check if string matches notification impact style
function isNotificationStyle(style: string):
    style is keyof typeof Haptics.NotificationFeedbackType {
    return style in Haptics.NotificationFeedbackType;
}

// trigger haptics
function hapticFeedback(style?: string) {
    const logger = new Logger("hapticFeedback.ts");

    void (async () => {
        try {

            // selection haptics on default
            if (!style) {
                await Haptics.selectionAsync();
            }
            // haptics with provided style
            else {
                // impact style haptics
                if (isImpactStyle(style)) {
                    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle[style]);
                }
                // notification style haptics
                else if (isNotificationStyle(style)) {
                    await Haptics.notificationAsync(Haptics.NotificationFeedbackType[style]);
                }
                // selection haptics on invalid style
                else {
                    await Haptics.selectionAsync();
                }
            }
        } catch (e) {
            const error = e instanceof Error ? e.message : String(e);

            logger.error("haptic feedback failed", error);
        }
    })();
}

export default hapticFeedback;