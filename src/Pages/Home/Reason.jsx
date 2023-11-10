import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import tour1 from '../../assets/ship.jpg'
import tour2 from '../../assets/trip.jpg'
import tour3 from '../../assets/tour.jpg'
import tour4 from '../../assets/tour2.jpg'


const Reason = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200
        });
      }, [])
    return (
        <div className='flex gap-4 py-12 px-12'>
            <div  data-aos="fade-down" className=' py-8  w-[45%]'>
                <div className=' space-y-2 my-8'>
                    <p className='text-blue-800 text-[32px] font-serif font-semibold'>Why We Are The Best</p>
                    <p className='text-black text-[48px] font-serif font-bold'>Keep Things Flexible</p>
                    <button className='btn p-4 btn-outline mt-8 hover:btn-warning'>Contact Us</button>
                </div>
                <div className='grid grid-cols-2 gap-4  py-4'>
                    <div>
                        <div className='relative btn btn-warning w-12 rounded-full'>
                            <p className='left-2 text-3xl font-semibold font-serif absolute'>100+ </p>
                        </div>
                        <br /><span className='text-lg text-slate-600 font-semibold'>Total Destinations</span>
                    </div>
                    <div>
                        <div className='relative btn btn-warning w-12 rounded-full'>
                            <p className='left-2 text-3xl font-semibold font-serif absolute'>10K+ </p>
                        </div>
                        <br /><span className='text-lg text-slate-600 font-semibold'>Total Reviews</span>
                    </div>
                    <div>
                        <div className='relative btn btn-warning w-12 rounded-full'>
                            <p className='left-2 text-3xl font-semibold font-serif absolute'>800+ </p>
                        </div>
                        <br /><span className='text-lg text-slate-600 font-semibold'>Travel Packages</span>
                    </div>
                    <div>
                        <div className='relative btn btn-warning w-12 rounded-full'>
                            <p className='left-2 text-3xl font-semibold font-serif absolute'>9K+ </p>
                        </div>
                        <br /><span className='text-lg text-slate-600 font-semibold'>Positive Reviews</span>
                    </div>

                </div>
            </div>
            <div className=' w-[50%]'>
                <div className='relative flex'>
                    <img  data-aos="zoom-in"  className='w-[350px] m-4 border-2 ms-0 border-red-500 saturate-200 contrast-125' src={tour1} alt="" />
                    <img data-aos="zoom-out" className='w-[350px] mt-24 border-2 border-red-500 absolute right-[40px] top-[-40px]' src={tour2} alt="" />
                </div>
                <div className='relative flex'>
                    <img data-aos="slide-right" className='w-[350px] m-4 border-2 border-red-500 saturate-150 contrast-125' src={tour3} alt="" />
                    <img data-aos="slide-left" className='w-[350px] m-4 border-2 shadow-xl border-red-500 brightness-150 contrast-105 absolute right-[40px] top-[-20px]' src={tour4} alt="" />
                </div>


            </div>
            <div>

            </div>
        </div>
    );
};

export default Reason;