/* @services/storage.ts */
// manage device storage

// expo imports
import { getItemAsync, setItemAsync, deleteItemAsync } from "expo-secure-store";

// src imports
import { Logger } from "@dev";

const logger = new Logger("storage.ts");

const storage = {
    get: async (key: string): Promise<string | null> => {
        try {
            const token = await getItemAsync(key);

            // token exists
            if (token) {
                logger.info(`got from storage (key: ${key}, token: ${token})`);

                return token;
            }

            // token does not exist
            logger.warn(`got null from storage (key: ${key}, token: ${token})`);

            return null;

        } catch (e) {
            const error = e instanceof Error ? e.message : String(e);

            logger.error(`failed getting from storage (key: ${key})`, error);

            // rethrow for caller
            throw new Error(error);
        }
    },
    set: async (key: string, token: string): Promise<boolean> => {
        try {
            await setItemAsync(key, token);

            logger.info(`set in storage (key: ${key}, token: ${token})`);

            return true;
        } catch (e) {
            const error = e instanceof Error ? e.message : String(e);

            logger.error(`failed setting in storage (key: ${key}, token: ${token})`, error);

            // rethrow for caller
            throw new Error(error);
        }
    },
    delete: async (key: string): Promise<boolean> => {
        try {
            await deleteItemAsync(key);

            logger.info(`deleted from storage (key: ${key})`);

            return true;
        } catch (e) {
            const error = e instanceof Error ? e.message : String(e);

            logger.error(`failed deleting from storage (key: ${key})`, error);

            // rethrow for caller
            throw new Error(error);
        }
    },
    deleteIfExists: async (key: string): Promise<boolean> => {
        try {
            const token = await getItemAsync(key);

            // token exists
            if (token) {
                await deleteItemAsync(key);

                logger.info(`deleted from storage (key: ${key})`);

                return true;
            }

            // token does not exist
            logger.warn(`token does not exist in storage (key: ${key})`);

            return false;
        } catch (e) {
            const error = e instanceof Error ? e.message : String(e);

            logger.error(`failed deleting from storage (key: ${key})`, error);

            // rethrow for caller
            throw new Error(error);
        }
    }
};

export default storage;