
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login/login'
import Signup from './Login/signup'
import Dashboard from './Dashboard';
import NavBar from './NavBar'
import {Redirect, Link} from 'react-router-dom'
import Trip from './containers/Trip';
import TripForm from './TripForm';

//componentdidmount-- to get userinfo


//handles user login/signup
class App extends React.Component {



state = {
  isLoggedIn: false,
  users : [],
  currentUser: ''

}


getUsers = () => {
  fetch("http://localhost:3000/api/v1/users",{
    method:"GET",
    headers: {
      "Content-Type":"application/json",
      "Accept":"application/json",
      "Authorization": `Bearer ${localStorage.token}`
    }
  })
    .then((res) => res.json())
    .then((userData) => {
      console.log(userData)
    this.setState({
      users: userData
    })
    });
}

handleLogin = (e) => {
e.preventDefault()
let user = {
  username: e.target[0].value,
  password: e.target[1].value
}
let reqPackage = {
  method: 'POST',
	headers:{
	"Content-Type": "application/json",
  "Accept": "application/json",
  "Authorization": `Bearer ${localStorage.token}`
	},
	body: JSON.stringify(user)
}
fetch('http://localhost:3000/api/v1/users', reqPackage)
	.then(res => res.json())
	.then(data=> {
	localStorage.setItem("token", data.jwt)
	this.getUsers()
	this.setState({
	isLoggedIn: true
	})
})
}



handleSignup = (e) => {
e.preventDefault()
console.log("clicked")
let user = {
  username: e.target[0].value,
  password: e.target[1].value
}

let reqPackage = {
  method: 'POST',
	headers:{
	"Content-Type": "application/json",
  "Accept": "application/json",
  "Authorization": `Bearer ${localStorage.token}`
	},
	body: JSON.stringify(user)
}
fetch('http://localhost:3000/api/v1/users', reqPackage)
.then(res => res.json())
.then(user => this.setState({
  ...this.state.users, user
}))
}

handleLogout = (e) => {
  e.preventDefault()
  localStorage.removeItem("user");
  window.location.href = "/login";
  }

deleteUser = (user) => {
fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
  method: 'DELETE',
})
this.setState({
  users:  this.state.users.filter((userObj) => {return userObj !== user})
})
  }

setRedirect = () => {
this.setState({
  redirect: true
})
}

renderRedirect = () => {
  if (this.state.redirect) {
    return <Redirect to='/Dashboard'/>
  }
}

  
render() {
  return (
   
    <div className="App">
      <Router>
      <Link to="/Dashboard">User Dashboard</Link>
        <br></br>
      <NavBar/>
          <Switch>
            <Route exact path='/login'>
              <Login handleLogin={this.handleLogin}/>
            </Route>
          <Route exact path="/signup" component={Signup}>
              <Signup handleSignup={this.handleSignup}/>
            </Route>
            <Route exact path='/dashboard' component={Dashboard}>
              <Dashboard deleteUser={this.deleteUser}/>
            </Route>
            <Route exact path='/trip' component={Trip}>
              <Trip />
            </Route>"
            <Route exact path='/' component={TripForm}>
              <TripForm/>
            </Route>
          </Switch>
          <br></br>
          <br></br>
          <button onClick={this.handleLogout} className="button"><a id="link" href='/'><h3>Log out</h3></a></button>
          </Router>
    </div>
  );

}



}
export default App;