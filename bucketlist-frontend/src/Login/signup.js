import React from 'react'

class Signup extends React.Component {
    render(){
        return(
     <div className="login-wrapper">
     <br></br>
      <br></br>
      <br></br>
      <button>Sign Up</button>
      <form onSubmit={this.props.handleLogin}>
          <p>Name</p>
      <input type="text" onChange={console.log()} />
          <p>Email</p>
      <input type="text" onChange={console.log()} />
          <p>Username</p>
          <input type="text" onChange={console.log()} />
          <p>Password</p>
      <input type="password" onChange={console.log()} />
        <div>
          <button className="button" type="submit">Submit</button>
        </div>
      </form>
    </div>
        )
    }
}

export default Signup