/* @contexts/AuthContext/types.ts */

type AuthContextType = {
    user: import("firebase/auth").User | null;
    isAuthLoading: boolean;
    authError: string | null;
    register: (email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    forgot: (email: string) => Promise<void>;
};

export default AuthContextType;