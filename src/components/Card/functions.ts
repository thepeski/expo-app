/* @components/Card/functions.ts */

// src imports
import { hapticFeedback } from "@utils";

// local imports
import { HapticsType } from "./types";

// trigger haptics & press in effects
function handlePressIn(setIsPressed: () => void, hapticsOptions?: HapticsType) {
    hapticFeedback(hapticsOptions?.on ?? false, hapticsOptions?.style);
    setIsPressed();
}

// handle press out effects
function handlePressOut(setIsPressed: () => void, onPress?: () => void) {
    setIsPressed();
    onPress?.();
}

export { handlePressIn, handlePressOut };