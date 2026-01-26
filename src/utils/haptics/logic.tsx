/* @utils/haptics/logic.tsx */

// expo
import { ImpactFeedbackStyle, NotificationFeedbackType } from "expo-haptics";

// local
import { Impact, Notification } from "./types";

// verify impact style
function isImpact(style: string): style is Impact { return style in ImpactFeedbackStyle; }

// verify notification style
function isNotification(style: string): style is Notification {
    return style in NotificationFeedbackType;
}

export { isImpact, isNotification };