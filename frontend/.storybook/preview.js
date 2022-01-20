import { addDecorator } from '@storybook/react';
import '@fontsource/roboto-mono';
import '@fontsource/caveat';
import { ThemeProvider } from '@mui/material/styles';
import giraffeTheme from '../src/apps/GiraffeTools/theme';
import { CssBaseline } from '@mui/material';

console.log(giraffeTheme);

addDecorator(story => (
  <>
    <CssBaseline />
    <ThemeProvider theme={giraffeTheme}>{story()}</ThemeProvider>
  </>
));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  options: {
    storySort: {
      order: [
        'Giraffe Tools',
        ['Atoms', 'Molecules', 'Organisms', 'Templates', 'Pages']
      ]
    }
  }
};
