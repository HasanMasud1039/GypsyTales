import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Category = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200
        });
      }, [])
    const cardData = [
        {
            icon: 'https://i.ibb.co/JrRk9Db/house.png',
            title: 'City Tours',
            number: '10 Tours'
        },
        {
            icon: 'https://i.ibb.co/vd2rZk6/boat.png',
            title: 'Boat Tours',
            number: '6 Tours'
        },
        {
            icon: 'https://i.ibb.co/TTwCjV8/beach.png',
            title: 'Beach Tours',
            number: '12 Tours'
        },
        {
            icon: 'https://i.ibb.co/2sZpjzm/sign.png',
            title: 'Adventures',
            number: '15 Tours'
        },
        {
            icon: 'https://i.ibb.co/8K9jy10/burger.png',
            title: 'Food',
            number: '26 Tours'
        },
        {
            icon: 'https://i.ibb.co/dGK6j3m/hiking.png',
            title: 'Hiking',
            number: '12 Tours'
        },
        {
            icon: 'https://i.ibb.co/x5WD7ZX/mountain.png',
            title: 'Mountain',
            number: '20 Tours'
        },
    ]
    return (
        <div className='p-8'>
            <div className='text-center space-y-4'>
                <p className='text-blue-800 text-[32px] font-serif font-semibold'>Browse By Category</p>
                <p className='text-black text-[48px] font-serif font-bold'>Pick A Tour Type</p>
            </div>
            <div className='flex justify-evenly my-6'>
                {
                    cardData.map(card =>
                        <div data-aos="fade-down" className='p-4 rounded-lg border-1 shadow-lg w-44 h-44 text-center flex flex-col items-center justify-center  space-y-2'>
                            <img className='w-14 m-1' src={card.icon} alt="photo" />
                            <p className='text-gray-00 font-bold text-lg'>{card.title}</p>
                            <p className='text-gray-500 font-semibold'>{card.number}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Category;