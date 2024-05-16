import React from 'react';
import './project.css';
import { motion, useScroll} from 'framer-motion';

// color pallte: https://colorhunt.co/palette/4793afffc470dd57468b322c
function Project() {
    return (
        <div className = 'project'>
            <motion.h1 
            id='title2'
            initial = {{opacity: 0}}
            whileInView = {{opacity: 1, delay: 2, duration: 5}}
            
            >Projects</motion.h1>

            <div className = 'column1'>

                <motion.div id='c1'
                initial = {{opacity: 0}}
                whileInView = {{opacity: 1, delay: 2, duration: 5}}
                >
                    <h1>Protivity</h1>
                    <p>Protivity, our productivity-boosting website, targets both students and professionals alike. It simplifies task management by enabling users to effortlessly craft personalized lists with essential details such as subject, description, and due date. Leveraging visual aids such as bar and pie graphs, Protivity facilitates better time management, acknowledging that 65% of individuals learn best through visuals. Furthermore, it offers flexibility with two distinct task list views: a conventional column layout and an interactive flash card method. With Protivity, efficiency isn't just a goal; it's the cornerstone of the user experience.</p>
                    <motion.div
                    whileHover = {{scale: 0.9}}
                    >
                        <a href = "https://github.com/sebandx/Protivity"
                        target = "_blank"
                        >Github Link</a>
                    </motion.div>
                 
                </motion.div>

                <motion.div id='c2'
                initial = {{opacity: 0}}
                whileInView = {{opacity: 1, delay: 2, duration: 5}}
                >
                    <h1>CCC Problem Solutions</h1>
                    <p>In my project, I focus on solving a variety of Canadian Computing Competition (CCC) problems, ranging from Level S1 to S3 difficulty. I meticulously analyze each problem, employing effective problem-solving strategies and coding techniques to develop comprehensive solutions. By tackling challenges of increasing complexity, I demonstrate proficiency in algorithmic thinking and programming across different difficulty levels. The project serves as a valuable resource for fellow programmers, providing detailed explanations and optimized code implementations for each problem. Through this endeavor, I aim to sharpen my skills, contribute to the programming community, and foster a culture of learning and innovation.</p>
                    <motion.div
                    whileHover = {{scale: 0.9}}
                    >
                        <a
                        href = "https://github.com/BerryMachine/Senior-CCC-Python"
                        target = "_blank"
                        >Github Link</a>
                    </motion.div>
                </motion.div>
        
            </div>


        </div>
    );
}

export default Project;