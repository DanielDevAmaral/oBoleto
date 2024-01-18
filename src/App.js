import React from 'react';
import Navbar from './components/Navbar';
import CardNews from './components/CardNews';
import leanNews from './components/images/hero.jpg'

function App() {


  return (
  <>
    <Navbar />
    <CardNews headline="Projeto lean decola" text="projeto manda milhares the base"  logo={leanNews} logodes="foto aleatoria"/>
  </>
   
  );
}

export default App;