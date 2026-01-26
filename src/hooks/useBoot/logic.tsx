/* @hooks/useBoot/logic.tsx */

// react
import { useState } from "react";

// src
// import { Logger } from "@dev";

// local
import { Logic } from "./types";

// sample startup task
async function task() {
    // success
    await new Promise(result => setTimeout(result, 1000));

    // crash
    // await new Promise((_, reject) => {
    //     setTimeout(() => { reject(new Error("intentional boot crash")); }, 1000);
    // });
}

// track boot status
function useStatus(): Logic {
    // const log = new Logger("useBootstrap");

    const [isTasksLoading, setIsTasksLoading] = useState(true);
    const [tasksError, setTasksError] = useState("");

    // initialise hooks
    // const { hookReady, isHookLoading, hookError } = useHook();

    // loading
    const isBootLoading = isTasksLoading; // add hooks

    // error
    const bootError = tasksError; // add hooks

    // ready
    const bootReady = !isBootLoading && !bootError;

    // log hook status
    // useEffect(() => {
    //     if (hookReady) log.info("hook loaded");
    // }, [hookReady]);

    return { bootReady, isBootLoading, bootError, setIsTasksLoading, setTasksError };
}

export { task, useStatus };