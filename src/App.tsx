import React from 'react';

import styled, { ThemeProvider as ThemeProvider2 } from 'styled-components';
import GridPage from './layout/GridPage';


const theme = {
  palette: {
    primary: "purple", 
    secondary: "blue",
    error: "red"
  }
};

const App = () => {
  return (
      <ThemeProvider2 theme={theme}>
        <GridPage />
      </ThemeProvider2>
  );
};

export default App;
