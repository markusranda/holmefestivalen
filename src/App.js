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
          <Route path="/">
            <LandingPageScreen />
          </Route>
          <Route path="/program">
            <ProgramScreen />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
