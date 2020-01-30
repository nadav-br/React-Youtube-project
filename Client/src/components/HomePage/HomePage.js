import React from "react";
import Feed from "./Feed/Feed";
import SearchVideo from '../SearchVideo/SearchVideo';


const HomePage = () => { 
 
    return (
      <div className='homePage'>      
        <Feed />
        {/* <SearchVideo /> */}
      </div>
    );
  
}

export default HomePage;
