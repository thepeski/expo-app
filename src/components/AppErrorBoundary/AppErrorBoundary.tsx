/* @components/AppErrorBoundary/AppErrorBoundary.tsx */
// catch & handle app errors

// react
import { Component } from "react";

// src
import { fallback } from "@constants";
import { Logger } from "@dev";
import { Fallback } from "@screens";

// local
import { AppErrorBoundaryProps, AppErrorBoundaryState } from "./types";

const logger = new Logger("AppErrorBoundary");

class AppErrorBoundary extends Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
    // initialise state
    state = { hasError: false, error: null };

    static getDerivedStateFromError(error: Error): AppErrorBoundaryState {
        // update state for the next render to show fallback screen
        return { hasError: true, error };
    }

    componentDidCatch(error: Error) { logger.error("caught error", error.message) }

    handleRetry = () => {
        // reset error boundary
        this.setState({ hasError: false, error: null });

        // call retry function passed as a prop
        this.props.onRetry?.();
    };

    // render if error exists
    render() {
        if (this.state.hasError) {
            return (
                <Fallback
                    loading={false}
                    error={this.state.error ?? true}
                    message={fallback.errorMsg}
                    action={fallback.action}
                    onAction={this.handleRetry}
                />
            );
        }

        return this.props.children;
    }
}

export default AppErrorBoundary;