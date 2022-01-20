import GiraffeToolsRoutes from './GiraffeToolsRoutes';
import { useThemeModeContext } from '../../context/ThemeModeContext';
import { ThemeProvider } from '@mui/material/styles';
import themes from './themes';

interface Props {}

const GiraffeToolsApp = (props: Props) => {
  const { darkMode } = useThemeModeContext();

  return (
    <ThemeProvider theme={darkMode ? themes.darkTheme : themes.lightTheme}>
      <GiraffeToolsRoutes />
    </ThemeProvider>
  );
};

export default GiraffeToolsApp;
