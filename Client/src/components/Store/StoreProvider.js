import React, { useState, useEffect } from "react";

export const Context = React.createContext();
export const Provider = Context.Provider;

const StoreProvider = (props) => {

  const [videoslist, setVideoList] = useState([])

useEffect(() => {
  fetch('http://localhost:3000/videos')
    .then(res => res.json())
    .then(videoslist => {
      // console.log(videoslist)
      setVideoList(videoslist)
    })

},[])
  
    return (
      <>
        <Provider value={videoslist}>{props.children}</Provider>
      </>
    );
  
}

export default StoreProvider;
