import React from "react"
import Die from "./Die"

export default function DiceBox() {
    const [numbers, setNumbers] = React.useState(
        [
            {
                key:0,
                number: 0,
                isLocked: false,
                style: "#000000"
            },
            {
                key:1,
                number: 0,
                isLocked: false,
                style: "#000000"
            },
            {
                key:2,
                number: 0,
                isLocked: false,
                style: "#000000"
            },
            {
                key:3,
                number: 0,
                isLocked: false,
                style: "#000000"
            },
            {
                key:4,
                number: 0,
                isLocked: false,
                style: "#000000"
            }
        ]
    )

    const dice = numbers.map(item => {

        return <Die 
            key={item.key}
            index={item.key}
            number={item.number}
            handleClick={lockNum}
            color={item.isLocked}
            style={item.style}
        />
    })

    function reroll() {
        setNumbers(() => {
            return numbers.map(item => {

                let newNumber ;
                item.isLocked ? newNumber = item.number : newNumber = Math.floor(Math.random() * 7)

                return {
                    ...item,
                    number: newNumber
                }
            })
        })
    }

    function lockNum(index) {
        return setNumbers(prevState => {
            prevState[index].isLocked = !prevState[index].isLocked
            prevState[index].style = prevState[index].isLocked ? "#660000" : "#000000"
            return prevState
        })
    }

    return(
        <div>
            <div className="flexBox">
                {dice}
            </div>
            <button onClick={reroll}>Reroll</button>
        </div>
    )
}



// prevState[index].isLocked = !prevState[index].isLocked
// prevState[index].style = prevState[index].isLocked ? "#660000" : "#000000"
// return prevState