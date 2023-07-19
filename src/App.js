import React from 'react';

import { Footer, PageContainer } from './components';

import { Container } from '@material-ui/core';

import './utils/styles/styles.css'; //import CSS file

const App = () => {
  return (
    <div>
      <Container
        className='App'
        maxWidth
        justify='center'
      >
        <PageContainer />
      </Container>
    </div>
  );
};

export default App;
