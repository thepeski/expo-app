/* @hooks/useBootstrap/types.ts */

// react
import { Dispatch, SetStateAction } from "react";

type BootStatus = {
    bootReady: boolean;
    isBootLoading: boolean;
    bootError: string;
    setIsTasksLoading: Dispatch<SetStateAction<boolean>>;
    setTasksError: Dispatch<SetStateAction<string>>;
};

type Props = { bootReady: boolean; isBootLoading: boolean; bootError: string; };

export { BootStatus, Props };