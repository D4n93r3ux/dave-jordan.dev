import { Routes, Route, Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import About from './About';
import WordTool from './GiraffeApp';
import { Box } from '@chakra-ui/react';

interface Props {}

const GiraffeAppRoutes = (props: Props) => {
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

export default GiraffeAppRoutes;
