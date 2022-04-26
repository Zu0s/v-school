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
        <div className="badge-grid">
            <p>{`Name: ${props.info.firstName} ${props.info.lastName}`}</p>
            <p>{`Phone: ${phoneNumber}`}</p>
            <p>{`Place of birth: ${props.info.placeOfBirth}`}</p>
            <p>{`Favorite food: ${props.info.favoriteFood}`}</p>
            <p>{`Email: ${props.info.email}`}</p>
            <p>{props.info.randomInfo}</p>
        </div>
    )
}