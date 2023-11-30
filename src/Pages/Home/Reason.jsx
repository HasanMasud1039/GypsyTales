import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import tour1 from '../../assets/ship.jpg'
import tour2 from '../../assets/trip.jpg'
import tour3 from '../../assets/tour.jpg'
import tour4 from '../../assets/tour2.jpg'
import SectionTitle from '../../Component/SectionTitle';


const Reason = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200
        });
    }, [])
    return (
        <div className='md:flex gap-4 md:py-12  md:my-0 px-12'>
            <div data-aos="fade-down" className=' py-8  md:w-[45%]'>
            <SectionTitle heading={'Keep Things Flexible'} subheading={'Why We Are The Best'} additionalStyle={'text-left'}></SectionTitle>
                {/* <div className='md:text-left text-center space-y-2 my-8'>
                    <p className='text-blue-800 md:text-[32px] text-[24px]  font-serif font-semibold'>Why We Are The Best</p>
                    <p className='text-black dark:text-white md:text-[48px] text-[32px]  font-serif font-bold'>Keep Things Flexible</p>
                </div> */}
                <div className='grid grid-cols-2 gap-4  py-4'>
                    <div>
                        <div className='relative btn btn-warning w-12 rounded-full'>
                            <p className='left-2 text-3xl font-semibold dark:text-white font-serif absolute'>100+ </p>
                        </div>
                        <br /><span className='text-lg text-slate-600 dark:text-slate-300 font-semibold'>Total Destinations</span>
                    </div>
                    <div>
                        <div className='relative btn btn-warning w-12 rounded-full'>
                            <p className='left-2 text-3xl font-semibold dark:text-white font-serif absolute'>10K+ </p>
                        </div>
                        <br /><span className='text-lg text-slate-600 dark:text-slate-300 font-semibold'>Total Reviews</span>
                    </div>
                    <div>
                        <div className='relative btn btn-warning w-12 rounded-full'>
                            <p className='left-2 text-3xl font-semibold dark:text-white font-serif absolute'>800+ </p>
                        </div>
                        <br /><span className='text-lg text-slate-600 dark:text-slate-300 font-semibold'>Travel Packages</span>
                    </div>
                    <div>
                        <div className='relative btn btn-warning w-12 rounded-full'>
                            <p className='left-2 text-3xl font-semibold dark:text-white font-serif absolute'>9K+ </p>
                        </div>
                        <br /><span className='text-lg text-slate-600 dark:text-slate-300 font-semibold'>Positive Reviews</span>
                    </div>

                </div>
            </div>
            <div className='ms-8 md:ms-1 md:mb-0 mb-72 md:w-[50%]'>
                <div className='relative flex'>
                    <img data-aos="zoom-in" className='w-[350px] md:m-4 border-2 md:ms-0 ms-12 border-red-500 saturate-200 contrast-125' src={tour1} alt="" />
                    <img data-aos="zoom-out" className='w-[350px] mt-24 border-2 border-red-500 absolute md:right-[40px] md:top-[-40px] top-0 right-16' src={tour2} alt="" />
                </div>
                <div className='relative flex'>
                    <img data-aos="slide-right" className='w-[350px] md:m-4 ms-8 border-2 border-red-500 saturate-150 md:block hidden contrast-125' src={tour3} alt="" />
                    <img data-aos="slide-left" className='w-[350px] m-4 border-2 shadow-xl border-red-500 brightness-150 contrast-105 absolute md:right-[40px] md:top-[-20px] top-[64px]' src={tour4} alt="" />
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Reason;