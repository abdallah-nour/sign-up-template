import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import SignUp from './pages/SignUp/index'
import SignIn from './pages/SignIn'
function App() {
  console.log(window.location.pathname);
  return (
    <div className="App">
      <Router>
        <Switch >
          <Route exact path={'/'}>
            <SignIn></SignIn>
          </Route>
          <Route path='/signup'>
            <SignUp></SignUp>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
