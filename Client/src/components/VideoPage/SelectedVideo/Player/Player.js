import React from "react";

function Player(props) {
  return (
    <div className="movie">
      <iframe
        className="player"
        src={`https://www.youtube.com/embed/${props.id}`}
      />
      <h3>{props.title}</h3>
      <div>
        <p className="desc">{props.desc}</p>
      </div>
    </div>
  );
}

export default Player;
