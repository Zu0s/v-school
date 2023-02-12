import React, { useState } from 'react'
import AuthForm from '../components/AuthForm'

//
// Will be sign up and login page defaulting on signup
//

const initInputs = { username: '', password: ''}

export default function Auth({signup, login, resetAuthErr, errMsg}) {
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

      function toggleForm() {
        setToggle(prev => !prev)
        resetAuthErr()
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
                      errMsg={errMsg}
                    />
                    <p onClick={toggleForm}>Already a member?</p>
                </>
                :
                <>
                    <AuthForm 
                      handleChange={handleChange}
                      handleSubmit={handleLogin}
                      inputs={inputs}
                      btnText="Login"
                      errMsg={errMsg}
                    />
                    <p onClick={toggleForm}>Not a member?</p>
              </>
            }
        </div>
    )
}