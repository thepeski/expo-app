/* @hooks/useBoot/types.ts */

// react
import { Dispatch, SetStateAction } from "react";

type Props = { bootReady: boolean; isBootLoading: boolean; bootError: string; };

type Logic = {
    bootReady: boolean;
    isBootLoading: boolean;
    bootError: string;
    setIsTasksLoading: Dispatch<SetStateAction<boolean>>;
    setTasksError: Dispatch<SetStateAction<string>>;
};

export type { Props, Logic };