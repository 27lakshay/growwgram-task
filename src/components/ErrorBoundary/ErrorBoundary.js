import React from "react";

import "./errorBoundary.css";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <main className="eb19Wrapper">
                    <h4>Something went wrong. :(</h4>
                </main>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
