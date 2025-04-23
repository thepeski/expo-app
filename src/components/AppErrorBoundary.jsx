/* AppErrorBoundary.jsx */
// allows handling runtime errors

// default imports
import React from "react";

// custom imports
import { ConsoleError } from "../constants/ConsoleMessages";
import Fallback from "../constants/Fallback";
import FallbackScreen from "./FallbackScreen";

class AppErrorBoundary extends React.Component {

    // initialise state
    state = { hasError: false, error: null };

    static getDerivedStateFromError(error) {

        // update state so the next render shows fallback screen
        return { hasError: true, error };
    }

    componentDidCatch(error, info) {
        console.error(ConsoleError.AppErrorBoundary, error, info);
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
                <FallbackScreen
                    loading={false}
                    error={this.state.error}
                    message={Fallback.default.error}
                    action={Fallback.default.action}
                    onAction={this.handleRetry}
                />
            );
        }

        return this.props.children;
    }
}

export default AppErrorBoundary;