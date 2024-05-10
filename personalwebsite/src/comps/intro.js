import PXL_20230731_183533541 from './PXL_20230731_183533541.jpg';
import React from 'react';
import { motion, useScroll } from 'framer-motion';
import './intro.css';


function Intro() {


  return (
    <div className="off_Intro" >

      <motion.div className='name'
        animate = {{scale: 2}}
        transition={{ stiffness: 100, duration: 1, delay: 0.6}}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, delay: 2, duration: 6}}
      >
        <div id='one'>This is</div>
        <div id='two'>Jashan Singh.</div>

      </motion.div>


      <motion.h1 className = "title3"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, delay: 2, duration: 6}}
      >About Him</motion.h1>  

      <motion.div className='intro'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, delay: 2, duration: 6}}
      >
        <div id='one1'>
          <div>Jashan is a curious and motivated individual who has developed programming skills as a result of his childhood love for Lego building. With a sharp attention to detail and a natural talent for problem-solving, he has expertly transformed simple bricks into intricate structures, applying coding principles to bring his creations to life. Jashan's journey into programming began when his father enrolled him in a web development course. What started as a simple step soon turned into an exhilarating adventure, as he discovered the endless possibilities that coding could unlock. Jashan's exploration continued to include the dynamic languages of Python and JavaScript. With each line of code, he found the artistry in simplicity, the logic in complexity, and the limitless potential of React's component-based architecture. Join him on this captivating journey, where every click and scroll reveals a story of growth, mastery, and the boundless horizons of programming.</div>

          <div id="links">
            <motion.a href='https://www.linkedin.com/in/jashan-singh-48b9592a0/' target = "_blank"
            whileHover = {{scale: 0.9}}

            >Linked In</motion.a>
            <motion.a href = 'https://github.com/fullstakdeveloper' target = '_blank'
            
            whileHover = {{scale: 0.9}}
            >Github</motion.a>
          </div>

        </div>

        <div id='two1'><img src={PXL_20230731_183533541}></img></div>


        
      </motion.div>

    </div>
  );
}

export default Intro;
