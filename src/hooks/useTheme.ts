import {useColorScheme} from 'react-native';
import color from '../theme/color';

const useTheme = () => {
  const theme = useColorScheme();

  //   const appTheme = theme === 'dark' ? color.DARK_THEME : color.DEFAULT_THEME;

  const appTheme = {
    dark: theme === 'dark',
    colors: {
      ...color.DARK_THEME,
    },
  };
  return {
    appTheme,
  };
};

export default useTheme;
