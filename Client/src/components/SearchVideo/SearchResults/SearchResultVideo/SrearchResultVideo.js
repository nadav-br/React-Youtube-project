import React from 'react'
import { SearchResultVidDiv } from "../../../../StyledComponents/SearchResultStyle";

function SearchResultVideo(props) {
    
    return (
        <SearchResultVidDiv>            
            <h5 className='title'>{props.snippet.title}</h5>
            <img src={props.snippet.thumbnails.medium.url} /> 
        </SearchResultVidDiv>
    )
}

export default SearchResultVideo;
