import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store";

import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Navbar from "../components/Navbar/Navbar";
import { HomePage } from "./HomePage";
import { ProfilePage } from "./ProfilePage";
// import { NotFoundPage } from "./views/NotFoundPage";

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" exact element={<HomePage />} />
                        <Route path=":username" element={<ProfilePage />} />
                        {/* <Route path="*" element={<NotFoundPage />} /> */}
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </Provider>
    );
}
