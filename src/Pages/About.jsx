import React from 'react';
import About_Details from './About/About_Details';
import Features_About from './About/Features_About';
import Team from './About/Team';
import Testimonials_About from './About/Testimonials_About';
import Partners_About from './About/Partners_About';

const About = () => {
    return (
        <div>
            <About_Details/>
            <Features_About/>
            <Team/>
            <Testimonials_About/>
            <Partners_About/>
        </div>
    );
};

export default About;