import { Routes, Route, Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import About from './About';
import WordTool from './WordTool';
import { Box } from '@chakra-ui/react';

interface Props {}

const GiraffeToolsRoutes = (props: Props) => {
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
        <Route path='word-tool' element={<WordTool />} />
      </Route>
    </Routes>
  );
};

export default GiraffeToolsRoutes;
