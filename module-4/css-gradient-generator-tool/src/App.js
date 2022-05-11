import React, {useState}from "react"
import Choices from "./components/Choices"
import ColorDisplay from "./components/ColorDisplay"

export default function App() {
  const [colors, setColors] = useState({
    savedColors: ["#000000", "#000000"],
    angle: 50
  })

  function handleChange(event) {
    const {id, value, type} = event.target

    if (type === "color") { // if color picker change the array item
      return setColors(prevColors => {
        prevColors.savedColors[id] = value
        return {
          ...prevColors
        }
      })
    } else { // else change the angle
      return setColors(prevColors => {
        return {
          ...prevColors,
          angle: value
        }
      })
    }
  }


  const colorChoices = colors.savedColors.map((item, id) => {
    return <Choices 
      key={id}
      id={id}
      onChange={handleChange}
      currentColor={item}
    />
  })

  return (
    <main className="app">
      <h1>CSS Gradient Code Generator</h1>

      <div className="main">
        <div className="grid--left">
          <ColorDisplay {...colors}/>
        </div>
        <div className="grid--right">
          <h2>Options</h2>
          {colorChoices}
          <span>angle </span>
          <input type="number" onChange={handleChange} value={colors.angle}/>
        </div>
      </div>
    </main>
  );
}


