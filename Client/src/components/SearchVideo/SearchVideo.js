import React, { useState } from 'react';
import {useHistory} from "react-router-dom";
import './SearchVideo.scss';
 

const SearchVideo = () => {
    
    const [input, setInput] = useState('');
    //const [search, setSearch] = useState([]);
    let history = useHistory();    
    const handleInput = (e) => {
        setInput(e.target.value)   
            
    }

    const clickSearch = () => {   
        history.push('/search-results/' + input)       
    };

    return (
        <div className="searchVideo">            
            <button className="btn" onClick={() => clickSearch()}>search</button>
            <input type="text" placeholder="חיפוש" onChange={(e) => handleInput(e)}></input>          
        </div>
    )
}

export default SearchVideo;
