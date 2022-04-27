// import React from "react"
// import './App.css';

// export default function App() {

//   //COLOR STATE

//   // <button onClick={first}>First state change</button> 
//   // <button onClick={second}>Second state change</button> 
//   // <h1>Color state = "{color}"</h1>

//   // const [color, setColor] = React.useState("pink")

//   // function first() {
//   //   return setColor("red")
//   // }

//   // function second() {
//   //   return setColor(prevColor => {
//   //     return (prevColor === "pink" ? "blue" : "pink")
//   //   })
//   // }

//   // //PEOPLE STATE

//   // <button onClick={addJohn}>Add an additional John wilkes</button>
//   // <ul>{listPeople}</ul>

//   // const [people, setPeople] = React.useState([
//   //   {
//   //     firstName: "John",
//   //     lastName: "Smith"
//   //   }
//   // ])

//   // function addJohn() {
//   //   console.log("this ran")

//   //   return setPeople(prevPeople => {
//   //     const newArr = prevPeople
//   //     newArr.push({
//   //       firstName: "John",
//   //       lastName: "Wilkes"
//   //     })

//   //     return [
//   //       ...newArr
//   //     ]
//   //   })
//   // }

//   // const listPeople = people.map(item => {
//   //   return <li> {item.firstName} {item.lastName} </li>
//   // })

//   // comment out cause not needed for raw functionality

  
//   // const [colors, setColors] = React.useState(["pink", "blue"])

//   // function arrColor () {
//   //   setColors(prevColors => [...prevColors, "green"])
//   // }

  
//   // const [countObject, setCountObject] = React.useState({
//   //   count: 0
//   // })

// // THIS ONE HAS ME MORE CONFUSED
// // function changeObject() {
// //   setCountObject(prevState=> {count: prevState.count + 1})
// // }


// //PERSON 5

// /* <button onClick={addAge}>change person age to 30</button> */
//   // const [person, setPerson] = React.useState ({
//   //   firstName: "John",
//   //   lastName: "Wilkes"
//   // })  


//   // function addAge() {
//   //   return setPerson(prevPerson => {
//   //     return {
//   //       ...prevPerson,
//   //       age: 30
//   //     }
//   //   })
//   // }

//   // console.log(person)

//   return (
//     <div className="App">

//       <hr /> 

//       <hr />

//     </div>
//   );
// }


import React from 'react';
// import axios from 'axios';

function Main () {
  //create state for form inputs and img urls
  const [memes, setMemes] = React.useState({
    topText: '',
    bottomText: '',
    // eslint-disable-next-line
    url: "https:\/\/i.imgflip.com\/1g8my4.jpg"
  });

  //create state for memes array from api
  const [memeApi, setMemeApi] = React.useState([]);

  //make api call and update state
  // React.useEffect(() => {
  //   fetch("https://api.imgflip.com/get_memes")
  //   .then(response => setMemeApi(response.data.data.memes))
  //   console.log(memeApi)
  //   // .catch(error => console.log(error.data))
  // }, []);

  React.useEffect(() => {
    async function getMemes() {
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setMemeApi(() => {
          return [...data.data.memes]
        })
    }
    getMemes()
  }, [])



  //refresh btn changes memes
  function changeMeme(event) {
    const randomNum = Math.floor(Math.random() * memeApi.length);
    const nextUrl = memeApi[randomNum].url
    setMemes(prev => ({ // could be this
      ...prev,
      url: nextUrl
    }))
  }

  //set state to update as input values change
  function handleChange(event) {
    const {name, value} = event.target;
    setMemes(prev => ({
      ...prev,
      [name]: value
    }));
  }

  //set state to store created memes on submit
  const [createdMemes, setCreatedMemes] = React.useState([]);
  function createMeme(event) {
    event.preventDefault() // dont need this
    setCreatedMemes(prev => ([
        ...prev, memes
    ]))
  }
  console.log(createdMemes)

  return (
    <main className="content-container">
      <div className="meme-form">
        <input
          name="topText"
          onChange={handleChange}
          placeholder="Top Text"
          value={memes.topText}
        ></input>
        <input
          name="bottomText"
          onChange={handleChange}
          placeholder="Bottom Text"
          value={memes.bottomText}
        ></input>
        <br></br>
        <div className="image-div">
          <img
            className="defaultMeme"
            src={memes.url}
            alt="current top memes">
          </img>
          <p className="topText">{memes.topText}</p>
          <p className="bottomText">{memes.bottomText}</p>
        </div>
        <button
          className="submitBtn"
          onClick={createMeme}
        >Submit</button>
        <button
          className="refreshBtn"
          onClick={changeMeme}
          >Refresh Meme Image</button>
      </div>
    </main>
  );
}

export default Main

