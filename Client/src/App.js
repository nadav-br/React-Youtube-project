import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import StoreProvider from "./components/Store/StoreProvider";
import VideoPage from "./components/VideoPage/VideoPage";
import HomePage from "./components/HomePage/HomePage";
import SearchVideo from "./components/SearchVideo/SearchVideo";
import SearchResults from "./components/SearchVideo/SearchResults/SearchResults";
import "./App.css";
const App = () => {
  return (
    <>
      <Router>
        <SearchVideo />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/video-page/:id" exact component={VideoPage} />
          <Route path="/search/:id" exact component={SearchResults} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
