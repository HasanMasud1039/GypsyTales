import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight, FaClock, FaLocationArrow, FaStar } from 'react-icons/fa';
import icon from '../../assets/icons/favourite.png'
import toast, { Toaster } from 'react-hot-toast';
import { data } from '/public/Data'

const Activities = ({location}) => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
      }, [])
    const destination = data[location];
    const addToFavourite = () => {
        toast.success("Added to Favourite", { position: 'top-right' });
    }
    return (
        <div className='py-8 md:py-0 md:px-0 px-2'>
            <div className='flex justify-between'>
                <p style={{fontFamily : 'Chakra Petch'}} className='text-3xl dark:text-white md:px-8 font-bold font-serif py-4'>Activities in <span className='text-red-600'> {destination.name}</span></p>
                <div>
                    <p className='flex gap-2 text-lg font-semibold dark:text-white md:mr-8 mt-8'>See All<FaArrowRight className='mt-1' /></p>
                </div>
            </div>
            <div className="carousel carousel-center w-full md:px-6 px-8 py-8">
                {
                    destination.activities.map(card => <div>
                        <div data-aos="fade-left" className='carousel-item px-2 relative h-[600px]'>
                            <div className='border-2 w-96 dark:bg-zinc-300 border-0 '>
                                <figure className='relative'><img className='h-[300px] w-full' src={card.image} alt="" /></figure>
                                <p className='absolute top-5 right-10 px-2 btn rounded-full' onClick={addToFavourite}><img className='w-8 h-10' src={icon} alt="" /></p>
                                <div className="card-body">
                                    <h2 className="flex  gap-4 text-slate-500 text-md font-bold font-serif">
                                        <FaLocationArrow /> {card.location}
                                    </h2>
                                    <h1 className='font-serif font-bold text-2xl text-red-800'>{card.title}</h1>
                                    <div className='flex justify-between'>
                                        <div className='flex'>
                                            <p className='flex p-2 gap-2 rounded-xl bg-yellow-400'><FaStar className='mt-1' />{card.rating}</p>
                                            <p className='p-2 text-slate-500 font-semibold'>{card.reviews} reviews</p>
                                        </div>
                                        <div>
                                            <p className='flex p-2 gap-2 rounded-xl text-slate-500'><FaClock className='mt-1' />{card.days} days</p>
                                        </div>
                                    </div>
                                    <hr className='my-2' />
                                    <div className='flex justify-between'>
                                        <p className='text-slate-500 text-lg'>Starting From</p>
                                        <p className='font-bold text-2xl ps-16'>BDT {card.costFrom}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Activities;