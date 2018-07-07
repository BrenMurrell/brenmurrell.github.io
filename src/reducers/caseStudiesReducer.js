import {  FETCH_CASE_STUDIES, FETCH_CASE_STUDY } from '../actions/types';

export default (state = "loading", action) => {
    switch (action.type) {
        case FETCH_CASE_STUDIES:
            return action.payload;
        case FETCH_CASE_STUDY:
            return action.payload;
        default:
            return state;
    }
}