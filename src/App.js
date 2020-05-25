import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Article from "./components/Article/Article";
import LandingPageScreen from "./components/screens/LandingPageScreen";
import ProgramScreen from "./components/screens/ProgramScreen";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  const articles = [
    {
      id: 0,
      title: "Løklympiske Leker",
      ingress: "Etter lang tid returner Løklympiske leker til holmefestivalen.",
      paragraph:
        "Årets Løklympiske leker returnerer med enda tøffere utfordringer, som både utfordrer sinn og fordøyelsessystem.. Årets deltakere har mye å se frem til.",
      imgHeader: "whoomp_header.png",
      imgMain: "Whoomp.png",
    },
    {
      id: 1,
      title: "Gamle muligheter",
      imgSrc: "https://via.placeholder.com/750",
    },
    {
      id: 2,
      title: "Fine muligheter",
      imgSrc: "https://via.placeholder.com/750",
    },
  ];

  return (
    <React.Fragment>
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
