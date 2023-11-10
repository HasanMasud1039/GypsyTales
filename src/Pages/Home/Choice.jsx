import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCheck, FaDiceFour, FaDiceOne, FaDiceThree, FaDiceTwo } from 'react-icons/fa';
import photo from '../../assets/w1.png'

const Choice = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200
        });
      }, [])
    return (
        <div className='md:flex justify-evenly md:p-12 p-4 gap-12 bg-zinc-50'>
            <div data-aos="fade-left" className='flex flex-col justify-between h-[600px] md:w-[50%] bg-blue-900 border-2 shadow-lg'>
                <div className='md:ps-24 '>
                    <div className=' h-[500px] bg-yellow-200 relative'>
                        <img className='absolute top-[-60px] right-0 w-full h-[560px]' src={photo} alt="" />
                    </div>
                </div>
                <p className='text-2xl text-white font-bold pb-8 pt-4 pl-24'><span className='text-[40px] text-warning font-serif'>10+</span> Years of experience</p>
            </div>
            <div data-aos="fade-right" className='shadow-lg px-8 md:w-[45%]'>
                <div className=' space-y-2 my-8'>
                    <p className='text-center text-blue-800 text-[32px] font-serif font-semibold'>Why Choose Us</p>
                    <p className='text-center text-black text-[48px] font-serif font-bold'>Plan Your Trip <br /> with <span className='text-red-600'>GypsyTales</span></p>
                    <p className='text-normal font-semibold text-slate-400 text-center'>Optimize proactive strategic topic areas  holistically as opposed to producing efficient manufactured goods.</p>
                </div>
                <div className='grid grid-cols-2 gap-4  p-4'>
                    <p className='flex gap-4 text-lg font-semibold font-serif'><FaDiceOne />Travel Plan</p>
                    <p className='flex gap-4 text-lg font-semibold font-serif'><FaDiceTwo />Standard Rates</p>
                    <p className='flex gap-4 text-lg font-semibold font-serif'><FaDiceThree />Hand-picked Tours</p>
                    <p className='flex gap-4 text-lg font-semibold font-serif'><FaDiceFour />Private Guide</p>
                </div>
                <button className='btn p-4 btn-outline my-8 hover:btn-warning'>Contact Us</button>
            </div>
        </div>
    );
};

export default Choice;