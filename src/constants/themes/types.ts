/* @constants/themes/types.ts */

// local
import { themes } from "./themes";

type ThemeName = keyof typeof themes;
type Theme = typeof themes[ThemeName];

export type { ThemeName, Theme };