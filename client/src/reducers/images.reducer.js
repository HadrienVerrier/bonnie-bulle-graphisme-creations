import { combineReducers } from "redux";
import { GET_GRAPHICDESIGN, GET_ILLUSTRATIONS } from "../actions/images.action";

const initialState = null;

function illustrationsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_ILLUSTRATIONS:
			return action.payload;
		default:
			return state;
	}
}

function graphicDesignReducer(state = initialState, action) {
	switch (action.type) {
		case GET_GRAPHICDESIGN:
			return action.payload;
		default:
			return state;
	}
}

export default combineReducers({ illustrationsReducer, graphicDesignReducer });
