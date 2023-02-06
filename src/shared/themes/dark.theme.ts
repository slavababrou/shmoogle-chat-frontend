import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  svg: {
    fillColor: 'rgba(255,255,255,0.87)',
  },
  block: {
    shadowColor: 'rgb(255 255 255 / 12%)',
    background: '#202124',
    secondaryBackground: '#5f6368',
  },
  button: {
    hoverColor: 'rgba(26,115,232,0.102)',
    textColor: '#8ab4f8',
    outlineColor: '#5f6368',
  },
  text: {
    primaryColor: 'white',
    secondaryColor: '#5f6368',
  },
  menu: {
    color: 'rgb(232,234,237)',
  },
  tooltip: {
    background: 'rgba(75, 75, 75, 0.9)',
    textColor: '#fff',
  },
  textarea: {
    background: 'rgb(82 83 86)',
    placeholderColor: 'rgb(232,234,237)',
    shadowColor: '65, 69, 73',
    borderColor: '#060606',
  },
  activeChatListItemBackgroundColor: '#313235',
  activeChatPageOptionColor: 'blue',
  hoverColor: 'rgba(232,234,237,.08)',
};
