import React from "react";

import { Navbar, Footer, Portfolio, AboutMe } from "./components";
import Background from "./assets/images/background.jpg"
import { Container } from "@material-ui/core";

const App = () => {
  return (
    <div className="App">
      <Container
      // maxWidth="xs"
      mx={0}
      my={0}
      px={0}
      py={0}
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100vw',
        minHeight: '100vh',
      }}>
        <Navbar />
        <AboutMe/>
        <Portfolio />
        <Footer />
      </Container>
    </div>
  );
};

export default App;
