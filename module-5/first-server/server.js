// First Express Server 
const express = require ("express")
const app = express()
const morgan = require('morgan')
 
//middleware
app.use(express.json())
app.use(morgan('dev'))

// Routes //
app.use('/movies', require("./routes/movieRouter.js"))

app.use('/tvShows', require('./routes/tvShowRouter.js'))

// Error handler //
app.use((err, req, res, next) => {
    console.log(err)
})

//Server Listen //
app.listen(9000, () => { console.log("the server is running on Port 9000") }) 