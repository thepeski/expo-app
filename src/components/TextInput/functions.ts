/* @components/TextInput/functions.ts */

// src imports
import { hapticFeedback } from "@utils";

// local imports
import { HapticsType } from "./types";

// trigger haptics & focus effects
function handleFocus(onChangeText: () => void, hapticsOptions?: HapticsType) {
    hapticFeedback(hapticsOptions?.on ?? false, hapticsOptions?.style);
    onChangeText();
}

export default handleFocus;