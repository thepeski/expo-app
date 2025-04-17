/* auth.js */

// firebase imports
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";

// Firebase registration with email & password
async function registerWithEmailAndPassword(email, password) {
    try {
        const userObject = await createUserWithEmailAndPassword(auth, email, password);

        // user data test
        await setDoc(doc(db, "testUsers", userObject.user.uid), {
            name: "Jan Pęski",
        });

        // return object with user info if successful
        return userObject.user;
    } catch (error) {

        console.error("(auth.js) error registering with email & password:", error.message);

        // throw error to handle manually
        throw new Error(error.code);
    }
}

// Firebase login with email & password
async function loginWithEmailAndPassword(email, password) {
    try {
        const userObject = await signInWithEmailAndPassword(auth, email, password);

        console.log("(auth.js) logged in with email & password");

        // return object with user info if successful
        return userObject.user;
    } catch (error) {

        console.error("(auth.js) error logging in with email & password:", error.message);

        // throw error to handle manually
        throw new Error(error.code);
    }
}

// Firebase forgot password
async function forgotFirebase(email) {
    try {
        await sendPasswordResetEmail(auth, email);

        console.log("(auth.js) sent password reset email");
    } catch (error) {

        console.error("(auth.js) error sending password reset link:", error.message);

        // throw error to handle manually
        throw new Error(error.code);
    }
}

// Firebase logout
async function logoutFirebase() {
    try {
        await signOut(auth);

        console.log("(auth.js) logged out");
    } catch (error) {

        console.error("(auth.js) error logging out:", error.message);

        // throw error to handle manually
        throw new Error(error.code);
    }
}

export { registerWithEmailAndPassword, loginWithEmailAndPassword, forgotFirebase, logoutFirebase };