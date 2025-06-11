/* @constants/fallback.ts */
// fallback screen messages & actions

// src imports
import { reloadApp } from "@utils";

const fallback = {
    default: {
        loadingMsg: "Loading...",
        errorMsg: "We couldn't load the app right now",
        action: "Reload",
        onAction: reloadApp
    }
};

export default fallback;