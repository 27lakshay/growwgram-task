import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import "./gridView.css";

export default function GridView(props) {
    const { data, getMoreData, hasMore } = props;
    useEffect(() => {}, []);

    return (
        <InfiniteScroll
            dataLength={data.length}
            next={() => getMoreData()}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            scrollThreshold={1}
            className={"gv19Wrapper gv19gridView"}
        >
            {data.map((item) => (
                <div id={item.id} className={`gv19postWrapper`}>
                    <img className="gv19Post" src={item.urls.small} />
                </div>
            ))}
        </InfiniteScroll>
    );
}
