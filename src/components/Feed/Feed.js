import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import "./feed.css";
import Post from "../Post/Post";

export default function Feed(props) {
    const { data, getMoreData, hasMore } = props;
    useEffect(() => {
        // hasMore;
        // debugger;
    });

    return (
        <InfiniteScroll
            dataLength={data.length}
            next={() => getMoreData()}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            scrollThreshold={1}
            className={"f19Wrapper f19listView"}
        >
            {data.map((item) => (
                <Post data={item} />
            ))}
        </InfiniteScroll>
    );
}
