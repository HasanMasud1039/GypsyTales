import React, { useState } from 'react';
import { data } from '/public/Data'
import { FaPlay } from 'react-icons/fa';
import video from '../../assets/rangamati.mp4'
import PopularTours from './PopularTours';
import Activities from './Activities';
import { Link, useParams } from 'react-router-dom';
// import map from '../../assets/rang.png'

const AboutDestination = () => {
    const { location } = useParams();
    const destination = data[location];

    return (
        <div>
            <div className='relative bg-green-900 w-screen'>
                <img className='h-96 w-full brightness-50' src={destination.banner} alt="" />
                <div className='absolute top-[25%] md:left-[25%] left-[10%] text-center space-y-8 md:space-y-16'>
                    <p style={{ fontFamily: 'Chakra Petch' }} className='text-[42px] text-orange-500 font-bold font-serif'>{destination.name}</p>
                    <p style={{ fontFamily: 'Chakra Petch' }} className='text-[22px] text-orange-500 font-bold text-white font-serif'><Link to='/'>Home</Link> / <Link to='/destHome'>Destination</Link> / <span className='text-cyan-400'>{destination.name}</span></p>
                </div>
            </div>
            <div className='md:flex justify-between md:pt-1 pt-12 px-2'>
                <div className='md:w-[68%] relative'>
                    <img className='h-[400px] w-full brightness-50' src={destination.photo1} alt="" />
                    <label htmlFor='video' className='btn bg-red-600 text-white hover:bg-warning px-6 absolute md:top-[10%] top-[5%] left-[25%] md:left-[45%]'><FaPlay /> Watch Video</label>
                    {/**Modal */}
                    <input type="checkbox" id='video' className="modal-toggle" />
                    <div className="modal bg-red-500">
                        <div className="modal-box dark:bg-black">
                            <video className='w-full dark:text-white md:h-[400px]' controls>
                                <source
                                    src={video}
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                            <div className="modal-action">
                                <label htmlFor="video" className="btn ">Close!</label>
                            </div>
                        </div>
                    </div>

                    {/**Modal end*/}
                    <div className='grid grid-cols-2 gap-2 md:flex justify-between mt-2'>
                        <img className='h-56 w-64' src={destination.photo2} alt="" />
                        <img className='h-56 w-64' src={destination.photo3} alt="" />
                        <img className='h-56 w-64' src={destination.photo4} alt="" />
                        <div className='relative'>
                            <img className='h-56 w-64 brightness-50' src={destination.photo5} alt="" />
                            <p className='absolute text-center text-[35px] text-slate-200 font-serif left-[25%] top-[20%]'>12+ <br /><span className='text-[25px]'>More Photos</span></p>
                        </div>
                    </div>
                    {/* About */}
                    <div className='py-8'>
                        <p style={{ fontFamily: 'Chakra Petch' }} className='text-3xl md:text-left text-center py-4 font-bold font-serif dark:text-white md:px-4'>About <span className='text-red-600'> {destination.name}</span></p>
                        <div className='text-lg p-2 dark:text-slate-300 px-4'>
                            <p>{destination.about1}</p> <br />
                            <p>{destination.about2}</p>
                        </div>
                    </div>
                    <div>
                        <p style={{ fontFamily: 'Chakra Petch' }} className='text-3xl md:text-left text-center py-4 dark:text-white md:px-4 font-bold font-serif'>Basic Information about <span className='text-red-600'> {destination.name}</span></p>
                        <div className='bg-zinc-100 mx-4 dark:bg-slate-800 '>
                            <div className="overflow-x-auto md:mt-4">
                                <table className="table p-8">
                                    {/* head */}

                                    <tbody>
                                        {/* row 1 */}
                                        <tr className='border-b-2 border-slate-300'>
                                            <td className='text-lg text-slate-500 dark:text-white font-semibold'>Country</td>
                                            <td className='text-lg text-slate-900 font-semibold dark:text-white'>{destination.country}</td>
                                        </tr>
                                        <tr className='border-b-2 border-slate-300'>
                                            <td className='text-lg text-slate-500 dark:text-white font-semibold'>Language</td>
                                            <td className='text-lg text-slate-900 font-semibold dark:text-white'>{destination.language}</td>
                                        </tr>
                                        <tr className='border-b-2 border-slate-300'>
                                            <td className='text-lg text-slate-500 dark:text-white font-semibold'>Currency</td>
                                            <td className='text-lg text-slate-900 font-semibold dark:text-white'>{destination.currency}</td>
                                        </tr>
                                        <tr className='border-b-2 border-slate-300'>
                                            <td className='text-lg text-slate-500 dark:text-white font-semibold'>Area</td>
                                            <td className='text-lg text-slate-900 font-semibold dark:text-white'>{destination.area}</td>
                                        </tr>
                                        <tr className='border-b-2 border-slate-300'>
                                            <td className='text-lg text-slate-500 dark:text-white font-semibold'>Population</td>
                                            <td className='text-lg text-slate-900 font-semibold dark:text-white'>{destination.population}</td>
                                        </tr>
                                        <tr className='border-b-2 border-slate-300'>
                                            <td className='text-lg text-slate-500 dark:text-white font-semibold'>Time Zone</td>
                                            <td className='text-lg text-slate-900 font-semibold dark:text-white'>{destination.timeZone}</td>
                                        </tr>
                                        <tr className='border-b-2 border-slate-300'>
                                            <td className='text-lg text-slate-500 dark:text-white font-semibold'>Time to Travel</td>
                                            <td className='text-lg text-slate-900 font-semibold dark:text-white'>{destination.timeToTravel}</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='md:w-[30%] h-[600px] '>
                    <div>
                        <div className='py-8'>
                            <p style={{ fontFamily: 'Chakra Petch' }} className='text-3xl dark:text-white md:text-left text-center font-bold font-serif py-4'><span className='text-red-600'> {destination.name}</span> in Google Map</p>
                            <img src={destination.map} alt="" />
                        </div>
                        <div className='bg-zinc-100 dark:bg-zinc-700 p-4'>
                            <p className='text-3xl md:text-left text-center dark:text-white font-bold font-serif py-4'>Weather</p>
                            <div className="overflow-x-auto">
                                <table className="table p-8">
                                    {/* head */}

                                    <tbody>
                                        {/* row 1 */}
                                        <tr className='border-b-2 border-slate-300'>
                                            <td className='text-lg text-slate-500 dark:text-zinc-200 font-semibold'>January - February</td>
                                            <td className='text-lg text-slate-900 dark:text-zinc-200 font-semibold '>15°C - 25°C </td>
                                        </tr>
                                        <tr className='border-b-2 border-slate-300'>
                                            <td className='text-lg text-slate-500 dark:text-zinc-200  font-semibold'>March - April</td>
                                            <td className='text-lg text-slate-900 dark:text-zinc-200 font-semibold '>25°C - 35°C </td>
                                        </tr>
                                        <tr className='border-b-2 border-slate-300'>
                                            <td className='text-lg text-slate-500 dark:text-zinc-200  font-semibold'>May - June</td>
                                            <td className='text-lg text-slate-900 dark:text-zinc-200 font-semibold '>35°C - 25°C </td>
                                        </tr>
                                        <tr className='border-b-2 border-slate-300'>
                                            <td className='text-lg text-slate-500 dark:text-zinc-200  font-semibold'>July - August</td>
                                            <td className='text-lg text-slate-900 dark:text-zinc-200 font-semibold '>25°C - 30°C </td>
                                        </tr>
                                        <tr className='border-b-2 border-slate-300'>
                                            <td className='text-lg text-slate-500 dark:text-zinc-200 font-semibold'>September - October</td>
                                            <td className='text-lg text-slate-900 dark:text-zinc-200 font-semibold '>30°C - 20°C </td>
                                        </tr>
                                        <tr className='border-b-2 border-slate-300'>
                                            <td className='text-lg text-slate-500 dark:text-zinc-200 font-semibold'>November - December</td>
                                            <td className='text-lg text-slate-900 dark:text-zinc-200 font-semibold '>20°C - 10°C </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <PopularTours location={location} />
            <Activities location={location} />
        </div >
    );
};

export default AboutDestination;