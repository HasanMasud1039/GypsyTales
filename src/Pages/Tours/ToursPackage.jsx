import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaClock, FaLocationArrow, FaStar } from 'react-icons/fa';
import icon from '../../assets/icons/favourite.png'

const ToursPackage = ({ allObjects }) => {
    console.log(allObjects);
    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the start and end index for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Slice the array based on the current page
    const currentObjects = allObjects.slice(startIndex, endIndex);

    const totalPages = Math.ceil(allObjects.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    const addToFavourite = () => {
        toast.success("Added to Favourite", { position: 'top-right' });
    }

    return (
        <div className='relative h-full'>
            <div className="carousel carousel-center w-full py-0 flex flex-wrap justify-evenly mb-14
            ">
                {
                    currentObjects.map(card => <div>
                        <div data-aos="fade-right" className='carousel-item px-0 my-2 relative h-[500px]'>
                            <div className='border-0 shadow-lg w-80 dark:bg-zinc-300'>
                                <figure className='relative '><img className='h-[200px] w-full' src={card.image} alt="" /></figure>
                                <p className='absolute top-5 right-10 px-2 btn rounded-full' onClick={addToFavourite}><img className='w-8 h-10' src={icon} alt="" /></p>
                                <div className="card-body">
                                    <h2 className="flex  gap-4 text-slate-500 text-md font-bold font-serif">
                                        <FaLocationArrow /> {card.location}
                                    </h2>
                                    <h1 className='font-serif font-bold text-xl text-red-800'>{card.title}</h1>
                                    <div className='flex justify-between'>
                                        <div className='flex gap-2'>
                                            <p className='flex p-2 gap-2 rounded-xl bg-yellow-400'><FaStar className='mt-1' />{card.rating}</p>
                                            <p className='p-1 text-slate-500 font-semibold'>{card.reviews} reviews</p>
                                        </div>
                                        <div>
                                            <p className='flex p-2 gap-2 rounded-xl text-slate-500'><FaClock className='mt-1' />{card.days} days</p>
                                        </div>
                                    </div>
                                    <hr className='my-2' />
                                    <div className='flex justify-between'>
                                        <p className='text-slate-500 text-lg'>Starting From</p>
                                        <p className='font-bold text-xl ps-4 text-red-700'>BDT {card.costFrom}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>


            {/* Pagination controls */}
            <div className='flex justify-center absolute left-[40%]  bottom-0'>
                <button className='text-3xl text-orange-600'
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <FaArrowAltCircleLeft />
                </button>
                <span className='m-4 text-xl'> Page {currentPage} of {totalPages} </span>
                <button className='text-3xl text-orange-600'
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <FaArrowAltCircleRight />
                </button>
            </div>
        </div>
    );
};

export default ToursPackage;
