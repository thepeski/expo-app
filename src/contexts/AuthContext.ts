/* @contexts/AuthContext.ts */
// define auth context

// react imports
import { createContext } from "react";

// firebase imports
import { User } from "firebase/auth";

type AuthContextType = {
    user: User | null;
    isAuthLoading: boolean;
    authError: string | null;
    register: (email: string, password: string) => void;
    login: (email: string, password: string) => void;
    logout: () => void;
    forgot: (email: string) => void;
};

const AuthContext = createContext<AuthContextType>({
    user: null,
    isAuthLoading: true,
    authError: null,
    register: () => { },
    login: () => { },
    logout: () => { },
    forgot: () => { }
});

export default AuthContext;