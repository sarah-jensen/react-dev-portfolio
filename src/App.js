import React from 'react';

import {
  Navbar,
  Footer,
  Project,

} from './components';

import {
  Container,
  Typography, 
 
} from '@material-ui/core';


const App =() => {
  return (
    <div className="App">
      
        <Navbar/>
        <Footer/>
       
    </div>
  );
}

export default App;
