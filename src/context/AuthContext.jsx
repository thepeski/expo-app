/* AuthContext.jsx */

// default imports
import { createContext, useState, useEffect, useContext } from "react";

// firebase imports
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../firebaseConfig";
import { registerWithEmailAndPassword, loginWithEmailAndPassword, forgotFirebase, logoutFirebase } from "../services/auth";

// create context
const AuthContext = createContext();

// access context
function useAuth() {
    return useContext(AuthContext);
}

function AuthProvider({ children }) {
    const auth = getAuth(app);

    // state variables
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    // check if logged in on mount
    useEffect(() => {
        const subscription = onAuthStateChanged(auth, async (user) => {

            // set state variable
            if (user) setUser(user);
            else setUser(null);

            // loading finished
            setIsLoading(false);
        });

        // clean up listener
        return () => subscription;
    }, []);

    // register & set user
    async function register(email, password) {
        try {
            const user = await registerWithEmailAndPassword(email, password);

            // set state variable
            setUser(user);

            // clean up error
            setError("");
        } catch (error) {

            // set error
            setError(error);

            console.error("(AuthContext.jsx) error registering:", error);
        }
    }

    // login & set user
    async function login(email, password) {
        try {
            const user = await loginWithEmailAndPassword(email, password);

            // set state variable
            setUser(user);

            // clean up error
            setError("");
        } catch (error) {

            // set error
            setError(error);

            console.error("(AuthContext.jsx) error logging in:", error);
        }
    }

    // send password reset link
    async function forgot(email) {
        try {
            await forgotFirebase(email);

            // set state variable
            setError("");
        } catch (error) {

            // set error
            setError(error);

            console.error("(AUthContext.jsx) error resetting password:", error);
        }
    }

    // logout & clean up user
    async function logout() {
        try {
            await logoutFirebase();

            // set state variable
            setUser(null);

            // clean up error
            setError("");
        } catch (error) {

            // set error
            setError(error);

            console.error("(AuthContext.jsx) error logging out:", error);
        }
    }

    return (
        <AuthContext.Provider value={{ user, register, login, forgot, logout, isLoading, error }}>
            {children}
        </AuthContext.Provider>
    );
}

export { useAuth, AuthProvider };