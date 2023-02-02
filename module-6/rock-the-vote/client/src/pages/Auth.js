import React, { useState } from 'react'
import AuthForm from '../components/AuthForm'

//
// Will be sign up and login page defaulting on signup
//

const initInputs = { username: '', password: ''}

export default function Auth({signup, login}) {
    const [toggle, setToggle] = useState(true)
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
          ...prevInputs,
          [name]: value
        }))
      }
    
      function handleSignup(e){
        e.preventDefault()
        signup(inputs)
      }
    
      function handleLogin(e){
        e.preventDefault()
        login(inputs)
      }

    return(
        <div>
            { toggle ? 
                <>
                    <AuthForm 
                    handleChange={handleChange}
                    handleSubmit={handleSignup}
                    inputs={inputs}
                    btnText="Sign up"
                    />
                    <p onClick={() => setToggle(prev => !prev)}>Already a member?</p>
                </>
                :
                <>
                    <AuthForm 
                    handleChange={handleChange}
                    handleSubmit={handleLogin}
                    inputs={inputs}
                    btnText="Login"
                    />
                    <p onClick={() => setToggle(prev => !prev)}>Not a member?</p>
              </>
            }
        </div>
    )
}