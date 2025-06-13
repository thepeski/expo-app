/* @hooks/useAuthRedirect.ts */
// redirect based on login status

// react imports
import { useEffect } from "react";

// expo imports
import { useRouter } from "expo-router";

// local imports
import { useAuth } from "./useAuth";

function useAuthRedirect(mode: "auth" | "no-auth", destination: string) {
    const router = useRouter();
    const { user } = useAuth();

    useEffect(() => {
        if (mode === "auth" && user) {
            router.replace(destination);
        } else if (mode === "no-auth" && !user) {
            router.replace(destination);
        }
    }, [router, user, mode, destination]);
}

export default useAuthRedirect;