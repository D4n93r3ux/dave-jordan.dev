import { Routes, Route, Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './components/About';
import WordTool from './components/WordTool';
import { Box } from '@mui/material';

const GiraffeToolsRoutes = () => {
  return (
    <Routes>
      <Route
        path='/giraffe-tools'
        element={
          <Box maxWidth='1000px' margin='auto'>
            <Navigation />
            <Outlet />
          </Box>
        }
      >
        <Route path='' element={<About />} />
      </Route>
      <Route path='/giraffe-tools/word-tool' element={<WordTool />} />
    </Routes>
  );
};

export default GiraffeToolsRoutes;
