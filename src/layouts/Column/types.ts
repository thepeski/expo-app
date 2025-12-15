/* @layouts/Column/types.ts */

// react
import { ReactNode } from "react";
import { FlexAlignType, ViewStyle } from "react-native";

type Props = { alignment?: FlexAlignType; styles?: ViewStyle; children: ReactNode; };

export { Props };