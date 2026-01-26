/* @dev/Logger/Logger.tsx */
// log console messages

// local
import { Props } from "./types";

// message types to show
const showLogs = { info: true, warn: true, error: true, debug: true, default: true };

// track development mode
const isDev = __DEV__;

class Logger {
    // store file name
    private fileName: string;
    constructor(fileName: string) { this.fileName = fileName }

    // log message
    private log(level: Props, ...args: any[]) {
        // ignore logs in production mode
        if (!isDev) return;

        // store date as string
        const now = new Date();
        const timestamp = now.toISOString().replace("T", " ").slice(0, 23);

        // create message prefix
        const prefix = `[${timestamp}] [${this.fileName}]`;

        switch (level) {
            case "info":
                if (!showLogs.info) return;
                console.info(prefix, ...args);
                break;
            case "warn":
                if (!showLogs.warn) return;
                console.warn(prefix, ...args);
                break;
            case "error":
                if (!showLogs.error) return;
                console.error(prefix, ...args);
                break;
            case "debug":
                if (!showLogs.debug) return;
                console.debug(prefix, ...args);
                break;
            default:
                if (!showLogs.default) return;
                console.log(prefix, ...args);
        }
    }

    // log info
    info(...args: any[]) { this.log("info", ...args) }

    // log warn
    warn(...args: any[]) { this.log("warn", ...args) }

    // log error
    error(...args: any[]) { this.log("error", ...args) }

    // log debug
    debug(...args: any[]) { this.log("debug", ...args) }
}

export { Logger };