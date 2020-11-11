import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({ children, authentication, redirectTo, ...props }) {
  return <Route {...props}>
    {authentication ? children : <Redirect to={'/' + redirectTo} />}
  </Route>
}