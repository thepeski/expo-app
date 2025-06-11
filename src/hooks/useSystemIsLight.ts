/* @hooks/useSystemIsLight.ts */
// convert system theme to boolean

// react imports
import { useColorScheme } from "react-native";

// src imports
import { themes } from "@constants";

function useSystemIsLight(): boolean {
    return useColorScheme() === themes.light.name;
}

export default useSystemIsLight;