import React from "react";
import {
	HashRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";
import Illustration from "../pages/Illustration";
import Infos from "../pages/Infos";

const Routes = () => {
	return (
		<Router basename="/" hashType="slash">
			<Header />
			<main className="body-page">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/infos" component={Infos} />
					<Route exact path="/illustration" component={Illustration} />
					<Redirect to="/" />
				</Switch>
			</main>
			<Footer />
		</Router>
	);
};

export default Routes;
