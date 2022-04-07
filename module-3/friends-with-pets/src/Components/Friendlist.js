import React from "react"
import Friend from "./Friend"
import data from "../data.js"

export default function Friendlist () {
    const friends = data.map(item => {
        return <Friend 
            key={item.id}
            {...item}
        />
    })

    return(
       <main>
           {friends}
       </main> 
    )
}