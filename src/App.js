import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Article from "./components/Article/Article";
import LandingPageScreen from "./components/screens/LandingPageScreen";
import ProgramScreen from "./components/screens/ProgramScreen";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import { articles } from "./data/articles";

function App() {
  const GlobalCss = withStyles({
    // @global is handled by jss-plugin-global.
    "@global": {
      // You should target [class*="MuiButton-root"] instead if you nest themes.
      ".MuiTypography-colorPrimary": {
        color: "#454346",
      },
      ".MuiTypography-colorSecondary": {
        color: "#f47023",
      },
    },
  })(() => null);

  return (
    <React.Fragment>
      <GlobalCss />
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <LandingPageScreen articles={articles} />}
          />
          <Route path="/program" exact component={ProgramScreen} />
          <Route
            path="/article/:id"
            exact
            render={(props) => <Article articles={articles} {...props} />}
          />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
