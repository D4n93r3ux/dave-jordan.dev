import '@fontsource/roboto-mono/400.css';
import '@fontsource/roboto-mono/600.css';
import '@fontsource/caveat/700.css';
import AuthContext from './context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import GiraffeToolsRoutes from './apps/GiraffeTools';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <AuthContext>
        <Router>
          <AppRoutes />
          <GiraffeToolsRoutes />
        </Router>
      </AuthContext>
    </>
  );
}

export default App;
