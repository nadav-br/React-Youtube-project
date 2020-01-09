import React from "react";
import "./App.css";
import StoreProvider from "./components/Store/StoreProvider";
import VideoPage from "./components/VideoPage/VideoPage";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <StoreProvider>
      <div>
      <HomePage />
      </div>
    </StoreProvider>
  );
}

export default App;
