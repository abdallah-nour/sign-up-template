import { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import SignUp from './pages/SignUp/index'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import PrivateRoute from './components/PrivateRoute'
// import axios from './axios.config'

import './App.css';
class App extends Component {
  // let [authentication, setAuthentication] = useState(false);
  // useEffect(() => {
  //   axios()
  //     .get('https://fake-api-ahmed.herokuapp.com/v1/auth/info')
  //     .then(setAuthentication(true))
  //     .catch(err => { console.log("Error in useEffect when didmount" + err.message) });
  // }, []);
  // console.log(window.location);
  state = {
    authentication: false,
  }
  // componentDidMount = () => {
  //   axios()
  //     .get('/v1/auth/info')
  //     .then((res) => { let user = res.data; this.setAuthentication(true, user); })
  //     .catch(err => { console.log(err.message) });
  // }
  setAuthentication = (value, user) => {
    this.setState({ authentication: value });
    if (user) {
      let { token } = user;
      window.localStorage.setItem('token', token);
    }
    if (!value) window.localStorage.removeItem('token');
  }

  render() {
    let { authentication } = this.state;
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
              <SignIn setAuthentication={this.setAuthentication} />
            </Route>
            <PrivateRoute authentication={authentication} redirectTo='signin' exact path={'/'}>
              <Home setAuthentication={this.setAuthentication} />
            </PrivateRoute>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
