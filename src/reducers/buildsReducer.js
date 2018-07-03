import { FETCH_BUILDS, FETCH_BUILD } from '../actions/types';

export default (state = "loading", action) => {
    switch (action.type) {
        case FETCH_BUILDS:
            return action.payload;
        case FETCH_BUILD:
            return action.payload;
        default:
            return state;
    }
}