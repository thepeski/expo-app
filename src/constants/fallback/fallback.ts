/* @constants/fallback/fallback.ts */
// fallback screen messages & actions

// src
import { reloadApp } from "@utils";

const fallback = {
    loadingMsg: "Loading...",
    errorMsg: "We couldn't load the app right now",
    action: "Reload",
    onAction: reloadApp
};

export { fallback };