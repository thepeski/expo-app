/* storage.js */

import * as SecureStore from "expo-secure-store";

// get from storage
export async function getStorageToken(key) {
  try {
    const token = await SecureStore.getItemAsync(key);
    
    // return explicit null if no token
    return token ?? null;
  } catch (error) {
    console.error(`(storage.js) error getting storage token with key ${key}:`, error);

    return false;
  }
}

// set in storage
export async function setStorageToken(key, token) {

  // check if token truthy or not 0
  if (!token && token !== 0) { 
    console.warn(`(storage.js) cannot set null storage token with key ${key}`);

    return false;
  }

  try {
    await SecureStore.setItemAsync(key, String(token)); // tokens must be strings

    console.log(`(storage.js) set storage token with key: ${key}`);

    return true;
  } catch (error) {
    console.error(`(storage.js) error setting storage token with key ${key}:`, error);
    
    return false;
  }
}

// remove from storage
export async function removeStorageToken(key) {
  try {
    await SecureStore.deleteItemAsync(key);

    console.log(`(storage.js) removed storage token with key: "${key}"`);
    
    return true;
  } catch (error) {

    console.error(`(storage.js) error removing storage token with key "${key}":`, error);
    
    return false;
  }
}