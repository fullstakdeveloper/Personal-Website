import './App.css';
import PXL_20230731_183533541 from './PXL_20230731_183533541.jpg';
import React from 'react';
import { motion } from 'framer-motion';
import Project from './comps/project';


function App() {

  const intro_text = "Jashan is a curious and motivated individual who has developed programming skills as a result of his childhood love for Lego building. With a sharp attention to detail and a natural talent for problem-solving, he has expertly transformed simple bricks into intricate structures, applying coding principles to bring his creations to life. Jashan's journey into programming began when his father enrolled him in a web development course. What started as a simple step soon turned into an exhilarating adventure, as he discovered the endless possibilities that coding could unlock. Jashan's exploration continued to include the dynamic languages of Python and JavaScript. With each line of code, he found the artistry in simplicity, the logic in complexity, and the limitless potential of React's component-based architecture. Join him on this captivating journey, where every click and scroll reveals a story of growth, mastery, and the boundless horizons of programming prowess."

  return (
    <div className="App" >

      <motion.div className='name'
        animate = {{scale: 2, y: 25}}
        transition={{ type: "spring", stiffness: 100, duration: 2, delay: 0.6}}
      >
        <div id='one'>
          This is
        </div>

        <motion.div id='two'>Jashan Singh.</motion.div>
      </motion.div>

      <div className='intro'>
        <div id='one1'>
          <div>{intro_text}</div>

          <div id="links">
            <a href='https://www.linkedin.com/in/jashan-singh-48b9592a0/' target = "_blank">Linked In</a>
            <a href = 'https://github.com/fullstakdeveloper' target = '_blank'>Github</a>
          </div>

        </div>

        <div id='two1'><img src={PXL_20230731_183533541}></img></div>
      </div>


    </div>
  );
}

export default App;
