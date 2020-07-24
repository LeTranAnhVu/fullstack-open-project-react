import {UPDATE_USER, DELETE_USER} from "../actions/types";

const INIT_VALUE = null;
const currentUserReducer = (currentUser = INIT_VALUE, action) => {
    switch (action.type) {
        case UPDATE_USER:
            return {...currentUser, ...action.payload};
        case DELETE_USER:
            return INIT_VALUE;
        default:
            return currentUser;
    }
}
export default currentUserReducer;