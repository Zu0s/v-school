import React from "react"

export default function(props) {
    // background: linear-gradient(50deg, #FFFF00 , #000000); 
    // -moz-background: linear-gradient(50deg, #FFFF00 , #000000); 
    // -webkit: linear-gradient(50deg, #FFFF00 , #000000)
    const style= {
        background: `linear-gradient(${props.angle}deg, ${props.savedColors[0]}, ${props.savedColors[1 ]})`
    }



    console.log(props)
    return(
        <div>
            <div className="colorBox" style={style}></div>
            <textarea readOnly value={` background: linear-gradient(${props.angle}deg, ${props.savedColors[0]} , ${props.savedColors[1 ]});     -moz-background: linear-gradient(${props.angle}deg, ${props.savedColors[0]} , ${props.savedColors[1 ]}); -webkit: linear-gradient(${props.angle}deg, ${props.savedColors[0]} , ${props.savedColors[1 ]})`}/>
        </div>
    )
}