import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import StoreProvider from "./components/Store/StoreProvider";
import VideoPage from "./components/VideoPage/VideoPage";
import HomePage from "./components/HomePage/HomePage";


const App = () => {
  return (
      <StoreProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/video-page" exact component={VideoPage} />
          </Switch>
        </Router>
      </StoreProvider>
  );
}

export default App;
