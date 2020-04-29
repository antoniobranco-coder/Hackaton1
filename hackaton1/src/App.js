import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Cathegories from './components/cathegories';

function App() {
  return (
    <div className="App">
      <Homepage />
      <Cathegories />
      <Footer />
    </div>
  );
}

export default App;
