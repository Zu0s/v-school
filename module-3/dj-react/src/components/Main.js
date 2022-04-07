import React from "react"

export default function Main() {
    const [color, setColor] = React.useState(["white", "white", "white", "white"])

    function smallTimeDj() { // I dont think this is right and if its what I think. its a headache basically
        setColor(prevColor => {
            return prevColor[0] === "white" ? ["black", "black", "black", "black"] : ["white", "white", "white", "white"]
        })
    }

    function partyDj() {
        setColor(prevColor => {
            return ["purple", "purple", prevColor[2], prevColor[3]]
        })
    }

    function professionalDj(buttonSide) {
        setColor(prevColor => {
            return buttonSide === "left" ? [prevColor[0], prevColor[1], "blue", prevColor[3]] : [prevColor[0], prevColor[1], prevColor[2], "blue"]
        })
    } 

    function bigTimeDj(num) {
        setColor(prevColor => {
            if(num === "1") {
                return ["#89CFF0", prevColor[1], prevColor[2], prevColor[3]]
            } else if (num === "2"){
                return [prevColor[0], "#C3B1E1", prevColor[2], prevColor[3]]
            } else if (num === "3"){
                return[prevColor[0], prevColor[1], "#FF00FF", prevColor[3]]
            } else if (num=== "4") {
                return[prevColor[0], prevColor[1], prevColor[2], "#F8C8DC"]
            }
        })
    }

    function makeNoise() {
        console.log("noise is being played")
    }

    return(
        <main>
            <div className="squareone" style={{backgroundColor:color[0]}}></div>
            <div className="squaretwo" style={{backgroundColor:color[1]}}></div>
            <div className="squarethree" style={{backgroundColor:color[2]}}></div>
            <div className="squarefour" style={{backgroundColor:color[3]}}></div>

            <button onClick={smallTimeDj}>DJ Small</button>
            <button onClick={partyDj}>Party DJ</button>
            <button value="left" onClick={e => professionalDj(e.target.value)}>Left Blue</button>
            <button onClick={professionalDj}>Right Blue</button>
            <button value="1" onClick={e => bigTimeDj(e.target.value)}>Big DJ one</button>
            <button value="2" onClick={e => bigTimeDj(e.target.value)}>Big DJ two</button>
            <button value="3" onClick={e => bigTimeDj(e.target.value)}>Big DJ three</button>
            <button value="4" onClick={e => bigTimeDj(e.target.value)}>Big DJ four</button>
            <button className="lastButton" onClick={makeNoise}>Make Noise</button>
        </main>
    )
}