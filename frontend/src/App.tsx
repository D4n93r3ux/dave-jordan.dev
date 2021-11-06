import AuthContext from './context/AuthContext';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <AuthContext>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <RestrictedRoute exact path='/register'>
            <Register />
          </RestrictedRoute>
          <RestrictedRoute exact path='/login'>
            <Login />
          </RestrictedRoute>
          <PrivateRoute exact path='/dashboard'>
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthContext>
  );
}

export default App;
