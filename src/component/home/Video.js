import React from "react";
import "./home.css";

export default function Video(props) {
  return (
    <div className="home_video_container">
      <iframe
        src={props.url}
        title="video"
        className="home_video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}
