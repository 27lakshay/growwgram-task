const initialState = {
    posts: [],
    newData: [],
};

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_POSTS":
            return { ...state, posts: [...state.posts, ...action.payload], newData: action.payload };
        default:
            return state;
    }
}
