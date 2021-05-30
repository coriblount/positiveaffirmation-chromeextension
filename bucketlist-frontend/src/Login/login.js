import React from 'react'
import { useHistory } from 'react-router-dom'



const Login = (props) => {
const history = useHistory()
    return(
        <form onSubmit={(e) => props.handleLogin(e, history)}  >
            <label> Username: </label>
            <input type="text" onChange={console.log()}/>
            <br></br>
            <label>Password: </label>
            <input type="password" onChange={console.log()}/>
            <br></br>
            <input type="submit"/>
        </form>
    )
}

export default Login