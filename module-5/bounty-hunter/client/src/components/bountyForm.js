import React, { useState } from "react";

export default function bountyForm() {
    const initInfo = {
        firstName: "",
        lastName: "",
        living: true,
        bountyAmount: 0,
        type: "jedi"
    }
    const [info, setInfo] = useState({})

    return(
        <form>
            <input type='text'></input>
            <input type='text'></input>
            <input type='checkbox'></input>
            <input type='number'></input>
            <input type='text'></input>
        </form>
    )
}