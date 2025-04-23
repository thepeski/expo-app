/* Fallback.js */
// loading, error & action messages

// custom imports
import reloadApp from "../utils/reloadApp";

const Fallback = {
    default: {
        loading: "Loading...",
        error: "Oops, something went wrong!",
        action: "Retry",
        onAction: reloadApp
    },
    loadApp: {
        loading: "Loading App...",
        error: "We couldn't load the app",
        action: "Reload",
        onAction: reloadApp
    }
};

export default Fallback;