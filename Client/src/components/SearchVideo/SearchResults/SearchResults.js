import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import './SearchResults.scss'

function SearchResults() {

    const [search, setSearch] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/search?q=${id}`)
        .then(res => res.json())
        .then(videoData => {    
        setSearch(videoData)

        })
    },[id])
    
    return (
        <div className="searchResults">         
            {search.map(video => {
                return (
                <ul className="feedVideo">
                    <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} />
                    <li>{video.snippet.title}</li>
                {/* <li>{this.props.snippet.description}</li> */}
                </ul>
                )
            })}
              
        </div>
    )
}

export default SearchResults;
