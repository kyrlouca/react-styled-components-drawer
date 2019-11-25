import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import styled, { ThemeProvider as ThemeProvider2 } from 'styled-components';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

import GridPage from './layout/GridPage';
import MenuPage from './layout/MenuPage';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: red,
    error: red
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ThemeProvider2 theme={theme}>
        <MenuPage />
      </ThemeProvider2>
    </ThemeProvider>
  );
};

export default App;
