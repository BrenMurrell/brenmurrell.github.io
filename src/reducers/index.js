import { combineReducers } from "redux";

import builds from "./buildsReducer";
import parts from "./partsReducer";
import part from "./partsReducer";
import buildParts from "./buildPartsReducer";


export default combineReducers({
  builds, parts, buildParts, part
});
