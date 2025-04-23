/* ConsoleError.js */
// console error messages & file names

// combine properties into one string
function makeConsoleMessage(file, extension = "js", message = "error") {
    return `(${file}.${extension}) ${message}`;
}

// add message to file & extension
function forFile(file, extension) {
    return (message) => makeConsoleMessage(file, extension, message);
}

// define message functions per sets of files & extensions
const appErrorBoundaryMessage = forFile("AppErrorBoundary", "jsx");
const reloadAppMessage = forFile("reloadApp", "js");
const storageMessage = forFile("storage", "js");
const themeContext = forFile("ThemeContext", "jsx");

// console logs
const ConsoleLog = {
    storage: {
        setToken: storageMessage("set storage token with key"),
        deleteToken: storageMessage("deleted storage token with key")
    }
};

// console warnings
const ConsoleWarn = {
    storage: {
        setNull: storageMessage("cannot set null storage token with key"),
    },
    ThemeContext: {
        userTheme: themeContext("stored user theme missing or invalid"),
        themeMode: themeContext("stored theme mode missing or invalid")
    }
};

// console errors
const ConsoleError = {
    AppErrorBoundary: appErrorBoundaryMessage("caught error"),
    reloadApp: reloadAppMessage("error reloading app"),
    storage: {
        getToken: storageMessage("error getting storage token with key"),
        setToken: storageMessage("error setting storage token with key"),
        deleteToken: storageMessage("error deleting storage token with key")
    },
    ThemeContext: {
        resolveTheme: themeContext("error resolving theme"),
        changeTheme: themeContext("error changing theme"),
        toggleThemeMode: themeContext("error toggling theme mode")
    }
};

export { ConsoleLog, ConsoleWarn, ConsoleError };