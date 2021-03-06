import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./scrollToTop.css";

export default function ScrollToTop(props) {
    const [visible, setVisible] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/") return;
        window.scrollTo(0, 0);
    }, [location]);

    const handleScrollToTopButtonVisibility = () => {
        if (window.scrollY >= 400) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScrollToTopButtonVisibility);
        return () => window.removeEventListener("scroll", handleScrollToTopButtonVisibility);
    }, []);
    return (
        <>
            {props.children}
            <div className={`stt19Wrapper ${visible ? "" : "hidden"}`}>
                <button className="stt19Button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <i className="fa-solid fa-angle-up" />
                </button>
            </div>
        </>
    );
}
