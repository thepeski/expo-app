/* @hooks/useBoot/useBoot.tsx */
// initialise hooks & run startup tasks

// react
import { useEffect } from "react";

// src
import { Logger } from "@dev";

// local
import { task, useStatus } from "./logic";
import { Props } from "./types";

function useBoot(): Props {
    const log = new Logger("useBootstrap");

    const { bootReady, isBootLoading, bootError, setIsTasksLoading, setTasksError } = useStatus();

    // run startup tasks
    useEffect(() => {
        void (async () => {
            try {
                // startup tasks
                await task();

                log.info("startup tasks completed");
            } catch (e) {
                const error = e instanceof Error ? e.message : String(e);
                setTasksError(error);
                log.error(error);
            } finally { setIsTasksLoading(false); }
        })();
    }, []);

    // resolve
    return { bootReady, isBootLoading, bootError };
}

export { useBoot };