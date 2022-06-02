import React from "react";

export default function Pattern(props) {
    return(
        <div className="pattern grid">
            <button className="pattern--button button">Random Pattern</button>
            <textarea value="random patterns here" readOnly className="pattern--textarea textarea"/>
        </div>
    )
}