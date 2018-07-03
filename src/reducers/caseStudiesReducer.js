import {  FETCH_CASE_STUDIES } from '../actions/types';

export default (state = "loading", action) => {
    switch (action.type) {
        case FETCH_CASE_STUDIES:
            return action.payload;
        default:
            return state;
    }
}