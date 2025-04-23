/* AuthContext.jsx */
// provides auth state variables & methods

// default imports
import { createContext, useContext, useState, useEffect } from "react";

// firebase imports
import { getAuth, onAuthStateChanged } from "firebase/auth";

// custom imports
import { app } from "../../firebaseConfig";
import { ConsoleError } from "../constants/ConsoleMessages";
import { signUpFirebase, signInFirebase, forgotFirebase, signOutFirebase } from "../services/auth";

// create context
const AuthContext = createContext();

// enable access to context
function useAuth() {
    return useContext(AuthContext);
}

function AuthProvider({ children }) {
    const auth = getAuth(app);

    // state variables
    const [user, setUser] = useState(null);
    const [isAuthLoading, setIsAuthLoading] = useState(true);
    const [authError, setAuthError] = useState("");

    // check if logged in on mount
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {

            // set state variable
            if (user) setUser(user);
            else setUser(null);

            // loading finished
            setIsAuthLoading(false);
        });

        // clean up listener
        return () => unsubscribe();
    }, []);

    // sign up
    async function signUp(email, password) {
        let errorMessage = "";

        try {
            // sign up & set user state variable
            const user = await signUpFirebase(email, password);
            setUser(user);
        } catch (error) {
            // resolve error
            errorMessage = error.message || String(error);

            console.error(ConsoleError.AuthContext.signUp, errorMessage);
        } finally {
            // set error message
            setAuthError(errorMessage);
        }
    }

    // sign in
    async function signIn(email, password) {
        let errorMessage = "";

        try {
            // sign in & set user state variable
            const user = await signInFirebase(email, password);
            setUser(user);
        } catch (error) {
            // resolve error
            errorMessage = error.message || String(error);

            console.error(ConsoleError.AuthContext.signIn, errorMessage);
        } finally {
            // set error message
            setAuthError(errorMessage);
        }
    }

    // sign out
    async function signOut() {
        let errorMessage = "";

        try {
            // sign out & clean up user state variable
            await signOutFirebase();
            setUser(null);
        } catch (error) {
            // resolve error
            errorMessage = error.message || String(error);

            console.error(ConsoleError.AuthContext.signOut, errorMessage);
        } finally {
            // set error message
            setAuthError(errorMessage);
        }
    }

    // forgot password
    async function forgot(email) {
        let errorMessage = "";

        try {
            // send password reset link
            await forgotFirebase(email);
        } catch (error) {
            // resolve error
            errorMessage = error.message || String(error);

            console.error(ConsoleError.AuthContext.forgot, errorMessage);
        } finally {
            // set error message
            setAuthError(errorMessage);
        }
    }

    return (
        <AuthContext.Provider
            value={{ user, isAuthLoading, authError, signUp, signIn, signOut, forgot }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export { useAuth, AuthProvider };