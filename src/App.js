import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPageScreen from "./components/screens/LandingPageScreen";
import ProgramScreen from "./components/screens/ProgramScreen";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPageScreen} />
          <Route path="/program" exact component={ProgramScreen} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
