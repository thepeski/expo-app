/* @utils/Logger.ts */
// log console messages

// message types to show
const showLogs = {
    info: true,
    warn: true,
    error: true,
    debug: true,
    default: true
};

// define type
type LogType = "info" | "warn" | "error" | "debug";

// track development mode
const isDev = __DEV__;

class Logger {
    private fileName: string;

    // store file name
    constructor(fileName: string) {
        this.fileName = fileName;
    }

    // log message
    private log(level: LogType, ...args: any[]) {

        // ignore logs in production
        if (!isDev) return;

        // store date as string
        const now = new Date();
        const timestamp = now.toISOString().replace("T", " ").slice(0, 23);

        // create prefix
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
    info(...args: any[]) {
        this.log("info", ...args);
    }

    // log warning
    warn(...args: any[]) {
        this.log("warn", ...args);
    }

    // log error
    error(...args: any[]) {
        this.log("error", ...args);
    }

    // log debug
    debug(...args: any[]) {
        this.log("debug", ...args);
    }
}

export default Logger;