/* @hooks/useBootstrap.ts */
// run tasks on startup

// react imports
import { useState, useEffect } from "react";

// src imports
import { Logger } from "@dev";
import { loadFonts } from "@utils";

// local imports
import { useAuth } from "./useAuth";
import { useTheme } from "./useTheme";

// imitate startup task
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
    const { isAuthLoading, authError } = useAuth();
    const { isThemeLoading, themeError } = useTheme();

    // loading indocators
    const isBootLoading = isEffectLoading || isAuthLoading || isThemeLoading;

    // error indicators
    const bootError = effectError || authError || themeError;

    // master check
    const bootReady = !isBootLoading && !bootError;

    // log auth hooks status
    useEffect(() => {
        if (!isAuthLoading) logger.info("auth tasks completed");
        if (!isThemeLoading) logger.info("theme tasks completed");
    }, [isAuthLoading, isThemeLoading]);

    // run startup tasks
    useEffect(() => {
        void (async () => {
            try {

                // run startup tasks
                await startupTask();
                await loadFonts();

                // boot successful
                setIsEffectLoading(false);

                logger.info("startup tasks completed");
            } catch (e) {
                const error = e instanceof Error ? e.message : String(e);
                setEffectError(true);

                logger.error(error);
            }
        })();
    }, []);

    // resolve
    return { bootReady, isBootLoading, bootError };
}

export default useBootstrap;