import React from 'react';
import './project.css';

// color pallte: https://colorhunt.co/palette/4793afffc470dd57468b322c
function Project() {
    return (
        <div className = 'project'>
            <h1 id='title2'>Projects</h1>
            <div className = 'column1'>

                <div id='c1'>
                    <h1>Protivity</h1>
                    <p>Protivity, our productivity-boosting website, targets both students and professionals alike. It simplifies task management by enabling users to effortlessly craft personalized lists with essential details such as subject, description, and due date. Leveraging visual aids such as bar and pie graphs, Protivity facilitates better time management, acknowledging that 65% of individuals learn best through visuals. Furthermore, it offers flexibility with two distinct task list views: a conventional column layout and an interactive flash card method. With Protivity, efficiency isn't just a goal; it's the cornerstone of the user experience.</p>
                    <div>
                        <a>Github Link</a>
                    </div>
                 
                </div>

                <div id='c2'>
                    <h1>CCC Problem Solutions</h1>
                    <p>In my project, I focus on solving a variety of Canadian Computing Competition (CCC) problems, ranging from Level S1 to S3 difficulty. I meticulously analyze each problem, employing effective problem-solving strategies and coding techniques to develop comprehensive solutions. By tackling challenges of increasing complexity, I demonstrate proficiency in algorithmic thinking and programming across different difficulty levels. The project serves as a valuable resource for fellow programmers, providing detailed explanations and optimized code implementations for each problem. Through this endeavor, I aim to sharpen my skills, contribute to the programming community, and foster a culture of learning and innovation.</p>
                    <div>
                        <a>Github Link</a>
                    </div>
                </div>

                <div className = 'column2'>
                    <div id='c3'></div>
                    <div if='c4'></div>

                </div>
            </div>


        </div>
    );
}

export default Project;