import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight } from 'react-icons/fa';
import photo from '../../assets/w1.png'
import SectionTitle from '../../Component/SectionTitle';

const Destination = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200
        });
      }, [])
    const cardData = [
        {
            id: 1,
            image: 'https://i.ibb.co/XJ95Ycd/rang.jpg',
            location: 'Rangamati',
            travelers: '134,231'
        },
        {
            id: 9,
            image: 'https://i.ibb.co/x1sHK38/ctg.jpg',
            location: 'Chattogram',
            travelers: '120,000',
            padding: 'pt-[24px]'
        },

        {
            id: 3,
            image: 'https://i.ibb.co/P6BX81c/DSC0324.jpg',
            location: 'Saint Martin',
            travelers: '234,567'
        },
        {
            id: 4,
            image: 'https://i.ibb.co/f9vmtSj/IMG-20201120-165307.jpg',
            location: 'Cox Bazar',
            travelers: '345,678',
            padding: 'pt-[24px]'
        },
        {
            id: 5,
            image: 'https://i.ibb.co/ccfL2dn/saj.jpg',
            location: 'Sajek Velly',
            travelers: '123,123'
        },
        {
            id: 6,
            image: 'https://i.ibb.co/z697Gkh/rata.jpg',
            location: 'Sylhet',
            travelers: '100,000',
            padding: 'pt-[24px]'
        },
        {
            id: 7,
            image: 'https://i.ibb.co/tYPkq60/sund.jpg',
            location: 'Sundarban',
            travelers: '200,000'
        },
        {
            id: 8,
            image: 'https://i.ibb.co/tZyyw3m/lal.jpg',
            location: 'Dhaka',
            travelers: '89,000',
            padding: 'pt-[24px]'
        },
        {
            id: 2,
            image: 'https://i.ibb.co/0tjsBBm/debo.jpg',
            location: 'Bandarban',
            travelers: '123,456'   
        }

    ]

    return (
        <div className='md:px-12 px-4 py-8 dark:text-white'>
            <div className='flex justify-between'>
            <SectionTitle heading={'Top Destination'} subheading={'Destination'} additionalStyle={'text-left'}></SectionTitle>
                {/* <div className=' space-y-2'> 
                    <p style={{fontFamily :'Edu TAS Beginner'}} className='text-blue-800 md:text-[32px] text-[24px] font-semibold'>Destination</p>
                    <p className='text-black dark:text-white md:text-[48px] text-[32px]  font-serif font-bold'>Top Destination</p>
                </div> */}
                <div>
                    <p className='flex gap-2 text-lg font-semibold mt-8'>See All<FaArrowRight className='mt-1' /></p>
                </div>
            </div>
            <div className="carousel carousel-center w-full px-4 py-8 space-x-4 ">
                {
                    cardData.map(card => <div>
                        <div data-aos="fade-right" className={`carousel-item relative ${card?.padding}`} id={card.id}>
                            <div className={`card w-96 dark:bg-zinc-300 border-0 `}>
                                <figure><img className='h-[300px]' src={card.image} alt="" /></figure>
                                <div className="card-body">
                                    <h2 className="card-location text-xl dark:text-black font-bold font-serif">
                                        {card.location}
                                    </h2>
                                    <p className='font-semibold text-lg text-slate-500'>{card.travelers} Travelers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>

        </div>
    );
};

export default Destination;