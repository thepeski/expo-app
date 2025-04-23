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
    }
};

export default Fallback;