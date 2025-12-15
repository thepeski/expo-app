/* @hooks/useBootstrap/useBootstrap.tsx */
// initialise hooks & run startup tasks

// react
import { useEffect } from "react";

// src
import { Logger } from "@dev";
import { loadFonts } from "@utils";

// local
import { startupTask, useBootStatus } from "./logic";
import { Props } from "./types";

function useBootstrap(): Props {
    const log = new Logger("useBootstrap");

    const {
        bootReady,
        isBootLoading,
        bootError,
        setIsTasksLoading,
        setTasksError
    } = useBootStatus();

    // run startup tasks
    useEffect(() => {
        void (async () => {
            try {
                // startup tasks
                await startupTask();
                await loadFonts();

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

export { useBootstrap };