import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";

const Routes = () => {
	return (
		<Router>
			<Header />
			<main className="body-page">
				<Switch>
					<Route exact path="/" component={Home} />
					<Redirect to="/" />
				</Switch>
			</main>
			<Footer />
		</Router>
	);
};

export default Routes;
