import "./navbar.css";
import { useNavigate } from "react-router-dom";

import { removeCache } from "../../utils/cache/cache";

export default function Navbar() {
    let navigate = useNavigate();

    function resetCache() {
        removeCache();
        navigate("/");
    }

    return (
        <nav className="nb19Wrapper">
            <span className="nb19Brand">
                <button onClick={() => resetCache()}>GrowwGram</button>
            </span>
            <span className="nb19Options">
                <button className="nb19Option">
                    <i class="fas fa-inbox" />
                </button>
                <button className="nb19Option">
                    <i class="fas fa-bell" />
                </button>
                <button className="nb19Option" onClick={() => navigate("/windows")}>
                    <i class="fas fa-user-circle" />
                </button>
            </span>
        </nav>
    );
}
