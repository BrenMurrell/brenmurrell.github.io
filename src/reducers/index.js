import { combineReducers } from "redux";

import caseStudies from './caseStudiesReducer';
import jobs from './jobsReducer';
import auth from './authReducer';

export default combineReducers({
  caseStudies, auth, jobs
});
