
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login/login'
import Signup from './Login/signup'



handleCreate = (e) => {
e.preventDefault()
console.log('clicked')
}

handleLogout = (e) => {
  e.preventDefault()
  // localStorage.removeItem("user");
  window.location.href = "/login";
  }

  
function App() {
  return (
    <div className="App">
        <button className="button"><a id="link" href='./dashboard'><h3>Dashboard</h3></a></button>
        <br></br>
      <BrowserRouter>
          <Switch>
            <Route>
              <Login/>
            </Route>
          <Route path="/signup">
              <Signup handleCreate={this.handleCreate}/>
            </Route>
          </Switch>
          <br></br>
          <br></br>
          <button onClick={this.handleLogout} className="button"><a id="link" href='/'><h3>Log out</h3></a></button>
          </BrowserRouter>
    </div>
  );
}

export default App;
