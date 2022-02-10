import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./navbar.css";
import { removeCache } from "../../utils/cache/cache";

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isDark, setIsDark] = useState(true);

    function resetCache() {
        if (location.pathname === "/") {
            removeCache("feed_posts");
            window.location.reload();
            return;
        }
        navigate("/");
    }

    useEffect(() => {
        if (isDark) {
            document.documentElement.style.setProperty("--gg-primary-lightest", "#3b4255");
            document.documentElement.style.setProperty("--gg-primary", "#222733");
            document.documentElement.style.setProperty("--gg-primary-light", "#2d3242");
            document.documentElement.style.setProperty("--gg-off-white", "#F7EDE2");
            document.documentElement.style.setProperty("--gg-grey-light", "#a9a9a9");
            document.documentElement.style.setProperty("--gg-primary-hover", "#dbdbdb");
            return;
        }
        document.documentElement.style.setProperty("--gg-primary-lightest", "#F28482");
        document.documentElement.style.setProperty("--gg-primary", "#F5CAC3");
        document.documentElement.style.setProperty("--gg-primary-light", "#F28482");
        document.documentElement.style.setProperty("--gg-off-white", "#dbdbdb");
        document.documentElement.style.setProperty("--gg-grey-light", "#dbdbdb");
        document.documentElement.style.setProperty("--gg-primary-hover", "#F6DCD3");
    }, [isDark]);

    return (
        <nav className="nb19Wrapper">
            <span className="nb19Brand">
                <button onClick={() => resetCache()}>GrowwGram</button>
            </span>
            <span className="nb19Options">
                <button className="nb19Option">
                    <i className="fas fa-inbox" />
                </button>
                <button className="nb19Option">
                    <i className="fas fa-bell" />
                </button>
                <button className="nb19Option" onClick={() => navigate("/windows")}>
                    <i className="fas fa-user-circle" />
                </button>
                <button className="nb19Option" onClick={() => setIsDark((prev) => !prev)}>
                    {isDark ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i> }
                </button>
            </span>
        </nav>
    );
}
