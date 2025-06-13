/* @utils/hapticFeedback.ts */

// expo imports
import {
    ImpactFeedbackStyle,
    NotificationFeedbackType,
    selectionAsync,
    impactAsync,
    notificationAsync
} from "expo-haptics";

// src imports
import { Logger } from "@dev";

// check if string matches impact style
function isImpactStyle(style: string): style is keyof typeof ImpactFeedbackStyle {
    return style in ImpactFeedbackStyle;
}

// check if string matches notification style
function isNotificationStyle(style: string): style is keyof typeof NotificationFeedbackType {
    return style in NotificationFeedbackType;
}

function hapticFeedback(on?: boolean, style?: string) {
    const logger = new Logger("hapticFeedback.ts");

    // trigger haptics
    if (on ?? true) {
        void (async () => {
            try {

                // default feedback
                if (!style) {
                    await selectionAsync();
                }
                // styled feedback
                else {

                    // impact
                    if (isImpactStyle(style)) await impactAsync(ImpactFeedbackStyle[style]);

                    // notification
                    if (isNotificationStyle(style)) {
                        await notificationAsync(NotificationFeedbackType[style]);
                    }
                }
            } catch (e) {
                const error = e instanceof Error ? e.message : String(e);

                logger.error(error);
            }
        })();
    }
}

export default hapticFeedback;