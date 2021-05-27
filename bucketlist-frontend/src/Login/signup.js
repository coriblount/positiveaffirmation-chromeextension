import React from 'react'

const Signup = (props) => {
    
        return(
        <div className="login-wrapper">
        <br></br>
      <br></br>
      <br></br>
      <h3>Create An Account</h3>
      <form onSubmit={props.handleSignup}>
          <p>Username</p>
          <input type="text" />
          <p>Password</p>
      <input type="password" />
        <div>
          <button className="button" type="submit">Submit</button>
        </div>
      </form>
    </div>
      )
}

export default Signup