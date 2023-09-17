import {
    combineReducers
} from "redux";
import auth from "../auth/store/AuthSlice";
import categories from "../components/sidebar/store/SidebarSlice"

const createReducer = (asyncReducer) => (state, action) => {
    const combineReducer = combineReducers({
        auth,
        categories,
        ...asyncReducer,
    });

    return combineReducer(state, action);
};

export default createReducer;