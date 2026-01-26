/* @contexts/Context/Context.ts */
// description

// react
import { createContext } from "react";

// expo

// src

// local
import { Props } from "./types";

const Context = createContext<Props | undefined>(undefined);

export { Context };