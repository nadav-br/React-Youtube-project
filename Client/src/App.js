import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import StoreProvider from "./components/Store/StoreProvider";
import VideoPage from "./components/VideoPage/VideoPage";
import HomePage from "./components/HomePage/HomePage";
import SearchVideo from './components/SearchVideo/SearchVideo';
import SearchResults from './components/SearchVideo/SearchResults/SearchResults'
import logo from './youtube.png';


const App = () => {
  return (
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
  );
}

export default App;



