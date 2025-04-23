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

// console logs
const ConsoleLog = {

};

// console warnings
const ConsoleWarn = {

};

// console errors
const ConsoleError = {
    AppErrorBoundary: appErrorBoundaryMessage("caught error"),
    reloadApp: reloadAppMessage("error reloading app")
};

export { ConsoleLog, ConsoleWarn, ConsoleError };