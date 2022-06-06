import React from "react";

export default function Home() {
    return(
        <div className="home">
            <img src={require('../images/picture1.png') } alt="show what could be done with colors" className="home--img1 img"/>
            <p className="home--p">We exist to help relieve the stress of choosing colors by helping you create palletes to fill your black and white canvas with color</p>
            <img src={require('../images/picture2.png')} alt="show what could be done with colors" className="home--img2 img"/>
        </div>
    )
}