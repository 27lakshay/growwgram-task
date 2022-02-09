import "./navbar.css";
import { useNavigate, useLocation } from "react-router-dom";

import { removeCache } from "../../utils/cache/cache";

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    function resetCache() {
        if (location.pathname === "/") {
            removeCache("feed_posts");
            window.location.reload();
            return;
        }
        navigate("/");
    }

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
            </span>
        </nav>
    );
}
