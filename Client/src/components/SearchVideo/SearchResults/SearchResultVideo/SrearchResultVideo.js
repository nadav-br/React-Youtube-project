import React from 'react'

function SearchResultVideo(props) {
    return (
        <div className='searchResultVideo'>            
            <h5 className='title'>{props.snippet.title}</h5>
            <img src={props.snippet.thumbnails.medium.url} /> 
        </div>
    )
}

export default SearchResultVideo;
