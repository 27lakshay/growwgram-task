import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import postsReducer from "./posts/reducer";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
    temp: () => "lol",
    feed: postsReducer,
    user: userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
