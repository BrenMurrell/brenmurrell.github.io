import { FETCH_PARTS, FETCH_PART } from '../actions/types';

export default (state = "loading", action) => {
    switch (action.type) {
        case FETCH_PARTS:
            return action.payload;
        case FETCH_PART:
            return action.payload;
        default:
            return state;
    }
}