import '@fontsource/roboto-mono/400.css';
import '@fontsource/roboto-mono/600.css';
import '@fontsource/caveat/700.css';
import { AuthContextProvider } from './context/AuthContext';
import { ThemeModeContextProvider } from './context/ThemeModeContext';
import { BrowserRouter as Router } from 'react-router-dom';
import MainSiteApp from './apps/MainSite';
import GiraffeToolsApp from './apps/GiraffeTools';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeModeContextProvider>
        <AuthContextProvider>
          <Router>
            <MainSiteApp />
            <GiraffeToolsApp />
          </Router>
        </AuthContextProvider>
      </ThemeModeContextProvider>
    </>
  );
}

export default App;
