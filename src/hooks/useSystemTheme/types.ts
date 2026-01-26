/* @hooks/useSystemTheme/types.ts */

// src
import { themes } from "@constants";

type Props = typeof themes["light"] | typeof themes["dark"];

export type { Props };