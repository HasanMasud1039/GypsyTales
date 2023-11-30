import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import photo1 from '../../assets/t1.png'
import photo2 from '../../assets/t2.png'
import photo3 from '../../assets/t3.png'
import photo4 from '../../assets/t4.png'
import backgroundImage from '../../assets/bg/w33.jpg'
import { FaPlayCircle, FaVideo } from 'react-icons/fa';
import SectionTitle from '../../Component/SectionTitle';

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
        <div  className='md:flex justify-between md:py-12 pt-40'>
            <div data-aos="flip-right"  style={divStyle} className={`space-y-2   p-8  md:w-[50%]`}>
                <div>
                    <FaPlayCircle className=' w-16 h-16 text-yellow-500' />
                    <p style={{fontFamily :'Edu TAS Beginner'}} className="text-blue-400 dark:text-orange-500 md:text-[32px] text-[24px] font-semibold">--- Are You ready To Travel ---</p>
                    <p style={{fontFamily : 'Chakra Petch'}} className="text-white md:text-[48px] text-[32px] font-bold">GypsyTales is a World Leading Online Tour Booking Platform</p>
                    {/* <SectionTitle heading={'GypsyTales is a World Leading Online Tour Booking Platform'} subheading={'Are You ready To Travel'} additionalStyle={''}></SectionTitle> */}
                    <button className='btn p-4 btn-warning mt-8  font-bold'>Contact Us</button>
                </div>
            </div>
            <div className='grid grid-cols-2 p-4 md:w-[45%] dark:text-white md:space-y-2'>
                <div className='p-4 rounded-lg border-1 shadow-lg w-44 h-44 md:w-56 text-center flex flex-col items-center justify-center dark:border-2 space-y-2'>
                    <img className='w-14 m-1' src={photo1} alt="photo" />
                    <p className='text-gray-00 font-bold text-lg'>Wildlife Tours</p>
                </div>
                <div className='p-4 rounded-lg border-1 shadow-lg w-44 h-44 md:w-56 text-center flex flex-col items-center justify-center dark:border-2 space-y-2'>
                    <img className='w-14 m-1' src={photo2} alt="photo" />
                    <p className='text-gray-00 font-bold text-lg'>Paragliding Tours</p>
                </div>
                <div className='p-4 rounded-lg border-1 shadow-lg w-44 h-44 md:w-56 text-center flex flex-col items-center justify-center dark:border-2 space-y-2'>
                    <img className='w-14 m-1' src={photo3} alt="photo" />
                    <p className='text-gray-00 font-bold text-lg'>Adventure Tours</p>
                </div>
                <div className='p-4 rounded-lg border-1 shadow-lg w-44 h-44 md:w-56 text-center flex flex-col items-center justify-center dark:border-2 space-y-2'>
                    <img className='w-14 m-1' src={photo4} alt="photo" />
                    <p className='text-gray-00 font-bold text-lg'>Beach Tours</p>
                </div>

            </div>
        </div>
    );
};

export default Travel;