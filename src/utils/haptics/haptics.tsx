/* @utils/haptics/haptics.tsx */
// trigger haptic feedback

// expo
import {
    impactAsync,
    ImpactFeedbackStyle,
    notificationAsync,
    NotificationFeedbackType,
    selectionAsync
} from "expo-haptics";

// src
import { Logger } from "@dev";

// local
import { isImpact, isNotification } from "./logic";
import { Haptics } from "./types";

function haptics(style?: Haptics) {
    const log = new Logger("haptics");

    void (async () => {
        try {
            // default
            if (!style) await selectionAsync();
            else {
                if (isImpact(style)) await impactAsync(ImpactFeedbackStyle[style]);
                if (isNotification(style)) {
                    await notificationAsync(NotificationFeedbackType[style]);
                }
            }
        } catch (e) {
            const error = e instanceof Error ? e.message : String(e);
            log.error(error);
        }
    })();
}

export { haptics };