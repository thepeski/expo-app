/* firebaseConfig.js */

// default imports
import AsyncStorage from "@react-native-async-storage/async-storage";

// firebase imports
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAIdyjUNRcA1EuzMoHZal6SSsdjoy0_wyI",
    authDomain: "expo-app-f5893.firebaseapp.com",
    projectId: "expo-app-f5893",
    storageBucket: "expo-app-f5893.firebasestorage.app",
    messagingSenderId: "922814723500",
    appId: "1:922814723500:web:cdb06f7c791ff63aa53609",
    measurementId: "G-C5QV7VMJTS"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) });
const db = getFirestore(app);

export { auth, db };