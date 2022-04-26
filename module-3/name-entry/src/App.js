import React from "react"
import './App.css';

export default function App() {
  const [names, setName] = React.useState({
    preview: "",
    nameList: []
  })

  function handleChange(event) {
    const {name ,value} = event.target // should deconstruct event to make it easier

     return setName(prevState => {
      return {
        ...prevState,
        [name]: value
      }
      
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    return setName(prevState => {
      prevState.nameList.push(prevState.preview)

      return {
        ...prevState
      }
    })
  }

  const namesList = names.nameList.map(name => {
    return <li>{name}</li>
  })

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Name"
          name="preview"
          onChange={handleChange}
          value={names.preview}
        />
        <input 
        type="submit"
        value="Submit New Name"
        />
      </form>
      <ul>
        {namesList}
      </ul>
    </div>
  );
}


