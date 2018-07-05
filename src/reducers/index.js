import { combineReducers } from "redux";

import caseStudies from './caseStudiesReducer';
import auth from './authReducer';

export default combineReducers({
  caseStudies, auth
});
