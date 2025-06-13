/* @components/AppErrorBoundary/AppErrorBoundary.tsx */
// catch & handle app errors

// react imports
import React from "react";

// src imports
import { fallback } from "@constants";
import { Logger } from "@dev";
import { Fallback } from "@screens";

// local imports
import { AppErrorBoundaryStateType, AppErrorBoundaryPropsType } from "./types";

const logger = new Logger("AppErrorBoundary.tsx");

class AppErrorBoundary extends
    React.Component<AppErrorBoundaryPropsType, AppErrorBoundaryStateType> {

    // initialise state
    state = { hasError: false, error: null };

    static getDerivedStateFromError(error: Error): AppErrorBoundaryStateType {

        // update state for the next render to show fallback screen
        return { hasError: true, error };
    }

    componentDidCatch(error: Error) {
        logger.error("caught error", error.message || String(error))
    }

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
                    message={fallback.default.errorMsg}
                    action={fallback.default.action}
                    onAction={this.handleRetry}
                />
            );
        }

        return this.props.children;
    }
}

export default AppErrorBoundary;