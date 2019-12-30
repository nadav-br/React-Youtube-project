import React from 'react';
import './App.css';
import StoreProvider from './Store'
import VideosList from './components/VideosList/VideosList'
import Video from './components/Video/Video'


function App() {
  return (
    <>
    <VideosList /> 
    <Video />
    </>
  );
}

export default App;
