import React, { useState } from "react";

export default function BountyForm(props) {
    const initInfo = {
        firstName: "",
        lastName: "",
        living: true,
        bountyAmount: 0,
        type: ""
    }
    const [info, setInfo] = useState({initInfo})

    function handleChange (e) {
        const {name, value} = e.target
        setInfo(prevInfo => ({...prevInfo, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        // apply the prop for activating the crud request
        setInfo(initInfo)
    }

    return(
        <form>
            <input 
                type='text' 
                name='firstName' 
                value={info.firstName} 
                onChange={handleChange} 
                placeholder='First Name'>
            </input>
            <input 
                type='text'
                name='lastName' 
                value={info.lastName} 
                onChange={handleChange} 
                placeholder='Last Name'>
            </input>
            <input 
                type='checkbox'
                name='living'
                value={info.living}
                onChange={handleChange}>    
            </input>
            <input 
                type='number'
                name='bountyAmount'
                value={info.bountyAmount}
                onChange={handleChange}
                placeholder='Bounty Ammount'>
            </input>
            <input 
                type='text'
                name='type' 
                value={info.lastName} 
                onChange={handleChange} 
                placeholder='Last Name'>
            </input> 
        </form>
    )
}