import React from 'react';
import './exp.css';
import { motion, useScroll} from 'framer-motion';

function Exp() {
    return (
        <div className = 'exp'>
            <h1 className = "title4">Experiences</h1>

            <motion.div className = "box1"
            initial = {{opacity: 0}}
            whileInView = {{opacity: 1, delay: 2, duration: 6}}
            >
                <h1>Jamhacks 6</h1>
                <p>Participating in JamHacks 6 was a pivotal experience in my coding journey, providing valuable lessons and skill development. Collaborating with diverse teams under tight deadlines honed my teamwork, communication, and adaptability. I gained hands-on experience in coding, debugging, and rapid prototyping, deepening my technical proficiency. Presenting our project enhanced my communication skills and ability to articulate ideas effectively. Overall, JamHacks 6 was a transformative experience, equipping me with the skills and confidence to thrive in dynamic tech environments.</p>
            </motion.div>


            <motion.div className = 'box2'
            initial = {{opacity: 0}}
            whileInView = {{opacity: 1, delay: 2, duration: 6}}
            >
                <h1>Clock Hacks 2</h1>
                <p>Clocks Hacks 2 was a memorable experience that enriched my coding journey. The unique aspect of sleeping over at a friend's house during the hackathon added camaraderie and fun to the event. Collaborating with diverse teams under tight deadlines honed my teamwork, communication, and adaptability skills. I gained hands-on experience in coding, debugging, and rapid prototyping, while presenting our project enhanced my communication skills. Overall, Clocks Hacks 2 provided valuable technical learning and unforgettable camaraderie, reinforcing my passion for technology and innovation.</p>

            </motion.div>
        </div>
    );
}

export default Exp;