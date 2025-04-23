/* auth.js */
// manages firebase authorisation

// firebase imports
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";

// custom imports
import { auth } from "../../firebaseConfig";
import { ConsoleLog, ConsoleError } from "../constants/ConsoleMessages";

// firebase sign up with email & password
async function signUpFirebase(email, password) {
    let errorMessage = "";

    try {
        // create account & set user object
        const userObject = await createUserWithEmailAndPassword(auth, email, password);

        return userObject.user; // return user object if successful
    } catch (error) {
        // resolve error
        errorMessage = error.message || String(error);

        console.error(ConsoleError.auth.signUpFirebase, errorMessage);
        throw new Error(errorMessage); // throw error to handle manually
    }
}

// firebase sign in with email & password
async function signInFirebase(email, password) {
    let errorMessage = "";

    try {
        // sign in & set user object
        const userObject = await signInWithEmailAndPassword(auth, email, password);

        return userObject.user; // return user object if successful
    } catch (error) {
        // resolve error
        errorMessage = error.message || String(error);

        console.error(ConsoleError.auth.signInFirebase, errorMessage);
        throw new Error(errorMessage); // throw error to handle manually
    }
}

// firebase sign out
async function signOutFirebase() {
    let errorMessage = "";

    try {
        await signOut(auth);

        console.log(ConsoleLog.auth.signOutFirebase);

        return { success: true }; // return success object
    } catch (error) {
        // resolve error
        errorMessage = error.message || String(error);

        console.error(ConsoleError.auth.signOutFirebase, errorMessage);
        throw new Error(errorMessage); // throw error to handle manually
    }
}

// firebase forgot password
async function forgotFirebase(email) {
    let errorMessage = "";

    try {
        await sendPasswordResetEmail(auth, email);

        console.log(ConsoleLog.auth.forgotFirebase);

        return { success: true }; // return success
    } catch (error) {
        // resolve error
        errorMessage = error.message || String(error);

        console.error(ConsoleError.auth.forgotFirebase, errorMessage);
        throw new Error(errorMessage); // throw error to handle manually
    }
}

export { signUpFirebase, signInFirebase, signOutFirebase, forgotFirebase };