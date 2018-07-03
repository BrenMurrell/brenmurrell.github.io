import { FETCH_BUILD_PARTS, FETCH_BUILD_PART } from '../actions/types';

export default (state = "loading", action) => {
    switch (action.type) {
        case FETCH_BUILD_PARTS:
            return action.payload;
        case FETCH_BUILD_PART:
            return action.payload;
        default:
            return state;
    }
}