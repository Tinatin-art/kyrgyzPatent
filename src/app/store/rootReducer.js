import {
    combineReducers
} from "redux";
import auth from "../auth/store/AuthSlice";

const createReducer = (asyncReducer) => (state, action) => {
    const combineReducer = combineReducers({
        auth,
        ...asyncReducer,
    });

    return combineReducer(state, action);
};

export default createReducer;