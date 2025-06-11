/* @components/AppErrorBoundary/types.ts */

type AppErrorBoundaryStateType = { hasError: boolean; error: Error | null; };
type AppErrorBoundaryPropsType = { children: React.ReactNode; onRetry?: () => void; }

export { AppErrorBoundaryStateType, AppErrorBoundaryPropsType };