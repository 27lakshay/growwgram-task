import { GET_USER_DETAILS, GET_USER_PHOTOS, RESET_USER } from "./actionTypes";

const initialState = {
    details: {},
    photos: [],
    newData: [],
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_DETAILS:
            return { ...state, details: action.payload };
        case GET_USER_PHOTOS:
            return { ...state, photos: [...state.photos, ...action.payload], newData: action.payload };
        case RESET_USER:
            return { ...state, ...initialState };
        // return state.photos
        //     ? { ...state, photos: [...state.photos, ...action.payload] }
        //     : { ...state, photos: [action.payload] };
        default:
            return state;
    }
}
