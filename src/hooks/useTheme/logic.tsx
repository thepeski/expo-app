/* @hooks/useTheme/logic.tsx */

// react
import { useEffect } from "react";

// src
import { storageKeys, ThemeMode, themeModes, ThemeName, themes } from "@constants";
import { Logger } from "@dev";
import { storage } from "@services";

// local
import { ResolveTheme, ResolveThemeMode, UseListener, UseOnMount } from "./types";

const log = new Logger("useTheme");

// verify theme name
function isThemeName(name: string): name is ThemeName { return name in themes; }

// verify theme mode
function isThemeMode(mode: string): mode is ThemeMode { return mode in themeModes; }

// fetch theme name from storage & return valid theme
async function resolveTheme(): ResolveTheme {
    const storedTheme = await storage.get(storageKeys.userTheme) ?? themes.light.name;
    return isThemeName(storedTheme) ? themes[storedTheme] : themes.light;
}

// fetch theme mode from storage & return valid theme mode
async function resolveThemeMode(): ResolveThemeMode {
    const storedThemeMode = await storage.get(storageKeys.themeMode) ?? themeModes.system;
    return isThemeMode(storedThemeMode) ? storedThemeMode : themeModes.system;
}

// set theme & theme mode on mount
function useOnMount({
    systemTheme,
    setTheme,
    setThemeMode,
    setIsThemeLoading,
    setThemeError
}: UseOnMount) {
    useEffect(() => {
        void (async () => {
            try {
                // resolve stored theme & theme mode
                const userTheme = await resolveTheme();
                const resolvedThemeMode = await resolveThemeMode();

                // resolve effective theme
                const effectiveTheme = resolvedThemeMode === themeModes.system ?
                    systemTheme : userTheme;

                // success
                setTheme(effectiveTheme);
                setThemeMode(resolvedThemeMode);
                setIsThemeLoading(false);

                log.info(`set theme on mount (${effectiveTheme.name})`);
                log.info(`set theme mode on mount (${resolvedThemeMode})`);

            } catch (e) {
                const error = e instanceof Error ? e.message : String(e);
                setIsThemeLoading(false);
                setThemeError(error);
            }
        })();
    }, []);
}

// listen for system theme changes
function useListener({ theme, themeMode, systemTheme, setTheme }: UseListener) {
    useEffect(() => {
        if (themeMode === themeModes.system && theme.name !== systemTheme.name) {
            setTheme(systemTheme);
            log.info(`set system theme (${systemTheme.name})`);
        }
    }, [systemTheme]);
}

export { isThemeName, isThemeMode, resolveTheme, resolveThemeMode, useOnMount, useListener };