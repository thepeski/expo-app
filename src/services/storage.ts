/* @services/storage.ts */
// manage local storage

// expo imports
import * as SecureStore from "expo-secure-store";

// src imports
import { Logger } from "@dev";

const logger = new Logger("storage.ts");

// get from storage
async function getStorageToken(key: string): Promise<string | null> {
    try {
        const token = await SecureStore.getItemAsync(key);

        // token does not exist or value is null
        if (!token) {
            logger.warn(`got storage token with key: ${key} & value: ${token}`);

            return null;
        }
        // token exists
        else {
            logger.info(`got storage token with key: ${key} & value: ${token}`);

            return token;
        }
    } catch (e) {
        const error = e instanceof Error ? e.message : String(e);

        logger.error(`failed getting storage token with key: ${key}`, error);

        // rethrow for caller
        throw new Error(error);
    }
}

// set in storage
async function setStorageToken(key: string, token: string): Promise<boolean> {

    // invalid token value
    if (!token) {
        logger.warn("cannot set storage token with null");

        return false;
    }

    try {
        await SecureStore.setItemAsync(key, token);

        logger.info(`set storage token with key: ${key} & value: ${token}`);

        return true;
    } catch (e) {
        const error = e instanceof Error ? e.message : String(e);

        logger.error(`failed setting storage token with key: ${key} & value: ${token}`, error);

        // rethrow for caller
        throw new Error(error);
    }
}

// delete from storage
async function deleteStorageToken(key: string): Promise<boolean> {
    try {
        await SecureStore.deleteItemAsync(key);

        logger.info(`deleted storage token with key: ${key}`);

        return true;
    } catch (e) {
        const error = e instanceof Error ? e.message : String(e);

        logger.error(`failed deleting storage token with key: ${key}`, error);

        // rethrow for caller
        throw new Error(error);
    }
}

// delete from storage if token exists
async function deleteStorageTokenIfExists(key: string): Promise<boolean> {
    try {
        const token = await SecureStore.getItemAsync(key);

        // token does not exist or value is null
        if (!token) {
            logger.warn(`cannot delete; token with key: ${key} does not exist`);

            return false;
        }
        // token exists, delete
        else {
            await deleteStorageToken(key);

            return true;
        }
    } catch (e) {
        const error = e instanceof Error ? e.message : String(e);

        logger.error(`failed deleting storage token with key: ${key}`, error);

        // rethrow for caller
        throw new Error(error);
    }
}

export { getStorageToken, setStorageToken, deleteStorageToken, deleteStorageTokenIfExists };