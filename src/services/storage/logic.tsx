/* @services/storage/logic.tsx */

// expo
import { deleteItemAsync, getItemAsync, setItemAsync } from "expo-secure-store";

// src
import { Logger } from "@dev";

// local
import { Del, DelIfExists, Get, Set } from "./types";

const log = new Logger("storage");

// get from storage
async function get(key: string): Get {
    try {
        const token = await getItemAsync(key);

        // token exists
        if (token) {
            log.info(`got from storage (key: ${key}, token: ${token})`);
            return token;
        } else {
            log.warn(`token does not exist (key: ${key})`);
            return "";
        }
    } catch (e) {
        const error = e instanceof Error ? e.message : String(e);
        log.error(`failed getting from storage (key: ${key})`, error);

        // rethrow for caller
        throw error;
    }
}

// set in storage
async function set(key: string, token: string): Set {
    try {
        await setItemAsync(key, token);

        // success
        log.info(`set in storage (key: ${key}, token: ${token})`);
        return true;
    } catch (e) {
        const error = e instanceof Error ? e.message : String(e);
        log.error(`failed setting in storage (key: ${key}, token: ${token})`, error);

        // rethrow for caller
        throw error;
    }
}

// delete from storage
async function del(key: string): Del {
    try {
        await deleteItemAsync(key);

        // success
        log.info(`deleted from storage (key: ${key})`);
        return true;
    } catch (e) {
        const error = e instanceof Error ? e.message : String(e);
        log.error(`failed deleting from storage (key: ${key})`, error);

        // rethrow for caller
        throw error;
    }
}

// delete from storage if token exists
async function delIfExists(key: string): DelIfExists {
    try {
        const token = await getItemAsync(key);

        // token exists
        if (token) {
            await deleteItemAsync(key);

            // success
            log.info(`deleted from storage (key: ${key})`);
            return true;
        } else {
            log.warn(`token does not exist (key: ${key})`);
            return false;
        }
    } catch (e) {
        const error = e instanceof Error ? e.message : String(e);
        log.error(`failed deleting from storage (key: ${key})`, error);

        // rethrow for caller
        throw error;
    }
}

export { get, set, del, delIfExists };