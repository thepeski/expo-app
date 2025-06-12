/* @services/firebase.ts */
// manage firebase authentication

// firebase imports
import { auth } from "@firebaseConfig";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut as signOutFirebase,
} from "firebase/auth";

// src imports
import { Logger } from "@dev";

const logger = new Logger("firebase.ts");

// sign up with email & password
async function signUp(email: string, password: string) {
    try {
        const userObject = await createUserWithEmailAndPassword(auth, email, password);

        logger.info(`signed up with email: ${email}`);

        return userObject.user;
    } catch (e) {
        const error = e instanceof Error ? e.message : String(e);

        logger.error("sign up failed", error);

        // rethrow for caller
        throw new Error(error);
    }
}

// sign in with email & password
async function signIn(email: string, password: string) {
    try {
        const userObject = await signInWithEmailAndPassword(auth, email, password);

        logger.info(`signed in with email: ${email}`);

        return userObject.user;
    } catch (e) {
        const error = e instanceof Error ? e.message : String(e);

        logger.error("sign in failed", error);

        // rethrow for caller
        throw new Error(error);
    }
}

// sign out
async function signOut() {
    try {
        await signOutFirebase(auth);

        logger.info("sign out successful");

        return true;
    } catch (e) {
        const error = e instanceof Error ? e.message : String(e);

        logger.error("sign out failed", error);

        // rethrow for caller
        throw new Error(error);
    }
}

// forgot password
async function forgotPassword(email: string) {
    try {
        await sendPasswordResetEmail(auth, email);

        logger.info("sent password reset link");

        return true;
    } catch (e) {
        const error = e instanceof Error ? e.message : String(e);

        logger.error("sending password reset link failed", error);

        // rethrow for caller
        throw new Error(error);
    }
}

export { signUp, signIn, signOut, forgotPassword };