import React, { useContext } from "react";
import { ApiContext } from "../apiContext";

export default function Pattern(props) {

    const {patterns, changePatterns} = useContext( ApiContext )

    const {title, imgUrl, sepColors, author} = patterns // deconstruct patterns


    const hexedColors = sepColors.map(current => {
        return `#${current}  `
    })
    console.log(patterns)

    return(
        <div className="cp--grid cp--flex">
            <button onClick={changePatterns} className="cp--button button">Random Pattern</button>
            <h1 className="cp--title">Title: </h1>
            <h2 className="cp--subTitle cp--focus">{title}</h2>
            <img src={imgUrl} alt="shows the pallete of cps" className="cp--img"/>
            <textarea value={hexedColors} readOnly className="cp--textarea"/> 
            <h3 className="cp--author">By: <span className="cp--focus">{author}</span></h3> 
        </div>
    )
}