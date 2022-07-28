import React from "react";
import "./singleMovie.style.css";

export const SingleMovie = (props) => {
  return (
    <div
      className="single-movie"
      style={{
        backgroundImage: `url(${props.image})`,
        padding: 20,
      }}
    >
      <p
        className="title"
        style={{ fontSize: 20, color: "#ffffff", wordWrap: "break-word", margin: 0, fontWeight: 'bold' }}
      >
        {props.title}
      </p>
      <p
        className="year"
        style={{ fontSize: 20, color: "#ffffff", wordWrap: "break-word", margin: 0}}
      >
        {props.year}
      </p>
    </div>
  );
};
