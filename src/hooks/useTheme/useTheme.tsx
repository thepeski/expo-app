/* @hooks/useTheme/useTheme.tsx */
// provide theme context

// react
import { ReactNode, useContext, useState } from "react";

// src
import { storageKeys, Theme, ThemeMode, themeModes, themes } from "@constants";
import { ThemeContext } from "@contexts";
import { Logger } from "@dev";
import { storage } from "@services";

// local
import { useSystemTheme } from "../useSystemTheme";
import { isThemeMode, isThemeName, resolveTheme, useListener, useOnMount } from "./logic";

const log = new Logger("useTheme");

function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        const error = new Error("useTheme must be defined within ThemeProvider");
        log.error(error);

        throw error;
    }

    return ctx;
}

function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>(themes.light);
    const [themeMode, setThemeMode] = useState<ThemeMode>(themeModes.system);
    const [isThemeLoading, setIsThemeLoading] = useState(true);
    const [themeError, setThemeError] = useState("");
    const systemTheme = useSystemTheme();

    useOnMount({ systemTheme, setTheme, setThemeMode, setIsThemeLoading, setThemeError });
    useListener({ theme, themeMode, systemTheme, setTheme });

    // change theme
    async function changeTheme(name: string) {
        const newName = isThemeName(name) ? name : themes.light.name;

        try {
            // store & set theme if changed
            if (theme.name !== newName) {
                await storage.set(storageKeys.userTheme, newName);
                setTheme(themes[newName]);
                log.info(`set theme (${newName})`);
            }
            
            // store & set theme mode to user
            if (themeMode !== themeModes.user) {
                await storage.set(storageKeys.themeMode, themeModes.user);
                setThemeMode(themeModes.user);
                log.info(`set theme mode (${themeModes.user})`);
            }
        } catch (e) {
            const error = e instanceof Error ? e.message : String(e);
            setThemeError(error);
        }
    }

    // change theme mode
    async function changeThemeMode(mode: string): Promise<void> {
        const newMode = isThemeMode(mode) ? mode : themeModes.system;

        try {
            // store & set theme mode if changed
            if (themeMode !== newMode) {
                await storage.set(storageKeys.themeMode, newMode);
                setThemeMode(newMode);
                log.info(`set theme mode (${newMode})`);

                let newTheme;
                if (newMode === themeModes.system) newTheme = systemTheme;
                else {
                    const userTheme = await resolveTheme();
                    newTheme = userTheme;
                }

                // set theme if changed
                if (theme.name !== newTheme.name) {
                    setTheme(newTheme);
                    log.info(`set theme (${newTheme.name})`);
                }
            } else {
                log.info(`theme mode already active (${newMode})`);
                return;
            }
        } catch (e) {
            const error = e instanceof Error ? e.message : String(e);
            setThemeError(error);
        }
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                themeMode,
                isThemeLoading,
                themeError,
                changeTheme,
                changeThemeMode
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export { useTheme, ThemeProvider };