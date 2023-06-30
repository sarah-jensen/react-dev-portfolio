import React from "react";

import { Navbar, Footer, Portfolio } from "./components";

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
        background:"linear-gradient( #f2f3ae, #e9d8a6)"
      }}>
        <Navbar />
        <Portfolio />
        <Footer />
      </Container>
    </div>
  );
};

export default App;
