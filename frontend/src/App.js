import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './componenets/Footer';
import Header from './componenets/Header';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>ProShop </h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
