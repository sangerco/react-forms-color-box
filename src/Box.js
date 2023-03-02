import React from "react";
import './Box.css'

const Box = ({ id, backgroundColor, width, height, removeBox }) => {
    const boxStyle = {
        backgroundColor: `${backgroundColor}`,
        width: `${width}px`,
        height: `${height}px`
    };
    const remove = () => removeBox(id)
    return (
        <div className="Box">
            <div style={boxStyle}></div>
            <button className="Box-btn" onClick={remove}>X</button>
        </div>
    )
}

export default Box;