import { ThemeProvider } from 'styled-components';
import { themes } from '../src/shared/themes';

export const withTheme = (Story, context) => {
  const { theme } = context.globals;
  return (
    <ThemeProvider theme={themes[theme] || themes.light}>
      <Story />
    </ThemeProvider>
  );
};
