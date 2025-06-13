/* @services/firebase.ts */
// manage firebase

// firebase imports
import { auth } from "@firebaseConfig";
import {
    User,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut as signOutFirebase,
    sendPasswordResetEmail
} from "firebase/auth";

// src imports
import { Logger } from "@dev";

const logger = new Logger("firebase.ts");

const firebase = {
    signUp: async (email: string, password: string): Promise<User | null> => {
        try {
            const userObject = await createUserWithEmailAndPassword(auth, email, password);

            logger.info(`signed up (email: ${email})`);

            return userObject.user;
        } catch (e) {
            const error = e instanceof Error ? e.message : String(e);

            logger.error(`sign up failed (email: ${email})`, error);

            // rethrow for caller
            throw new Error(error);
        }
    },
    signIn: async (email: string, password: string): Promise<User | null> => {
        try {
            const userObject = await signInWithEmailAndPassword(auth, email, password);

            logger.info(`signed in (email: ${email})`);

            return userObject.user;
        } catch (e) {
            const error = e instanceof Error ? e.message : String(e);

            logger.error(`sign in failed (email: ${email})`, error);

            // rethrow for caller
            throw new Error(error);
        }
    },
    signOut: async (): Promise<boolean> => {
        try {
            await signOutFirebase(auth);

            logger.info("signed out");

            return true;
        } catch (e) {
            const error = e instanceof Error ? e.message : String(e);

            logger.error("sign out failed", error);

            // rethrow for caller
            throw new Error(error);
        }
    },
    forgotPassword: async (email: string): Promise<boolean> => {
        try {
            await sendPasswordResetEmail(auth, email);

            logger.info(`sent password reset link (email: ${email})`);

            return true;
        } catch (e) {
            const error = e instanceof Error ? e.message : String(e);

            logger.error("sending password reset link failed", error);

            // rethrow for caller
            throw new Error(error);
        }
    }
};

export default firebase;