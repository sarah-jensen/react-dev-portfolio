import { React, useState } from 'react';

import { AboutMe, Contact, Footer, Navbar, Portfolio, Resume } from './components';

import { Container } from '@material-ui/core';

import './utils/styles/styles.css'; //import CSS file

const App = () => {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
    };
  

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
     
    }}>
      <Container
        className='App'
        maxWidth
      >
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      
      {renderPage()}
        <Footer/>
      </Container>
    </div>
  );
};

export default App;
