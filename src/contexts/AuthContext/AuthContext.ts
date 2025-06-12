/* @contexts/AuthContext/AuthContext.ts */
// define auth context

// react imports
import { createContext } from "react";

// local imports
import AuthContextType from "./types";

const AuthContext = createContext<AuthContextType>({
    user: null,
    isAuthLoading: true,
    authError: null,
    register: async () => { },
    login: async () => { },
    logout: async () => { },
    forgot: async () => { }
});

export default AuthContext;