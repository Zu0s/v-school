const express = require('express')
const app = express()
const { v4: uuidv4 } = require ('uuid')
app.use(express.json())

// Fake Data //
const anime = [
    {title: "Spy X Family", genre: "slice of life", _id: uuidv4() },
    {title: "Overlord", genre: "isekai", _id: uuidv4() }, 
    {title: "My Life as a Slime", genre: "isekai", _id: uuidv4() },
    {title: "Assassination Classroom", genre: "slice of life", _id: uuidv4() },
]

// Route //
app.get('/anime', (req, res) => {
    if (req.query !== {}) {
        const filteredAnime = anime.filter(anime => anime.genre === req.query.genre)
        res.send(filteredAnime)
    } else { res.send(anime) }
   
})

app.listen(8000, () => {console.log("app is listening on port 8000")})