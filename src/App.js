import './App.css';
import React from 'react';
import {Home} from './componets/Home.js';
import { Reasons } from './componets/Reasons';
import { Articles } from './componets/Articles';
import { Footer } from './componets/Footer';

function App() {
  return (
    <>
      <Home/>
      <Reasons/>
      <Articles/>
      <Footer/>
    </>
  );
}

export default App;
