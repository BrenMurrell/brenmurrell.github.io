import {  FETCH_JOBS, FETCH_JOB } from '../actions/types';

export default (state = "loading", action) => {
    switch (action.type) {
        case FETCH_JOBS:
            return action.payload;
        case FETCH_JOB:
            return action.payload;
        default:
            return state;
    }
}