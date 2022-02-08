import { useState } from "react";
import { Link } from "react-router-dom";
import "./post.css";

export default function Post(props) {
    const { id, user, urls, description } = props.data;
    const [postLiked, setPostLiked] = useState(false);
    return (
        <div id={id} className="p19Wrapper">
            <div className="p19Head">
                <Link to={`/${user.username}`}>{user.username}</Link>
                <i class="fas fa-ellipsis-h" />
            </div>
            <div className="p19Body">
                <img className="p19Picture" src={urls.small} />
            </div>
            <div className="p19Footer">
                <div className="p19Options">
                    <button
                        className={`p19Option ${postLiked ? "liked" : ""}`}
                        onClick={() => setPostLiked((prev) => !prev)}
                    >
                        {postLiked ? <i className="fas fa-heart" /> : <i className="far fa-heart" />}
                    </button>
                    <button className="p19Option">
                        <i className="fas fa-share" />
                    </button>
                    <button className="p19Option">
                        <i className="fas fa-save" />
                    </button>
                </div>
                <div className="p19Description">
                    <strong>{user.username}</strong> {description ? description : "Uploaded a new picture"}
                </div>
            </div>
        </div>
    );
}
