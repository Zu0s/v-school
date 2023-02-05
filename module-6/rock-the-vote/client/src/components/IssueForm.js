import React, {useState } from 'react'

const initInputs = { title:  '', description: '' }
export default function IssueForm( {addIssue} ) {
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }
    
    function handleSubmit(e){
        e.preventDefault()
        addIssue(inputs)
        setInputs(initInputs)
    }

    const  {title, description} = inputs
    return(
         <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='title'
                value={title}
                onChange={handleChange}
                placeholder="Title"
            />
            <textarea 
                name='description'
                value={description}
                onChange={handleChange}
            />
            <button>Add new Issue</button>
         </form>
    )
}