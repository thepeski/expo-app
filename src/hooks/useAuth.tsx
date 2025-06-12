/* @hooks/useAuth.tsx */
// provide auth state variables & methods

// react imports
import { useContext, useState, useEffect } from "react";

// firebase imports
import { getAuth, onAuthStateChanged } from "firebase/auth";

// src imports
import { AuthContext } from "@contexts";
import { app } from "@firebaseConfig";
import { signUp, signIn, signOut, forgotPassword } from "@services";

function useAuth() {
    return useContext(AuthContext);
}

function AuthProvider({ children }: { children: React.ReactNode }) {
    const auth = getAuth(app);

    const [user, setUser] = useState<import("firebase/auth").User | null>(null);
    const [isAuthLoading, setIsAuthLoading] = useState(true);
    const [authError, setAuthError] = useState<string | null>(null);

    // check if logged in on mount
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {

            if (user) setUser(user);
            else setUser(null);

            // finish loading
            // setIsAuthLoading(false);

            // load for 1s
            setTimeout(() => {
                setIsAuthLoading(false);
            }, 1000);
        });

        return () => unsubscribe();
    }, []);

    // sign up
    async function register(email: string, password: string) {
        try {
            const user = await signUp(email, password);
            setUser(user);
        } catch (e) {
            const error = e instanceof Error ? e.message : String(e);
            setAuthError(error);
        }
    }

    // sign in
    async function login(email: string, password: string) {
        try {

            // success
            const user = await signIn(email, password);

            // crash
            // await new Promise((_, reject) => {
            //     setTimeout(() => {
            //         reject(new Error("intentional startup crash"));
            //     }, 1000);
            // })

            setUser(user);
        } catch (e) {
            const error = e instanceof Error ? e.message : String(e);
            setAuthError(error);
        }
    }

    // sign out
    async function logout() {
        try {
            await signOut();
            setUser(null);
        } catch (e) {
            const error = e instanceof Error ? e.message : String(e);
            setAuthError(error);
        }
    }

    // forgot password
    async function forgot(email: string) {
        try {
            await forgotPassword(email);
            setUser(null);
        } catch (e) {
            const error = e instanceof Error ? e.message : String(e);
            setAuthError(error);
        }
    }

    return (
        <AuthContext.Provider
            value={{ user, isAuthLoading, authError, register, login, logout, forgot }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export { useAuth, AuthProvider };