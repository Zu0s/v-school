import React from "react"
import Nav from "./components/Nav"
import Memes from './components/Memes'

//used for editing current memes
export default function App() {
  const [currentMeme, setCurrentMeme] = React.useState({
    topText: '', 
    bottomText: '',
    url: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    id: NaN
  })

  //saves api data / user saved data
  const [allMemes, setAllMemes] = React.useState({
    memeData: [],
    userSavedMemes: [] 
  })

  // acquires the api data for new memes
  React.useEffect(() => {
    async function getMemes() {
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setAllMemes(prevAllMemes => {
          return {
            ...prevAllMemes,
            memeData: data.data.memes
          }
        })
    }
    getMemes()
  }, [])

  //change text field when text is entered
  function handleChange(event) { 
    const {name, value} = event.target 

    return setCurrentMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }

  //changes the current meme to a random one
  function newMeme() {
    return setCurrentMeme(prevMeme => {
      let randomNum = Math.floor(Math.random() * allMemes.memeData.length) - 1 

      randomNum === -1 ? randomNum = 0 : console.log() // becasue randomNum can be equal -1

      return {
        ...prevMeme,
        url: allMemes.memeData[randomNum].url 
      }
    }) 
  }

  //SAVING -- two test neede. 1 reset the currentMeme 2 test if you can get to the else statement
  function onSave() {
    console.log(isNaN(currentMeme.id))
    if(isNaN(currentMeme.id)) { // run this to add to saved users meme array
      setAllMemes(prevAllMemes => {
        const newArr = prevAllMemes.userSavedMemes
        newArr.push({ // not spreading current meme because I dont want the id saved in the array
          topText: currentMeme.topText, 
          bottomText: currentMeme.bottomText,
          url: currentMeme.url,
        }) 
        return {
          ...prevAllMemes,
          userSavedMemes: newArr
        }
      })

    } else { // run this if it is a edit
      setAllMemes(prevAllMemes => {
        const newArr = prevAllMemes.userSavedMemes
        newArr[currentMeme.id] =  {
          topText: currentMeme.topText, 
          bottomText: currentMeme.bottomText,
          url: currentMeme.url,
        }

        return {
          ...prevAllMemes,
          userSavedMemes: newArr
        }
      }) 
    }

    return setCurrentMeme(prevCurrentMeme => {
      return {
        topText: '', 
        bottomText: '',
        url: `https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
        id: NaN  
      }
    })
  }

  //DELETING
  function onDelete(id) {
    console.log(`onDelete has ran with a id of: ${id}`)
    return setAllMemes(prevAllMemes => {
      const newArr = prevAllMemes.userSavedMemes 
      newArr.splice([id], 1)

      return {
        ...prevAllMemes,
        userSavedMemes: newArr
      }
    })
  }

  // EDITING 
  function onEdit(id) {
    console.log(`onEdit has ran with a id of: ${id}`)

    return setCurrentMeme(() => {
      const arrItem = allMemes.userSavedMemes[id] 

      return {
        ...arrItem,
        id: id
      }
    })
  } 

  let userSavedMemeList = []; // revist this for deleting and saving  .MIGHT NOT NEED TO
  for (let i = 0; i < allMemes.userSavedMemes.length; i++) {
    const currentItem = allMemes.userSavedMemes[i]

    userSavedMemeList.push(
      <Memes
      key= {i} 
      topText= {currentItem.topText}
      bottomText= {currentItem.bottomText}
      url= {currentItem.url}
      id= {i}
      handleDelete={onDelete}
      handleEdit={onEdit}
      />)
  }

  //console.log(userSavedMemeList) // TEMPORARY need to check if for loop running corectly 

  return (
    <main className="App">
      <Nav id={currentMeme.id}/>
      <div className="main--grid">
        <input 
          className="main--topText"
          type="text"
          placeholder="Top Text"
          name="topText"
          onChange={handleChange}
          value={currentMeme.topText}
        />
        <input 
          className="main--bottomText"
          type="text"
          placeholder="Bottom Text"
          name="bottomText"
          onChange={handleChange}
          value={currentMeme.bottomText}
        />
        {isNaN(currentMeme.id) && <button onClick={newMeme} className="main-changeMemeButton">Change Meme</button>}
        
        <div className="meme">
          <img className="meme--app" src={currentMeme.url}/>
          <h2 className="meme--text top">{currentMeme.topText}</h2>
          <h2 className="meme--text bottom">{currentMeme.bottomText}</h2>
        </div>
        <button onClick={onSave} className="main--save">Save</button>
      </div>

      <hr />
      <h1 className="main--saveMemeTitle">Saved Memes</h1>
      <div className="main--savedMemesFlex">
        {userSavedMemeList}
      </div>
    </main>
  );
}

