import React from "react";

export default function Color(props) {
    return(
        <div className="color grid">
            <button className="color--button button">Random Color</button>
            <textarea value="random colors here" readOnly className="color-textarea textarea"/>
        </div>
    )
}