import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./homePage.css";
import Feed from "../../components/Feed/Feed";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";
import { getPosts } from "../../store/posts/actions";

function HomePage() {
    const dispatch = useDispatch();
    const { posts, newData } = useSelector((state) => state.feed);
    const [pageOffset, setPageOffset] = useState(1);

    function hydrateFeed() {
        dispatch(getPosts(pageOffset));
        setPageOffset((prev) => prev + 1);
    }

    useEffect(() => {
        hydrateFeed();
        return () => {};
    }, [dispatch]);

    return (
        <main className="hp19Wrapper">
            <Feed data={posts} getMoreData={hydrateFeed} hasMore={newData.length > 0 ? true : false} />
            <SuggestedUsers data={posts} />
        </main>
    );
}

export default HomePage;
