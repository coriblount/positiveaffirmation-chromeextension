import React from 'react'



const Login = (props) => {

    return(
        <form onSubmit={props.handleLogin}>
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