const express = require('express')
const app = express()
const { v4: uuidv4 } = require ('uuid')

// Fake Data //
const todos = [
    {
        name: 'test todo',
        description: 'the description of the todo',
        imageurl: 'not doing that',
        completed: false,
        _id: uuidv4()
    },
    {
        name: 'test todo',
        description: 'the description of the todo',
        imageurl: 'not doing that',
        completed: false,
        _id: uuidv4()
    }
]

// Routes //

app.route('/')

.get((req, res) => { // get all // 
    res.send(todos)
})

.post((req, res) => {
    todos.push(req.body)
    res.send('new todo has been added to the list')
})

app.route('/:todoId')

.get((req, res) => {  // get one
    res.send(todos.find(todo => todo._id === req.params.todoId)) 
})



app.listen(8000, () => { console.log('server is live on port 8000') })