import React from "react";
import "./about.css";

export default function Past(props) {
  return (
    <div
      className="past"
      data-aos={props.id % 2 === 0 ? "fade-left" : "fade-right"}
      data-aos-anchor-placement="center-bottom"
    >
      <h1>{props.title}</h1>
      <div class="fullwrap">
        <img class="past-image" src={props.image} alt="" />
        <div class="fullcap">
          <p class="img__description">{props.flip}</p>
        </div>
      </div>
      <h2>{props.name}</h2>
    </div>
  );
}
