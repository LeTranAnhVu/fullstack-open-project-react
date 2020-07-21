import {FETCH_RESTAURANT, FETCH_RESTAURANTS} from "../actions/types";
import _ from 'lodash';
const DEFAULT_STATE = {
    data: []
};

const restaurantReducer = (restaurants = DEFAULT_STATE, action) => {
    switch (action.type) {
        case FETCH_RESTAURANTS : {
            let list = _.keyBy(_.cloneDeep(action.payload.data), 'id');
            return {...action.payload, data: list};
        }
        case FETCH_RESTAURANT : {
            let clone = {...restaurants};
            clone.data[action.payload.id] = action.payload;
            return {...clone};
        }
        default: {
            return restaurants;
        }
    }
};

export default restaurantReducer;