import React from 'react';
import "./BtnSlide.css";

const BtnSlide = ({moveSlide, direction}) => {
    const Arrow = ["/images/committee/left-button.png","/images/committee/right-button.png"];

    return ( 
        <button onClick = {moveSlide} className={direction === "next" ? "btn-slide right" : "btn-slide left" }>
            <img src={direction === "next" ? Arrow[1] : Arrow[0]} alt="" />
        </button>
     );
}
 
export default BtnSlide;