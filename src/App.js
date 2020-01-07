import React from "react";
import "./App.css";
import StoreProvider from "./Store";
import VideosList from "./components/VideosList/VideosList";
import Video from "./components/Video/Video";
import Feed from "./components/Feed/Feed";

function App() {
  return (
    <>
      <Feed />
      {/* <VideosList />
      <Video /> */}
    </>
  );
}

export default App;
