import React, {useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import SearchResultVideo from './SearchResultVideo/SrearchResultVideo'
import { Link } from "react-router-dom";
import { SearchResultDiv } from "../../../StyledComponents/SearchResultStyle";
const uuidv4 = require('uuid/v4');
const axios = require('axios').default;



function SearchResults() {
    const [searchResults, setsearchResults] = useState([]);
    const {id} = useParams();

    const putVidToDB = video => {
      axios.post(`/movies`,video);      
    }
    
    useEffect(() => {
        fetch(`/search/?q=${id}`)
        .then(res => res.json())
        .then(searchResults => {    
          setsearchResults(searchResults)        
        });
    },[id]);
    
    
    return (
        <SearchResultDiv>         
          {searchResults.map(video => {     
              return (   
                <Link key={uuidv4()} onClick={() => putVidToDB(video)} to={`/video-page/${video.id}`}>                
                <SearchResultVideo {...video} />
                </Link>
              )
          })}
        </SearchResultDiv>
    )
}

export default SearchResults;


