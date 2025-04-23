/* storage.js */
// manages local storage

// default imports
import * as SecureStore from "expo-secure-store";

// custom imports
import { ConsoleLog, ConsoleWarn, ConsoleError } from "../constants/ConsoleMessages";

// get from storage
async function getToken(key) {
    try {
        const token = await SecureStore.getItemAsync(key);

        // return explicit null if no token
        return token ?? null;
    } catch (error) {
        console.error(ConsoleError.storage.getToken, key, error);

        return false;
    }
}

// set in storage
async function setToken(key, token) {

    // check if token truthy or not 0
    if (!token && token !== 0) {
        console.warn(ConsoleWarn.storage.setNull, key);

        return false;
    }

    try {
        await SecureStore.setItemAsync(key, String(token)); // tokens must be strings

        console.log(ConsoleLog.storage.setToken, key);

        return true;
    } catch (error) {
        console.error(ConsoleError.storage.setToken, key, error);

        return false;
    }
}

// delete from storage
async function deleteToken(key) {
    try {
        await SecureStore.deleteItemAsync(key);

        console.log(ConsoleLog.storage.deleteToken);

        return true;
    } catch (error) {

        console.error(ConsoleError.storage.deleteToken, key, error);

        return false;
    }
}

export { getToken, setToken, deleteToken };