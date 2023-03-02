import React from "react";
import './Box.css'

const Box = ({ backgroundColor, width, height, removeBox }) => {
    const boxStyle = {
        backgroundColor: `${backgroundColor}`,
        width: `${width}px`,
        height: `${height}px`
    };

    return (
        <div className="Box">
            <div style={boxStyle}></div>
            <button className="Box-btn" onClick={removeBox}>X</button>
        </div>
    )
}

export default Box;