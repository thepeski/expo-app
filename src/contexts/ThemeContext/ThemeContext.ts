/* @contexts/ThemeContext/ThemeContext.ts */
// define theme context

// react
import { createContext } from "react";

// local
import { Props } from "./types";

const ThemeContext = createContext<Props | undefined>(undefined);

export { ThemeContext };