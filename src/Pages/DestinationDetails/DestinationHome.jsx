import React from 'react';
import AbsoluteBanner from '../../Shared/AbsoluteBanner';
import AboutDestination from './AboutDestination';
import { Link } from 'react-router-dom';

const DestinationHome = () => {
    const cards = [
        {
            id: 1,
            "location": "Rangamati",
            "travelers": 25678,
            "image": "https://i.ibb.co/XJ95Ycd/rang.jpg",
        },
        {
            "id": 2,
            "location": "Bandarban",
            "travelers": 21678,
            "image": "https://i.ibb.co/jzy8VgR/1656398187-event-image1.jpg",
        },
        {
            "id": 3,
            "location": "Cox's Bazar",
            "travelers": 125678,
            "image": "https://i.ibb.co/84SmkJt/inani.jpg",
        },
        {
            "id": 4,
            "location": "Chattogram",
            "travelers": 20678,
            "image": "https://wallpaperaccess.com/full/9326575.jpg",
        },
        {
            "id": 11,
            "location": "Barishal",
            "travelers": 22678,
            "image": "https://upload.wikimedia.org/wikipedia/commons/a/af/Guthia_mosque%2CBarisal.jpg",
        },
        {
            "id": 5,
            "location": "Saint Martin",
            "travelers": 35678,
            "image": "https://i.ibb.co/kmzcz1t/sa.jpg",
        },
        {
            "id": 12,
            "location": "Cumilla",
            "travelers": 9678,
            "image": "https://i.ibb.co/59xf87M/download.webp",
        },
        {
            "id": 8,
            "location": "Rajshahi",
            "travelers": 15678,
            "image": "https://i.ibb.co/DkBmc6H/pancharatna-shiva-mandir.jpg",
        },
        {
            "id": 9,
            "location": "Khulna",
            "travelers": 15678,
            "image": "https://porzoton.com/wp-content/uploads/2020/03/sixty-dome-mosque_featured-1024x576.jpg",
        },
        {
            "id": 10,
            "location": "Sylhet",
            "travelers": 21678,
            "image": "https://travel.discoverybangladesh.com/images/sylhet-sidebar.jpg",
        },
        {
            "id": 6,
            "location": "Khagrachori",
            "travelers": 15678,
            "image": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/sajek-hills-in-khagrachari-bangladesh-nihab-rahman.jpg",
        },

        {
            "id": 13,
            "location": "Dhaka",
            "travelers": 79678,
            "image": "https://i.ibb.co/tZyyw3m/lal.jpg",
        },

        {
            "id": 14,
            "location": "Sonargaon",
            "travelers": 5678,
            "image": "https://i.ibb.co/7JfCzKS/new-look-of-sonarga-after.jpg",
        },
    ]

    const destLoc = 'Destination';
    const sub = 'Destination'
    const image = 'https://wallpaperaccess.com/full/948020.jpg'

    return (
        <div>
            <AbsoluteBanner image={image} heading={destLoc} subHeading={sub}/>
            <div className='md:flex justify-between md:h-[700px]  gap-2 grid grid-cols-1 mt-4'>
                <div className='space-y-2 md:w-[75%]'>
                    <div className='md:grid grid-cols-3 md:gap-4 gap-2 md:space-y-0 space-y-2'>
                        {
                            cards.slice(0, 3).map((card, index) => (
                                <div key={index} className='relative md:h-[350px] h-[200px]'>
                                    <img className=' md:h-[350px] h-[200px] w-full brightness-150 saturate-150' src={card.image} alt="" />

                                    <div className='absolute inset-0 bg-gradient-to-t from-black to-blue-400 w-full h-full opacity-60'></div>
                                    <div className='absolute text-white bottom-10 font-serif text-center left-[20%] space-y-4'>
                                        <p className='md:text-3xl text-xl font-bold'><Link to={`/destHome/${card.location}`}>{card.location}</Link></p>
                                        <p className='md:text-2xl text-lg font-semibold'>{card.travelers} Travelers</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='md:grid grid-cols-2 gap-4  md:h-[340px] w-full  md:space-y-0 space-y-2'>
                        {
                            cards.slice(3, 5).map((card, index) => (
                                <div key={index} className='relative'>
                                    <img className=' md:h-[340px] h-[200px] w-full brightness-150 saturate-150' src={card.image} alt="" />

                                    <div className='absolute inset-0 bg-gradient-to-t from-black to-blue-400 w-full h-full opacity-60'></div>
                                    <div className='absolute text-white bottom-10 font-serif text-center left-[30%] space-y-4'>
                                    <p className='md:text-3xl text-xl font-bold'><Link to={`/destHome/${card.location}`}>{card.location}</Link></p>
                                        <p className='md:text-2xl text-lg font-semibold'>{card.travelers} Travelers</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='md:w-[30%] md:space-y-0 space-y-2'>
                    {
                        cards.slice(5, 6).map((card, index) => (
                            <div key={index} className='relative'>
                                <img className='md:h-[700px] h-[400px] w-full brightness-100 saturate-150' src={card.image} alt="" />
                                <div className='absolute inset-0 bg-gradient-to-t from-black to-blue-400 w-full h-full opacity-60'></div>
                                <div className='absolute text-white bottom-10 font-serif text-center left-[30%] space-y-4'>
                                <p className='md:text-3xl text-xl font-bold'><Link to={`/destHome/${card.location}`}>{card.location}</Link></p>
                                    <p className='md:text-2xl text-lg font-semibold'>{card.travelers} Travelers</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='md:flex flex-row-reverse justify-between md:h-[700px] pt-4 mb-8 gap-2'>
                <div className='space-y-2 md:w-[75%]'>
                    <div className='md:grid grid-cols-3 gap-4 md:space-y-0 space-y-2'>
                        {
                            cards.slice(6, 9).map((card, index) => (
                                <div key={index} className='relative md:h-[350px]  '>
                                    <img className=' md:h-[350px] h-[200px] w-full brightness-150 saturate-150' src={card.image} alt="" />

                                    <div className='absolute inset-0 bg-gradient-to-t from-black to-blue-400 w-full h-full opacity-60'></div>
                                    <div className='absolute text-white bottom-10 font-serif text-center left-[20%] space-y-4'>
                                    <p className='md:text-3xl text-xl font-bold'><Link to={`/destHome/${card.location}`}>{card.location}</Link></p>
                                        <p className='md:text-2xl text-lg font-semibold'>{card.travelers} Travelers</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='md:grid grid-cols-2 gap-4  md:h-[340px]  md:space-y-0 space-y-2'>
                        {
                            cards.slice(9, 11).map((card, index) => (
                                <div key={index} className='relative '>
                                    <img className=' md:h-[340px] h-[200px] w-full brightness-150 saturate-150' src={card.image} alt="" />

                                    <div className='absolute inset-0 bg-gradient-to-t from-black to-blue-400 w-full h-full opacity-60'></div>
                                    <div className='absolute text-white bottom-10 font-serif text-center left-[30%] space-y-4'>
                                    <p className='md:text-3xl text-xl font-bold'><Link to={`/destHome/${card.location}`}>{card.location}</Link></p>
                                        <p className='md:text-2xl text-lg font-semibold'>{card.travelers} Travelers</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='md:w-[30%] md:pt-0 pt-2'>
                    {
                        cards.slice(11, 12).map(card => (
                            <div className='relative'>
                                <img className='md:h-[700px] h-[400px] w-full brightness-150 saturate-150' src={card.image} alt="" />
                                <div className='absolute inset-0 bg-gradient-to-t from-black to-blue-400 w-full h-full opacity-60'></div>
                                <div className='absolute text-white bottom-10 font-serif text-center left-[30%] space-y-4'>
                                <p className='md:text-3xl text-xl font-bold'><Link to={`/destHome/${card.location}`}>{card.location}</Link></p>
                                    <p className='md:text-2xl text-lg font-semibold'>{card.travelers} Travelers</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>);
};

export default DestinationHome;