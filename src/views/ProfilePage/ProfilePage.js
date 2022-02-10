import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import "./profilePage.css";
import { getUserDetails, getUserPhotos } from "../../store/user/actions";
import Feed from "../../components/Feed/Feed";
import UserDetails from "../../components/UserDetails/UserDetails";
import GridView from "../../components/GridView/GridView";
import Loader from "../../components/Loader/Loader";

export default function ProfilePage() {
    const [pageOffset, setPageOffset] = useState(1);
    const [selectedTab, setSelectedTab] = useState(0);
    const [postListView, setPostListView] = useState(null);
    const [isSticky, setIsSticky] = useState(false);

    const params = useParams();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    function hydrateFeed() {
        dispatch(getUserPhotos(params.username, pageOffset));
        setPageOffset((prev) => prev + 1);
    }

    function changeTab(index) {
        setSelectedTab(index);
    }

    function viewPostInListView(item) {
        setPostListView(item);
        changeTab(1);
    }

    useEffect(() => {
        dispatch(getUserDetails(params.username));
        hydrateFeed();
        return () => {
            dispatch({ type: "RESET_USER" });
        };
    }, [dispatch, params.username]);

    const handleTabsVisibility = () => {
        if (window.scrollY >= 400) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleTabsVisibility);
        return () => window.removeEventListener("scroll", handleTabsVisibility);
    }, []);
    return (
        <main className="pp19Wrapper">
            {user && user.details ? <UserDetails data={user.details} /> : <Loader type={"userDetails"} />}
            <section className="pp19photosWrapper">
                <div className={`tb19tabsButton ${isSticky ? "sticky" : ""}`}>
                    <button className={`tb19tabBtn ${selectedTab ? "" : "active-tab"}`} onClick={() => changeTab(0)}>
                        All Photo's
                    </button>
                    <button className={`tb19tabBtn ${selectedTab ? "active-tab" : ""}`} onClick={() => changeTab(1)}>
                        Timeline
                    </button>
                </div>
                {selectedTab ? (
                    <Feed data={user.photos} getMoreData={hydrateFeed} scrollToPost={postListView} />
                ) : (
                    <GridView
                        data={user.photos}
                        getMoreData={hydrateFeed}
                        viewPostInListView={viewPostInListView}
                        hasMore={user.newData.length > 0 ? true : false}
                    />
                )}
            </section>
        </main>
    );
}
