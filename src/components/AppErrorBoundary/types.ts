/* @components/AppErrorBoundary/types.ts */

// react
import { ReactNode } from "react";

type AppErrorBoundaryProps = { children: ReactNode; onRetry?: () => void; };
type AppErrorBoundaryState = { hasError: boolean; error: Error | null; };

export type { AppErrorBoundaryProps, AppErrorBoundaryState };