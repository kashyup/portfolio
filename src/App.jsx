import React from 'react';
import { Accordion } from './components/Accordion';
import { useTypewriter } from './hooks/useTypewriter';
import './App.css';

const App = () => {
    const typewriterRef = useTypewriter(" Hi, I am Rohit Kashyap, a Front End Developer from Himachal Pradesh, India", 100);

    return (
        <div className="App">
            <div className="text-1">
                <h1 className="term">portfolio</h1>
            </div>
            <div className="text-3" ref={typewriterRef}>
                <p className="typewriter-phone">
                    Hi, I am Rohit Kashyap, a Front End Developer from Himachal Pradesh, India.
                </p>
                <p className="typewriter">
                Hi, I am Rohit Kashyap, a Front End Developer from Himachal Pradesh, India.
                </p>
            </div>
            <ul className="accordion">
                <Accordion title="Social">
                    {/* Social Links */}
                </Accordion>
                <Accordion title="Projects">
                    {/* Project Links */}
                </Accordion>
                <Accordion title="About me">
                    {/* About me Content */}
                </Accordion>
            </ul>
        </div>
    );
};

export default App;
