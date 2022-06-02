import React from "react";

export default function Home() {
    return(
        <div>
            <img src={require('../images/picture1.png') } className="home--img1"/>
            <p className="home--p">We exist to help relieve the stress of choosing colors by helping you create palletes to fill your black and white canvas with color</p>
            <img src={require('../images/picture2.png')} className="home--img2"/>
        </div>
    )
}