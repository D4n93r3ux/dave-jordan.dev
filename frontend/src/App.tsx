import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import '@fontsource/roboto-mono/200.css';
import { RecoilRoot } from 'recoil';
import AuthContext from './context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import GiraffeToolsRoutes from './components/GiraffeTools/GiraffeToolsRoutes';

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
