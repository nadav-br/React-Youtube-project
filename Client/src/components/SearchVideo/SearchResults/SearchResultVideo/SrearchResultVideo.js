import React from 'react'

function SearchResultVideo(props) {
    return (
        <div className='searchResultVideo'>            
            <img src={props.snippet.thumbnails.medium.url} /> 
            {props.snippet.title}
        </div>
    )
}

export default SearchResultVideo;
