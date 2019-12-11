import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import styled, { ThemeProvider as ThemeProvider2 } from 'styled-components';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

import GridPage from './layout/GridPage';


const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: blue,
    error: red
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ThemeProvider2 theme={theme}>
        <GridPage />
      </ThemeProvider2>
    </ThemeProvider>
  );
};

export default App;
