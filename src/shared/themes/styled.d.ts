import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    svg: {
      fillColor: string;
    };
    block: {
      shadowColor: string;
      background: string;
      secondaryBackground: string;
    };
    button: {
      hoverColor: string;
      textColor: string;
      outlineColor: string;
    };
    text: {
      primaryColor: string;
      secondaryColor: string;
    };
    menu: {
      color: string;
    };
    tooltip: {
      background: string;
      textColor: string;
    };
    textarea: {
      placeholderColor: string;
      background: string;
      shadowColor: string;
      borderColor: string;
    };
    activeChatListItemBackgroundColor: string;
    activeChatPageOptionColor: string;
    hoverColor: string;
  }
}
