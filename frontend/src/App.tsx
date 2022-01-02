import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import '@fontsource/roboto-mono/400.css';
import '@fontsource/roboto-mono/600.css';
import '@fontsource/caveat/700.css';
import { RecoilRoot } from 'recoil';
import AuthContext from './context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import GiraffeToolsRoutes from './apps/GiraffeTools';

function App() {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <AuthContext>
          <Router>
            <AppRoutes />
            <GiraffeToolsRoutes />
          </Router>
        </AuthContext>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default App;
