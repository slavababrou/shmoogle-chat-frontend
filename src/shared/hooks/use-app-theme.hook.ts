import { useEffect } from 'react';

import { THEME_TOKEN } from 'core/constants/tokens';
import { themeActions } from 'shared/store/reducers/theme.slice';
import { themes } from 'shared/themes';
import { useAppDispatch } from './app-dispatch.hook';
import { useAppSelector } from './app-selector.hook';

export const useAppTheme = () => {
  const { theme } = useAppSelector((state) => state.themeReducer);
  const dispatch = useAppDispatch();
  const { setTheme } = themeActions;

  const setCurrentTheme = (name: string) => {
    if (themes[name]) {
      localStorage.setItem(THEME_TOKEN, name);
      dispatch(setTheme(name));
    }
  };

  useEffect(() => {
    const themeName = localStorage.getItem(THEME_TOKEN);
    if (!themeName || !themes[themeName]) {
      const defaultThemeName = Object.keys(themes)[0];
      localStorage.setItem(THEME_TOKEN, defaultThemeName);
      setCurrentTheme(defaultThemeName);
    } else {
      setCurrentTheme(themeName);
    }
  }, []);

  return [theme, setCurrentTheme] as const;
};
