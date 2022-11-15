import React, { useState } from "react";

export default function BountyForm(props) {
    const initInfo = {
        firstName: "",
        lastName: "",
        living: true,
        bountyAmount: 0,
        type: ""
    }
    const [info, setInfo] = useState(initInfo)

    function handleChange (e) {
        const {name, value} = e.target
        setInfo(prevInfo => ({...prevInfo, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(info, props._id) // should send the info to whatever function, update or post, i need it to use 
        setInfo(initInfo)
    }

    return(
        <form onSubmit={handleSubmit}>
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
                value={info.type} 
                onChange={handleChange} 
                placeholder='type'>
            </input> 
            <button>{ props.btnText }</button>
        </form>
    )
}