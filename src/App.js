import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

import Navbar from "./components/Navbar/Navbar";
import { HomePage } from "./views/HomePage";
import { ProfilePage } from "./views/ProfilePage";
// import { NotFoundPage } from "./views/NotFoundPage";

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<HomePage />} />
                    <Route path=":username" element={<ProfilePage />} />
                    {/* <Route path="*" element={<NotFoundPage />} /> */}
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}
