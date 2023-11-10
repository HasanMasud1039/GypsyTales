import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../../assets/bg/m1.jpg'
import img2 from '../../assets/bg/m3.jpeg'
import img3 from '../../assets/bg/m21.jpg'
import img4 from '../../assets/spots/ctg.jpeg'
import img5 from '../../assets/spots/chit.jpg'
import img6 from '../../assets/spots/lal.jpg'
import img7 from '../../assets/spots/sund.jpg'


const Gallery = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200
        });
      }, [])
    return (
        <div>
            <hr />
            <div data-aos="fade-up" className='md:flex justify-between grid grid-cols-3 gap-4 p-8'>
                <img className='w-40 h-40' src={img1} alt="" />
                <img className='w-40 h-40' src={img2} alt="" />
                <img className='w-40 h-40' src={img3} alt="" />
                <img className='w-40 h-40' src={img4} alt="" />
                <img className='w-40 h-40' src={img5} alt="" />
                <img className='w-40 h-40' src={img6} alt="" />
                <img className='w-40 h-40 md:block hidden' src={img7} alt="" />
            </div>
        </div>
    );
};

export default Gallery;