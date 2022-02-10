import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store";

import appRoutes from "../routes/routes";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Navbar from "../components/Navbar/Navbar";

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop>
                    <Navbar />
                    <ErrorBoundary>
                        <Routes>
                            {appRoutes.map((item) => (
                                <Route path={item.path} {...item.props} element={item.Component} />
                            ))}
                        </Routes>
                    </ErrorBoundary>
                </ScrollToTop>
            </BrowserRouter>
        </Provider>
    );
}
