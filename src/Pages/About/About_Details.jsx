import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import banner from '../../assets/bg/ban.jpg'
import img1 from '../../assets/bg/m1.jpg'
import img2 from '../../assets/bg/m21.jpg'
import { FaCompactDisc, FaPlay } from 'react-icons/fa';

const About_Details = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200
        });
      }, [])
    return (
        <div>
            <div className='relative bg-green-900 w-screen'>
                <img className='h-96 w-full brightness-50' src={banner} alt="" />
                <div className='absolute top-[25%] left-[30%] text-center space-y-16'>
                    <p className='text-[42px] font-bold text-white font-serif'>About </p>
                    <p className='text-[22px] font-bold text-white font-serif'>Home /<span className='text-red-500'>About</span></p>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='flex p-16 ms-12 relative'>
                    <img  className='h-96 w-64 rotate-[-25deg] border-2' src={img1} alt="" />
                    <img className='h-96 w-64 border-2 absolute rotate-[25deg] left-[70%]' src={img2} alt="" />
                    <p className='btn bg-red-600 text-white hover:bg-warning px-6 absolute top-[70%] left-[55%]'><FaPlay /> Watch Video</p>
                </div>
                <div className='w-[50%] px-4'>
                    <div className='py-8 space-y-2'>
                        <p className='text-red-500 text-[26px] font-serif font-semibold flex'>About Us </p><hr />
                        <p className='text-black text-[38px] font-serif font-bold'>Why Select Us For Your Vacation</p>
                    </div>
                    <p className='text-lg p-2 font-serif text-slate-500'>Travelers often choose GypsyTales Travel Agency for their vacation experiences because of its unwavering commitment to creating unforgettable journeys. GypsyTales stands out with its meticulous attention to detail, ensuring that every aspect of the trip is thoughtfully planned and personalized to the traveler's desires. The agency's expertise in curating unique and off-the-beaten-path experiences, combined with its dedication to responsible travel, makes it an ideal choice for those seeking more than just a typical vacation. GypsyTales' team of passionate travel experts goes above and beyond to deliver exceptional service, making every adventure seamless and truly memorable. Whether it's an exotic getaway, a romantic honeymoon, or an adventurous family vacation, GypsyTales Travel Agency consistently exceeds expectations, leaving travelers with cherished memories of their journeys.</p>
                </div>
            </div>
            <hr />
            <div data-aos="fade-left" className='py-12 flex justify-evenly'>
                <p className='text-2xl font-semibold text-slate-500 '><span className='font-serif text-[34px] text-black font-bold'>120+ </span>Total Destination</p>
                <p className='text-2xl font-semibold text-slate-500 '><span className='font-serif text-[34px] text-black font-bold'>700+ </span>Travel Packages</p>
                <p className='text-2xl font-semibold text-slate-500 '><span className='font-serif text-[34px] text-black font-bold'>12K+ </span>Total Travelers</p>
                <p className='text-2xl font-semibold text-slate-500 '><span className='font-serif text-[34px] text-black font-bold'>9K+ </span>Positive Reviews</p>
            </div>

        </div>
    );
};

export default About_Details;