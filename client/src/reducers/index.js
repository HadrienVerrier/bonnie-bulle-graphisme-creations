import { combineReducers } from "redux";

import imagesReducer from "./images.reducer";
import userReducer from "./user.reducer";

export default combineReducers({ imagesReducer, userReducer });
