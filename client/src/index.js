import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style/style.scss";

//REDUX
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers/";
import { getGraphicDesign, getIllustrations } from "./actions/images.action";

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(getGraphicDesign());
store.dispatch(getIllustrations());
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
