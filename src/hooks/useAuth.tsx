/* @hooks/useAuth.tsx */
// provide access to auth context variables & methods

// react imports
import { useContext, useState, useEffect } from "react";

// firebase imports
import { User } from "firebase/auth";

// src imports
import { AuthContext } from "@contexts";
import { firebase } from "@services";

function useAuth() {
    return useContext(AuthContext);
}

function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isAuthLoading, setIsAuthLoading] = useState(true);
    const [authError, setAuthError] = useState<string | null>(null);

    // check if logged in on mount
    useEffect(() => {
        const unsubscribe = firebase.authListener(setUser, setIsAuthLoading, setAuthError);
        return () => unsubscribe();
    }, []);

    // sign up
    function register(email: string, password: string) {
        void (async () => {
            try {
                const user = await firebase.signUp(email, password);
                setUser(user);
                setAuthError(null);
            } catch (e) {
                const error = e instanceof Error ? e.message : String(e);
                setAuthError(error);
            }
        })();
    }

    // sign in
    function login(email: string, password: string) {
        void (async () => {
            try {
                const user = await firebase.signIn(email, password);
                setUser(user);
                setAuthError(null);
            } catch (e) {
                const error = e instanceof Error ? e.message : String(e);
                setAuthError(error);
            }
        })();
    }

    // sign out
    function logout() {
        void (async () => {
            try {
                await firebase.signOut();
                setUser(null);
                setAuthError(null);
            } catch (e) {
                const error = e instanceof Error ? e.message : String(e);
                setAuthError(error);
            }
        })();
    }

    // forgot password
    function forgot(email: string) {
        void (async () => {

            try {
                await firebase.forgotPassword(email);
                setUser(null);
                setAuthError(null);
            } catch (e) {
                const error = e instanceof Error ? e.message : String(e);
                setAuthError(error);
            }
        })();
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