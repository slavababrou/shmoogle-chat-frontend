import { GlobalStyle } from '../src/globalStyle';

export const withGlobalStyle = (Story) => (
  <>
    <GlobalStyle />
    <Story />
  </>
);
