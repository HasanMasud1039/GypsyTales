import React, { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import AbsoluteBanner from '../../Shared/AbsoluteBanner';
import { data } from '/public/Data'
import toast, { Toaster } from 'react-hot-toast';
import { FaArrowRight, FaClock, FaLocationArrow, FaStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import icon from '../../assets/icons/favourite.png'
import ToursPackage from './ToursPackage';

const ToursBody = () => {
    const [selectedOption, setSelectedOption] = useState([]);
    const [rangeValue, setRangeValue] = useState(0);
    const namesArray = Object.values(data).map((person) => person.popularTours);
    const popularTours = namesArray.flat();
    console.log(popularTours);

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, [])
    const destination = data[location];
    const addToFavourite = () => {
        toast.success("Added to Favourite", { position: 'top-right' });
    }

    const handleRangeChange = (e) => {
        setRangeValue(parseInt(e.target.value, 10));
    };
    const handleOptionChange = (e) => {
        const value = e.target.value;
        setSelectedOption((prevSelected) => {
            if (prevSelected.includes(value)) {
                // If the option is already selected, remove it
                return prevSelected.filter((option) => option !== value);
            } else {
                // If the option is not selected, add it
                return [...prevSelected, value];
            }
        });
    };
    const trackColorStyle = {
        background: `linear-gradient(to right, red 0%, red ${(rangeValue / 6000) * 100}%, #ccc ${(rangeValue / 6000) * 100}%, #ccc 100%)`,
    };
    const destLoc = 'Tour Packages';
    const sub = 'Tour Packages'
    const image = 'https://tourtoday.com.bd/wp-content/uploads/2017/02/slider.jpg'
    return (
        <div>
            <AbsoluteBanner image={image} heading={destLoc} subHeading={sub} />
            <div className='md:flex justify-between px-2 py-8 md:mt-0 mt-40'>
                <div className='min-h-screen md:w-[25%] dark:text-white  space-y-8'>
                    <div className="p-8 bg-zinc-100 dark:bg-black dark:border-2 space-y-2">
                        <p className='text-xl md:text-2xl py-2  font-bold'>Search</p>
                        <div className='join'>
                            <input className="input join-item" placeholder="Type Anything..." />
                            <button className="text-[28px] bg-white  p-2 join-item"><CiSearch className='dark:text-black' /></button>
                        </div>
                    </div>
                    <div className="p-8 bg-zinc-100 dark:bg-black dark:border-2 space-y-2">
                        <p className='text-xl md:text-2xl py-2  font-bold'>Filter By</p>
                        <div className='join'>

                            {/* <input id="medium-range" value='43' type="range"  class="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/> */}
                            <div>
                                <input
                                    id="medium-range"
                                    type="range"
                                    min={0}
                                    max={6000}
                                    step={1}
                                    className="w-[300px] h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                                    value={rangeValue}
                                    onChange={handleRangeChange}
                                    style={trackColorStyle}
                                />
                                <div className='flex justify-between font-semibold text-lg'>
                                    <p> BDT 00</p>
                                    <p> BDT {rangeValue}</p>
                                </div>
                                <button className='px-4 py-2 mt-6 rounded-lg bg-red-600 font-semibold text-white'>Submit</button>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 bg-zinc-100 dark:bg-black dark:border-2 space-y-2">
                        <p className='text-xl md:text-2xl py-2  font-bold'>Categories</p>
                        <div>
                            <ul className='text-lg font-semibold text-slate-500  dark:text-slate-100'>
                                <label className='gap-2 flex'>
                                    <input
                                        type="checkbox"
                                        value="Honeymoon"
                                        checked={selectedOption.includes('Honeymoon')}
                                        onChange={handleOptionChange}
                                    />
                                    Honeymoon
                                </label>
                                <label className='gap-2 flex'>
                                    <input
                                        type="checkbox"
                                        value="Adventure"
                                        checked={selectedOption.includes('Adventure')}
                                        onChange={handleOptionChange}
                                    />
                                    Adventure
                                </label>
                                <label className='gap-2 flex'>
                                    <input
                                        type="checkbox"
                                        value="Beaches"
                                        checked={selectedOption.includes('Beaches')}
                                        onChange={handleOptionChange}
                                    />
                                    Beaches
                                </label>
                                <label className='gap-2 flex'>
                                    <input
                                        type="checkbox"
                                        value="Mountain"
                                        checked={selectedOption.includes('Mountain')}
                                        onChange={handleOptionChange}
                                    />
                                    Mountain
                                </label>
                                <label className='gap-2 flex'>
                                    <input
                                        type="checkbox"
                                        value="Waterfall"
                                        checked={selectedOption.includes('Waterfall')}
                                        onChange={handleOptionChange}
                                    />
                                    Waterfall
                                </label>
                                <label className='gap-2 flex'>
                                    <input
                                        type="checkbox"
                                        value="River"
                                        checked={selectedOption.includes('River')}
                                        onChange={handleOptionChange}
                                    />
                                    River
                                </label>
                                <label className='gap-2 flex'>
                                    <input
                                        type="checkbox"
                                        value="Lake"
                                        checked={selectedOption.includes('Lake')}
                                        onChange={handleOptionChange}
                                    />
                                    Lake
                                </label>
                                <label className='gap-2 flex'>
                                    <input
                                        type="checkbox"
                                        value="Food"
                                        checked={selectedOption.includes('Food')}
                                        onChange={handleOptionChange}
                                    />
                                    Food
                                </label>

                            </ul>
                        </div>
                    </div>

                    <div className="p-8 bg-zinc-100 dark:bg-black dark:border-2 space-y-2">
                        <p className='text-xl md:text-2xl py-2  font-bold'>Destinations</p>
                        <div>
                            <ul className='text-lg font-semibold text-slate-600 dark:text-slate-100'>
                                <p className='my-2 text-black dark:text-white font-bold text-xl'>Rangamati</p>
                                <label className='gap-2 flex'>
                                    <input
                                        type="checkbox"
                                        value="Kaptai"
                                        checked={selectedOption.includes('Kaptai')}
                                        onChange={handleOptionChange}
                                    />
                                    Kaptai
                                </label>
                                <label className='gap-2 flex'>
                                    <input
                                        type="checkbox"
                                        value="Sajek"
                                        checked={selectedOption.includes('Sajek')}
                                        onChange={handleOptionChange}
                                    />
                                    Sajek
                                </label>
                                <label className='gap-2 flex'>
                                    <input
                                        type="checkbox"
                                        value="HangingBridge"
                                        checked={selectedOption.includes('HangingBridge')}
                                        onChange={handleOptionChange}
                                    />
                                    Hanging Bridge
                                </label>
                                <p className='my-2 text-black dark:text-white font-bold text-xl'>Chattogram</p>
                                <label className='gap-2 flex'>
                                    <input
                                        type="checkbox"
                                        value="PotengaBeach"
                                        checked={selectedOption.includes('PotengaBeach')}
                                        onChange={handleOptionChange}
                                    />
                                    Potenga Beach
                                </label>
                                <label className='gap-2 flex'>
                                    <input
                                        type="checkbox"
                                        value="SitakundoWaterfalls"
                                        checked={selectedOption.includes('SitakundoWaterfalls')}
                                        onChange={handleOptionChange}
                                    />
                                    Sitakundo Waterfalls
                                </label>
                                <label className='gap-2 flex'>
                                    <input
                                        type="checkbox"
                                        value="ChandranathHill"
                                        checked={selectedOption.includes('ChandranathHill')}
                                        onChange={handleOptionChange}
                                    />
                                    Chandranath Hill
                                </label>
                                <p className='my-2 text-black dark:text-white font-bold text-xl'>Cox's Bazar</p>
                                <label className='gap-2 flex'>
                                    <input
                                        type="checkbox"
                                        value="CoxSeaBeach"
                                        checked={selectedOption.includes('CoxSeaBeach')}
                                        onChange={handleOptionChange}
                                    />
                                    Kolatoli Beach
                                </label>
                                <label className='gap-2 flex'>
                                    <input
                                        type="checkbox"
                                        value="InaniBeach"
                                        checked={selectedOption.includes('InaniBeach')}
                                        onChange={handleOptionChange}
                                    />
                                    Inani Beach
                                </label>
                                <label className='gap-2 flex'>
                                    <input
                                        type="checkbox"
                                        value="SaintMartin"
                                        checked={selectedOption.includes('SaintMartin')}
                                        onChange={handleOptionChange}
                                    />
                                    Saint Martin
                                </label>
                                <p className='my-2 text-black dark:text-white font-bold text-xl'>Bandarban</p>
                                <label className='gap-2 flex'>
                                    <input
                                        type="checkbox"
                                        value="Debotakum"
                                        checked={selectedOption.includes('Debotakum')}
                                        onChange={handleOptionChange}
                                    />
                                    Debotakhum
                                </label>
                                <label className='gap-2 flex'>
                                    <input
                                        type="checkbox"
                                        value="Amiakhum"
                                        checked={selectedOption.includes('Amiakhum')}
                                        onChange={handleOptionChange}
                                    />
                                    Amiakhum
                                </label>
                                <label className='gap-2 flex'>
                                    <input
                                        type="checkbox"
                                        value="Nilgiri"
                                        checked={selectedOption.includes('Nilgiri')}
                                        onChange={handleOptionChange}
                                    />
                                    Nilgiri
                                </label>
                                <p className='my-2 text-black dark:text-white font-bold text-xl'>Dhaka</p>
                                <label className='gap-2 flex'>
                                    <input
                                        type="checkbox"
                                        value="PuranDhaka"
                                        checked={selectedOption.includes('PuranDhaka')}
                                        onChange={handleOptionChange}
                                    />
                                    Puran Dhaka
                                </label>

                            </ul>
                        </div>
                    </div>

                </div>
                <div className='min-h-screen md:w-[73%] dark:text-white '>
                    <ToursPackage allObjects={popularTours} />
                    <Toaster></Toaster>
                </div>
            </div>
        </div>
    );
};

export default ToursBody;