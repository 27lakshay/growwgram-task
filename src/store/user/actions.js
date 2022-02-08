import { GET_USER_DETAILS, GET_USER_PHOTOS, RESET_USER } from "./actionTypes";
import { fetchUserDetails, fetchUserPhotos } from "../../utils/api/api";

export function getUserDetails(username) {
    return async (dispatch) => {
        const response = await fetchUserDetails(username);
        dispatch({ type: GET_USER_DETAILS, payload: response });
    };
}
export function getUserPhotos(username, pageOffset) {
    return async (dispatch) => {
        const response = await fetchUserPhotos(username, pageOffset);
        dispatch({ type: GET_USER_PHOTOS, payload: response });
    };
}
export function resetUser() {
    return {
        type: RESET_USER,
    };
}
