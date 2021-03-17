// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({ onSubmitUsername }) {
    // 🐨 add a submit event handler here (`handleSubmit`).
    // 💰 Make sure to accept the `event` as an argument and call
    // `event.preventDefault()` to prevent the default behavior of form submit
    // events (which refreshes the page).
    //
    // 🐨 get the value from the username input (using whichever method
    // you prefer from the options mentioned in the instructions)
    // 💰 For example: event.target.elements[0].value
    // 🐨 Call `onSubmitUsername` with the value of the input

    // 🐨 add the onSubmit handler to the <form> below

    // 🐨 make sure to associate the label to the input.
    // to do so, set the value of 'htmlFor' prop of the label to the id of input



    const usernameEl = React.userRef()

    const [msg, setMsg] = React.userState('')
    const [username, setUsername] = React.useState('')
    
    
    
    
    function handleSubmit(event) {
        event.preventDefault()
        const username = usernameEl.current.value
        onSubmitUsername(username)
    }

    function handleChange(event){
        const val = event.target.value


        setUsername(val.toLowerCase())
        //const isValid = (val === val.toLowerCase())
        //etMsg(isValid ? '' : ' O valor informado deve estar em minusculas')
    }
    
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input ref={usernameEl} id="username" type="text" onChange={handleChange} value ={username}/>
            </div>
            <div style={{ color: 'red'}}>{msg}</div>
            <button type="submit">Submit</button>
        </form>
    )
}

function App() {
    const onSubmitUsername = username => alert(`You entered: ${username}`)
    return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
