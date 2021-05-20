import React from 'react'

const Login = () => {
    return(
        <form>
            <label> Username: </label>
            <input type="text"/>
            <br></br>
            <label>Password: </label>
            <input type="password"/>
            <br></br>
            <input type="submit"/>
        </form>
    )
}

export default Login