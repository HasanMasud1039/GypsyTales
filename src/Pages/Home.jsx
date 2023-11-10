import React from 'react';
import Banner from './Home/Banner';
import Category from './Home/Category';
import Choice from './Home/Choice';
import Destination from './Home/Destination';
import Featured from './Home/Featured';
import Reason from './Home/Reason';
import Testimonial from './Home/Testimonial';
import Travel from './Home/Travel';
import Partners from './Home/Partners';
import Updates from './Home/Updates';
import Gallery from './Home/Gallery';

const Home = () => {
    return (
        <div className='space-y-2'>
            <Banner/>
            <Category/>
            <Choice/>
            <Destination/>
            <Featured/>
            <Reason/>
            <Testimonial/>
            <Travel/>
            <Partners/>
            <Updates/>
            <Gallery/>
        </div>
    );
};

export default Home;