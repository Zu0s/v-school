// First Express Server 
const express = require ("express")
const app = express()
app.use(express.json()) // look for a request and transform it from JSON

// Routes //
app.use('/movies', require("./routes/movieRouter.js"))

app.use('/tvShows', require('./routes/tvShowRouter.js'))

//Server Listen //
app.listen(9000, () => { console.log("the server is running on Port 9000") }) 