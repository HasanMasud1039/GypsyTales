import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import photo1 from '../../assets/t1.png'
import photo2 from '../../assets/t2.png'
import photo3 from '../../assets/t3.png'
import photo4 from '../../assets/t4.png'
import backgroundImage from '../../assets/bg/w33.jpg'
import { FaPlayCircle, FaVideo } from 'react-icons/fa';

const Travel = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200
        });
      }, [])
    const divStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative', // Position the pseudo-element relative to the div
    };
    return (
        <div  className='flex justify-between py-12'>
            <div data-aos="flip-right"  style={divStyle} className={`space-y-2   p-8  w-[50%]`}>
                <div>
                    <FaPlayCircle className=' w-16 h-16 text-yellow-500' />
                    <p className='text-white  text-[30px] font-serif font-semibold'>Are You ready To Travel</p>
                    <p className='text-white text-[42px] font-serif font-bold'>GypsyTales is a World Leading Online Tour Booking Platform</p>
                    <button className='btn p-4 btn-warning mt-8  font-bold'>Contact Us</button>
                </div>
            </div>
            <div className='grid grid-cols-2 p-4 w-[40%]'>
                <div className='p-4 rounded-lg border-1 shadow-lg w-44 h-44 text-center flex flex-col items-center justify-center  space-y-2'>
                    <img className='w-14 m-1' src={photo1} alt="photo" />
                    <p className='text-gray-00 font-bold text-lg'>Wildlife Tours</p>
                </div>
                <div className='p-4 rounded-lg border-1 shadow-lg w-44 h-44 text-center flex flex-col items-center justify-center  space-y-2'>
                    <img className='w-14 m-1' src={photo2} alt="photo" />
                    <p className='text-gray-00 font-bold text-lg'>Paragliding Tours</p>
                </div>
                <div className='p-4 rounded-lg border-1 shadow-lg w-44 h-44 text-center flex flex-col items-center justify-center  space-y-2'>
                    <img className='w-14 m-1' src={photo3} alt="photo" />
                    <p className='text-gray-00 font-bold text-lg'>Adventure Tours</p>
                </div>
                <div className='p-4 rounded-lg border-1 shadow-lg w-44 h-44 text-center flex flex-col items-center justify-center  space-y-2'>
                    <img className='w-14 m-1' src={photo4} alt="photo" />
                    <p className='text-gray-00 font-bold text-lg'>Beach Tours</p>
                </div>

            </div>
        </div>
    );
};

export default Travel;