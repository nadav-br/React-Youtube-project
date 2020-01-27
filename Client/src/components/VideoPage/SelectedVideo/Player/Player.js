import React from 'react'

function Player() {


    return (
        <div className="movie">
            <iframe className="player" src={`https://www.youtube.com/embed/`} />
            <h3>This is a DESCRIPSION</h3>
        </div>
    )
}

export default Player
