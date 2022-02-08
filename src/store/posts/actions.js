import { GET_POSTS } from "./actionTypes";
import { fetchRandomPhotos } from "../../utils/api/api";

export function getPosts(pageOffset) {
    return async (dispatch) => {
        const response = await fetchRandomPhotos(pageOffset);
        dispatch({ type: GET_POSTS, payload: response });
    };
}
