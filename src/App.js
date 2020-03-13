import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import SplashPortrait from "./Components/SplashPage/SplashPortait";
import SplashBody from "./Components/SplashPage/SplashBody";
import ProjectsPage from "./Components/ProjectsPage/ProjectsPage.js";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <SplashPortrait />
            <SplashBody />
          </Route>
          <Route exact path="/projects">
            <ProjectsPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
