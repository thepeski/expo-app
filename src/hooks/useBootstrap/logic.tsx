/* @hooks/useBootstrap/logic.tsx */

// react
import { useState } from "react";

// src
// import { Logger } from "@dev";

// local
import { BootStatus } from "./types";

// sample startup task
async function startupTask() {
    // success
    await new Promise(result => setTimeout(result, 1000));

    // crash
    // await new Promise((_, reject) => {
    //     setTimeout(() => { reject(new Error("intentional startup crash")); }, 1000);
    // });
}

// track boot status
function useBootStatus(): BootStatus {
    // const log = new Logger("useBootstrap");

    const [isTasksLoading, setIsTasksLoading] = useState(true);
    const [tasksError, setTasksError] = useState("");

    // initialise hooks
    // const { isHookLoading, hookError } = useHook();

    // loading
    const isBootLoading = isTasksLoading;

    // error
    const bootError = tasksError;

    // ready
    const bootReady = !isBootLoading && !bootError;

    // log hook status
    // useEffect(() => {
    //     if (!isHookLoading) log.info("hook loaded");
    // }, [isHookLoading]);

    return { bootReady, isBootLoading, bootError, setIsTasksLoading, setTasksError };
}

export { startupTask, useBootStatus };