import { createStore, applyMiddleware } from "redux";
import { movieReducer } from "../reducer/movieReducer";
import thunk from "redux-thunk";
// 1. Create A new store
export const Store = createStore(movieReducer, applyMiddleware(thunk));
