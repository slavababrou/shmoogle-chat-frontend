import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { themes } from 'shared/themes';
import { DefaultTheme } from 'styled-components';

interface ThemeState {
  theme: DefaultTheme;
}

const initialState: ThemeState = {
  theme: themes.light,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<string>) {
      const theme = themes[action.payload];
      if (theme) {
        state.theme = theme;
      }
    },
  },
});

export default themeSlice.reducer;
export const themeActions = themeSlice.actions;
