import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import SignUp from './pages/SignUp/index'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import PrivateRoute from './components/PrivateRoute'
import axios from './axios.config'

import './App.css';
function App() {
  let [authentication, setAuthentication] = useState(false);
  let [user, setUser] = useState({});

  // useEffect(() => {
  //   axios()
  //     .get('https://fake-api-ahmed.herokuapp.com/v1/auth/info')
  //     .then(setAuthentication(true))
  //     .catch(err => { console.log("Error in useEffect when didmount" + err.message) });
  // }, [authentication]);

  // useEffect(() => {
  //   if (user) {
  //     let { token } = user;
  //     window.localStorage.setItem('token', token);
  //   }
  //   if (!authentication) window.localStorage.removeItem('token');
  // }, [user]);


  return (
    <div className="App">
      <Router>
        <ul style={{ position: 'absolute' }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
        <Switch >
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/signin'>
            <SignIn setAuthentication={setAuthentication} setUser={setUser} />
          </Route>
          <PrivateRoute authentication={authentication} redirectTo='signin' exact path={'/'}>
            <Home setAuthentication={setAuthentication} />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
