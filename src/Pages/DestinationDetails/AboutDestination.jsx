import React, { useState } from 'react';
import { data } from '/public/Data'
import { FaPlay } from 'react-icons/fa';
import video from '../../assets/rangamati.mp4'
import map from '../../assets/rang.png'

const AboutDestination = () => {
    // console.log(data["rangamati"]);
    const destination = data["rangamati"];
    // console.log(destination);
    const [weatherToday, setWeatherToday] = useState();
    const api = {
        key: 'fc3d3ae9791eb4f8a8fcd378da9b949d',
        base: 'https://api.openweathermap.org/data/2.5/'
    }
    const weather = () => {
        fetch(`${api.base}weather?q=Dhaka&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(data => setWeatherToday(data))
    }
    // weather();
    return (
        <div>
            <div>
                <div className='relative bg-green-900 w-screen'>
                    <img className='h-96 w-full brightness-50' src={destination.banner} alt="" />
                    <div className='absolute top-[25%] md:left-[25%] left-[10%] text-center space-y-8 md:space-y-16'>
                        <p className='text-[42px] font-bold text-white font-serif'>{destination.name}</p>
                        <p className='text-[22px] font-bold text-white font-serif'>Home / Destination / <span className='text-cyan-400'>{destination.name}</span></p>
                    </div>
                </div>
            </div>
            <div className='md:flex justify-between pt-12 px-2'>
                <div className='md:w-[68%] relative'>
                    <img className='h-[400px] w-full brightness-50' src={destination.photo1} alt="" />
                    <label htmlFor='video' className='btn bg-red-600 text-white hover:bg-warning px-6 absolute md:top-[10%] top-[5%] left-[25%] md:left-[45%]'><FaPlay /> Watch Video</label>
                    {/**Modal */}
                    {/* <label className="btn mx-auto mb-4 btn-sm btn-outline bg-fuchsia-600 text-white ">Details</label> */}

                    <input type="checkbox" id='video' className="modal-toggle" />
                    <div className="modal bg-red-500">
                        <div className="modal-box">

                            <video className='w-full md:h-[400px]' controls>
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
                    <div className='grid grid-cols-2 gap-2 md:flex justify-between'>
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
                        <p className='text-3xl md:text-left text-center py-4 font-bold font-serif'>About <span className='text-red-600'> {destination.name}</span></p>
                        <div className='text-lg p-2'>
                            <p>{destination.about1}</p> <br />
                            <p>{destination.about2}</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-3xl md:text-left text-center py-4 font-bold font-serif py-4'>Basic Information about <span className='text-red-600'> {destination.name}</span></p>
                        <div className='bg-zinc-100'>
                            <div className="overflow-x-auto">
                                <table className="table p-8">
                                    {/* head */}

                                    <tbody>
                                        {/* row 1 */}
                                        <tr className='border-b-2 border-slate-300'>
                                            <td className='text-lg text-slate-500 font-semibold'>Country</td>
                                            <td className='text-lg text-slate-900 font-semibold'>{destination.country}</td>
                                        </tr>
                                        <tr className='border-b-2 border-slate-300'>
                                            <td className='text-lg text-slate-500 font-semibold'>Language</td>
                                            <td className='text-lg text-slate-900 font-semibold'>{destination.language}</td>
                                        </tr>
                                        <tr className='border-b-2 border-slate-300'>
                                            <td className='text-lg text-slate-500 font-semibold'>Currency</td>
                                            <td className='text-lg text-slate-900 font-semibold'>{destination.currency}</td>
                                        </tr>
                                        <tr className='border-b-2 border-slate-300'>
                                            <td className='text-lg text-slate-500 font-semibold'>Area</td>
                                            <td className='text-lg text-slate-900 font-semibold'>{destination.area}</td>
                                        </tr>
                                        <tr className='border-b-2 border-slate-300'>
                                            <td className='text-lg text-slate-500 font-semibold'>Population</td>
                                            <td className='text-lg text-slate-900 font-semibold'>{destination.population}</td>
                                        </tr>
                                        <tr className='border-b-2 border-slate-300'>
                                            <td className='text-lg text-slate-500 font-semibold'>Time Zone</td>
                                            <td className='text-lg text-slate-900 font-semibold'>{destination.timeZone}</td>
                                        </tr>
                                        <tr className='border-b-2 border-slate-300'>
                                            <td className='text-lg text-slate-500 font-semibold'>Time to Travel</td>
                                            <td className='text-lg text-slate-900 font-semibold'>{destination.timeToTravel}</td>
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
                            <p className='text-3xl md:text-left text-center font-bold font-serif py-4'><span className='text-red-600'> {destination.name}</span> in Google Map</p>
                            <img src={map} alt="" />
                        </div>
                        <div className='bg-zinc-100 p-4'>
                            <p className='text-3xl md:text-left text-center font-bold font-serif py-4'>Weather</p>
                            <div className="overflow-x-auto">
                                <table className="table p-8">
                                    {/* head */}

                                    <tbody>
                                        {/* row 1 */}
                                        <tr className='border-b-2 border-slate-300'>
                                            <td className='text-lg text-slate-500 font-semibold'>January - February</td>
                                            <td className='text-lg text-slate-900 font-semibold'>15°C - 25°C </td>
                                        </tr>
                                        <tr className='border-b-2 border-slate-300'>
                                            <td className='text-lg text-slate-500 font-semibold'>March - April</td>
                                            <td className='text-lg text-slate-900 font-semibold'>25°C - 35°C </td>
                                        </tr>
                                        <tr className='border-b-2 border-slate-300'>
                                            <td className='text-lg text-slate-500 font-semibold'>May - June</td>
                                            <td className='text-lg text-slate-900 font-semibold'>35°C - 25°C </td>
                                        </tr>
                                        <tr className='border-b-2 border-slate-300'>
                                            <td className='text-lg text-slate-500 font-semibold'>July - August</td>
                                            <td className='text-lg text-slate-900 font-semibold'>25°C - 30°C </td>
                                        </tr>
                                        <tr className='border-b-2 border-slate-300'>
                                            <td className='text-lg text-slate-500 font-semibold'>September - October</td>
                                            <td className='text-lg text-slate-900 font-semibold'>30°C - 20°C </td>
                                        </tr>
                                        <tr className='border-b-2 border-slate-300'>
                                            <td className='text-lg text-slate-500 font-semibold'>November - December</td>
                                            <td className='text-lg text-slate-900 font-semibold'>20°C - 10°C </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div >
    );
};

export default AboutDestination;