const express = require('express')
const app = express()
const { v4: uuidv4 } = require ('uuid')

app.use(express.json())

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
    req.body._id == uuidv4()
    todos.push(req.body)
    res.send('new todo has been added to the list')
})

app.route('/:todoId')

.get((req, res) => {  // get one
    res.send(todos.find(todo => todo._id === req.params.todoId)) 
})

.put((req, res) => {
    const todoIndex = todos.findIndex(todo => todo._id === req.params.todoId)
    console.log(req.body)
    res.send( Object.assign(todos[todoIndex], req.body) )
})

.delete((req, res) => {
    const todoIndex = todos.findIndex(todo => todo._id === req.params.todoId)
    todos.splice(todoIndex, 1)
    res.send('Succesfully deleted')
})



app.listen(8000, () => { console.log('server is live on port 8000') })