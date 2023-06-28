import React from 'react';
import { PacmanLoader} from 'react-spinners';
import {
  Navbar,
  Header,
  Footer,
  Project
} from './components';

import { 
  Container,
  Typography, 
  createTheme
} from '@material-ui/core';


const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#00796b',
      },
      secondary: {
        main: '#00838f',
      },
    },
  }
);

const App =() => {
  return (
    <div className="App">
      <Navbar></Navbar>

    </div>
  );
}

export default App;
