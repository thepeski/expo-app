/* @hooks/useBootstrap.ts */
// load data required on startup

// react imports
import { useEffect, useState } from "react";

// src imports
import { Logger } from "@dev";

// imitate data loading
async function startupTask() {

    // success
    await new Promise(result => setTimeout(result, 1000));

    // crash
    // await new Promise((_, reject) => {
    //     setTimeout(() => {
    //         reject(new Error("intentional startup crash"));
    //     }, 1000);
    // })
}

function useBootstrap() {
    const logger = new Logger("useBootstrap.ts");

    // initialise startup tasks status
    const [isEffectLoading, setIsEffectLoading] = useState(true);
    const [effectError, setEffectError] = useState(false);

    // add other hooks here

    // loading indocators
    const isBootLoading = isEffectLoading;

    // error indicators
    const bootError = effectError;

    // master check
    const bootReady = !isBootLoading && !bootError;

    // log auth hooks status
    useEffect(() => {

    }, []);

    // run startup tasks
    useEffect(() => {
        async function loadData() {
            try {
                // run startup tasks
                await startupTask();

                // boot successful
                setIsEffectLoading(false);

                logger.info("startup tasks completed");
            } catch (e) {
                const error = e instanceof Error ? e.message : String(e);
                setEffectError(true);

                logger.error("startup tasks failed", error);
            }
        }

        loadData();
    }, []);

    // resolve
    return { bootReady, isBootLoading, bootError };
}

export default useBootstrap;