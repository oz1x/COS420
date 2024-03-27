'use client'

import { FormEvent, useState } from 'react'

export default function Login() {
    const [value, setValue] = useState([])
    var testbool = false
  
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
     
        const formData = new FormData(event.currentTarget)
        const response = await fetch('/grumio/submit', {
          method: 'POST',
          body: formData,
        })
     
        // Handle response if necessary
        const data = await response.json()
        .then(response => {
          return response
        })
        .then(data => {
            console.log(data)
            setValue(data)
            //testbool = data
        })
      }
      
      return (
        <body>
            <h1>Login to Grumio's List</h1>
            <form onSubmit={onSubmit}>
                <label >Username or Email:</label>
                <input type="text" id="username" name="username" required></input>
                <label >Password:</label>
                <input type="password" id="password" name="password" required></input>

                <input type="submit" value="Login"></input>
            </form>
            
            <p>username correct: {String(value)}</p>
            
            <p>If you don't have an account, <a href="signup.html">sign up here</a>.</p>
        </body>
      )
}