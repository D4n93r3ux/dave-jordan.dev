import { addDecorator } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';

// This decorator, in combination with the alias in main.js,
// resolves an issue between chakra-ui, Emotion 11 and Storybook.
addDecorator(story => <ChakraProvider>{story()}</ChakraProvider>);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
