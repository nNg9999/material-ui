import { createAction } from '@reduxjs/toolkit';

const toggleTheme = createAction('theme/toggleTheme', (theme, isChecked) => ({
  payload: {
    theme: {
      isChecked: isChecked,
      themeConfig: theme.themeConfig,
    }
  }
}));

export default {
  toggleTheme,
};
