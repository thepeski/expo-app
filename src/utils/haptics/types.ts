/* @utils/haptics/types.ts */

// expo
import { ImpactFeedbackStyle, NotificationFeedbackType } from "expo-haptics";

type Impact = keyof typeof ImpactFeedbackStyle;
type Notification = keyof typeof NotificationFeedbackType;
type Haptics = Impact | Notification;

export { Impact, Notification, Haptics };