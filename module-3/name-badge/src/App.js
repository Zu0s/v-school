import React from "react"
import './App.css';
import Badge from "./components/Badge"

export default function App() {
  const [badge, setBadge] = React.useState ({
    formData: {
      firstName: "",
      lastName: "",
      email: "",
      placeOfBirth: "",
      phone: "",
      favoriteFood: "",
      randomInfo: ""
    },
    badges: []
  })



  function handleChange(event) { // handle form changes
    let {name, value} = event.target;

    return setBadge(prevState => {
      return {
        ...prevState,
        formData: {
          ...prevState.formData,
          [name]: value
        }
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault();

    setBadge(prevState => {
      let newBadgeList = prevState.badges //create a maluable array

      const resetBaseValues = { 
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phone: 0,
        favoriteFood: "",
        randomInfo: ""
      }


        if (prevState.formData.phone.length === 10) { // if phone number is only number then submit
          const newState = { 
            formData: resetBaseValues,
            badges: newBadgeList
          }

          newBadgeList.push( // push a object into the array
          {
            firstName: prevState.formData.firstName,
            lastName: prevState.formData.lastName,
            email: prevState.formData.email,
            placeOfBirth: prevState.formData.placeOfBirth,
            phone: prevState.formData.phone,
            favoriteFood: prevState.formData.favoriteFood,
            randomInfo: prevState.formData.randomInfo
          }
          )

          return newState
        } else { // if it isnt a completed phone number then error
          alert("please enter a valid phone number")

          return {
            ...prevState
          }
        }
    })
  }

  const badgeList = badge.badges.map(obj => {
    return <Badge 
      info={obj}
    />
  })
  
  return (
    <div className="App">
      <div className="formGrid">
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            name="firstName"
            placeholder="First Name"
            value={badge.formData.firstName}
            onChange={handleChange}
          />
          <input 
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={badge.formData.lastName}
            onChange={handleChange}
          />
          <input
            type="text" 
            name="email"
            placeholder="Email"
            value={badge.formData.email}
            onChange={handleChange}
          />
          <input 
            type="text"
            name="placeOfBirth"
            placeholder="Place Of Birth"
            value={badge.formData.placeOfBirth}
            onChange={handleChange}
          />
          <input 
            type="number"
            name="phone"
            placeholder="Phone"
            value={badge.formData.phone}
            onChange={handleChange}
          />
          <input 
            type="text"
            name="favoriteFood"
            placeholder="Favorite Food"
            value={badge.formData.favoriteFood}
            onChange={handleChange}
          />

          <textarea 
            name="randomInfo"
            placeholder="Information you wish to tell"
            value={badge.formData.randomInfo}
            onChange={handleChange}
          />

          <input 
            type="submit"
            value="Submit"
          />
        </form>
      </div>
      
      {badgeList}
    </div>
  );
}


