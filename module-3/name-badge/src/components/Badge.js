import React from "react"

export default function Badge(props) {

    function addDashes (phoneNumber) {
        const firstThree = phoneNumber.slice(0,3)
        const secondThree = phoneNumber.slice(3,6)
        const lastFour = phoneNumber.slice(6)
        const newNumber = `${firstThree}-${secondThree}-${lastFour}`

        return newNumber
    }

    const phoneNumber = addDashes(props.info.phone) // adds dashes

    return(
        <div className="badge--grid">
            <div className="badge--title">Badge: </div>
            <p className="badge--name left">{`Name: ${props.info.firstName} ${props.info.lastName}`}</p>
            <p className="badge--phone right">{`Phone: ${phoneNumber}`}</p>
            <p className="badge--pob left">{`Place of birth: ${props.info.placeOfBirth}`}</p>
            <p className="badge--favFood right">{`Favorite food: ${props.info.favoriteFood}`}</p>
            <p className="badge--email left">{`Email: ${props.info.email}`}</p>
            <p className="badge--randomInfo">{props.info.randomInfo}</p>
        </div>
    )
}