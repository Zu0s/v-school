const express = require('express')
const app = express()
const { middleware } = require('./addId.js')

// Data //
const data = {
    firstName: "Brandon",
    lastName: "Butkovich",
    age: 21
}

// Route //
// console.log(middleware)
middleware

app.get('/', (req, res) => { res.send(data) })

app.listen(8000, () => {console.log('apop is running on port 8000')})