import './App.css';
import React from 'react';
import { motion } from 'framer-motion';
import Project from './comps/project';
import Exp from './comps/exp';
import Intro from './comps/intro';


function App() {
  return (
    <div className="App" >
      <Intro/>
      <Project/>
      <Exp/>
    </div>
  );
}

export default App;
