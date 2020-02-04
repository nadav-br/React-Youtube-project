import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StoreProvider from "./components/Store/StoreProvider";
import VideoPage from "./components/VideoPage/VideoPage";
import HomePage from "./components/HomePage/HomePage";
import SearchVideo from "./components/SearchVideo/SearchVideo";
import SearchResults from "./components/SearchVideo/SearchResults/SearchResults";
import logo from "./youtube.png";

const App = () => {
  return (
<<<<<<< HEAD
      <>
      <img className="youtubeLogo" src={logo} alt="logo" />
      <StoreProvider>
        <Router>
        <SearchVideo />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/video-page/:id" exact component={VideoPage} />
            <Route path="/search-results/:id" exact component={SearchResults} />
          </Switch>
        </Router>
      </StoreProvider>
      </>
=======
    // <img src={logo} alt="logo" />
    <StoreProvider>
      <Router>
        <SearchVideo />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/video-page/:id" exact component={VideoPage} />
          <Route path="/search-results/:id" exact component={SearchResults} />
        </Switch>
      </Router>
    </StoreProvider>
>>>>>>> 0604eeb5b9d690a2aa6aaee72406b9fc456d5c2c
  );
};

export default App;
