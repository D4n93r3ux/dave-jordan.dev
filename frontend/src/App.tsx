import AuthContext from './context/AuthContext';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PrivateRoutes from './components/PrivateRoutes';
import RestrictedRoutes from './components/RestrictedRoutes';
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
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<RestrictedRoutes />}>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </AuthContext>
  );
}

export default App;
