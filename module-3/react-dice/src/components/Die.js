import React from "react"

export default function Die({number, handleClick, index, style}) {

    //very fancy way to change box color to say a box is locked
    const color = {
        backgroundColor: style
    }
    return(
            <div 
                id={index} 
                className="die"
                style= {color}
                onClick={e => handleClick(index)}  
            >
                {number}
            </div>
    )
}