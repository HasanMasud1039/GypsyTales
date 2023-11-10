import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaClock, FaLocationArrow, FaStar } from 'react-icons/fa';
import icon from '../../assets/icons/favourite.png'
import toast, { Toaster } from 'react-hot-toast';

const Featured = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200
        });
      }, [])
    const cardData = [
        // {
        //     id: 1,
        //     image: 'https://i.ibb.co/XJ95Ycd/rang.jpg',
        //     location: 'Kaptai,Rangamati',
        //     title: 'Enchanting Beauty of Kaptai Lake',
        //     reviews: 87,
        //     rating: 4.8,
        //     days: 3,
        //     costFrom: 3000
        // },
        {
            id: 2,
            image: 'https://i.ibb.co/0tjsBBm/debo.jpg',
            location: 'Debothakhum, Bandarban',
            title: 'Adventure of Debotakhum',
            reviews: 57,
            rating: 4.5,
            days: 5,
            costFrom: 5000
        },
        // {
        //     id: 9,
        //     image: 'https://i.ibb.co/x1sHK38/ctg.jpg',
        //     location: 'Shitakundo, Chattogram',
        //     title: 'Sea, Waterfall and Mountain View of Chattogram',
        //     reviews: 87,
        //     rating: 4.8,
        //     days: 3,
        //     costFrom: 3000
        // },
        // {
        //     id: 3,
        //     image: 'https://i.ibb.co/P6BX81c/DSC0324.jpg',
        //     location: 'Chera Dwip, Saint Martin',
        //     title: 'Last stone of Bangladesh',
        //     reviews: 90,
        //     rating: 4.9,
        //     days: 3,
        //     costFrom: 5000
        // },
        {
            id: 4,
            image: 'https://i.ibb.co/84SmkJt/inani.jpg',
            location: 'Inani, Cox Bazar',
            title: 'Clam & Quite Blue Sea & Green Mountain',
            reviews: 120,
            rating: 4.7,
            days: 3,
            costFrom: 5000
        },
        {
            id: 5,
            image: 'https://i.ibb.co/sK7qQPL/sajek.jpg',
            location: 'Sajek Velly, Rangamati',
            title: 'Close to Cloud at Sajek Velly',
            reviews: 60,
            rating: 4.5,
            days: 3,
            costFrom: 4000
        },
        {
            id: 6,
            image: 'https://i.ibb.co/GTfb9L7/rata.jpg',
            location: 'Sunamganj, Sylhet',
            title: 'Explore the Swamp Forest Ratargul',
            reviews: 77,
            rating: 4.7,
            days: 2,
            costFrom: 3000
        },
        // {
        //     id: 7,
        //     image: 'https://i.ibb.co/YkmZ9hZ/hiron.jpg',
        //     location: 'Hiron Point, Sundarban',
        //     title: 'Adventure and Suspense with Tiger ',
        //     reviews: 85,
        //     rating: 4.3,
        //     days: 3,
        //     costFrom: 4000
        // },
        {
            id: 8,
            image: 'https://i.ibb.co/LxnRndk/purand.jpg',
            location: 'Puran Dhaka, Dhaka',
            title: 'Listen to the heart of Bangladesh',
            reviews: 110,
            rating: 4.6,
            days: 3,
            costFrom: 3000
        },

    ]
    const addToFavourite = () => {
        toast.success("Added to Favourite", {position: 'top-right'});
    }
    return (
        <div className='bg-blue-900'>
            <div className=' space-y-2 text-center py-8'>
                <p className='text-white text-[32px] font-serif font-semibold'>Tours</p>
                <p className='text-white text-[48px] font-serif font-bold'>Featured Tours</p>
            </div>
            <div className="carousel carousel-center w-full px-4 py-8 space-x-4 ">
                {
                    cardData.map(card => <div>
                        <div data-aos="zoom-in" className='carousel-item px-8 relative h-[600px]'>
                            <div className=' w-96 bg-base-100 border-0 '>
                                <figure className='relative'><img className='h-[300px]' src={card.image} alt="" /></figure>
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

export default Featured;