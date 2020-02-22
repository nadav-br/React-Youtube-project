import React, {useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import SearchResultVideo from './SearchResultVideo/SrearchResultVideo'
import { Link } from "react-router-dom";
import './SearchResults.scss';
const uuidv4 = require('uuid/v4');


function SearchResults() {
    const [searchResults, setsearchResults] = useState([]);
    const {id} = useParams();
    
    useEffect(() => {
        fetch(`http://localhost:3000/search?q=${id}`)
        .then(res => res.json())
        .then(searchResults => {    
          setsearchResults(searchResults)        
        })
    },[id])   
    console.log("SEARCH",searchResults)
    return (
        <div className="searchResults">         
          {searchResults.map(video => {     
              return (   
                <Link key={uuidv4()} to={`/video-page/${video.id}`}>                
                <SearchResultVideo key={video.id} {...video} />
                </Link>
              )
          })}
        </div>
    )
}

export default SearchResults;


