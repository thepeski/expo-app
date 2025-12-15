/* @screens/Screen/types.ts */

// react
import { ReactNode } from "react";
import { ViewStyle } from "react-native";
import { Edges } from "react-native-safe-area-context";

type Props = { edges?: Edges; styles?: ViewStyle; children: ReactNode; };

export { Props };