import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import GalleryPage from "../pages/GalleryPage";
import Home from "../pages/Home";
import Infos from "../pages/Infos";

const Routes = () => {
  return (
    <Router basename="/">
      <Header />
      <main className="body-page">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/infos" component={Infos} />
          <Route exact path="/galerie/:type" component={GalleryPage} />
          <Redirect to="/" />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default Routes;
