import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import "./feed.css";
import Post from "../Post/Post";
import Loader from "../Loader/Loader";

export default function Feed(props) {
    const { data, getMoreData, hasMore, scrollToPost } = props;

    useEffect(() => {
        if (scrollToPost) {
            let el = document.getElementById(scrollToPost);
            el.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, []);

    return (
        <div className="f19Wrapper">
            {data.length > 0 ? (
                <InfiniteScroll
                    dataLength={data.length}
                    next={() => getMoreData()}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                    scrollThreshold={0.8}
                    className={"f19listView"}
                >
                    {data.map((item, index) => (
                        <Post key={index} data={item} />
                    ))}
                </InfiniteScroll>
            ) : (
                Array.from(Array(5)).map((_, i) => <Loader key={i} type={"post"} />)
            )}
        </div>
    );
}
