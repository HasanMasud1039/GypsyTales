import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../Provider/AuthProvider';

const AbsoluteBanner = ({ image, heading, subHeading }) => {
    const { user } = useContext(AuthContext);
    const predefinedNames = ['Rangamati', "Cox's Bazar", 'Sylhet', 'Chattogram', 'Dhaka', 'Saint Martin', 'Bandarban'];
    const storageSearchDataJSON = localStorage.getItem('searchData');
    const storageSearchData = JSON.parse(storageSearchDataJSON);
    const navigate = useNavigate();
    const [isSearch, setIsSearch] = useState(false);
    const [searchData, setSearchData] = useState();
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = (event) => {
        const inputText = event.target.value;
        setInputValue(inputText);

        // Filter suggestions based on inputText
        const filteredSuggestions = predefinedNames.filter(name =>
            name.toLowerCase().includes(inputText.toLowerCase())
        );

        setSuggestions(filteredSuggestions);
    };
    const handleSuggestionClick = (selectedName) => {
        setInputValue(selectedName);
        setSuggestions([]);
    };

    const handleSearch = event => {
        event.preventDefault();
        const form = event.target;
        const destination = form.destination.value;
        const type = form.type.value;
        const date = form.date.value;
        const guests = form.guests.value;
        const searchText = { destination, type, date, guests };
        // console.log(searchText);
        setSearchData(searchText);
    }
    const handleSearchButton = () => {
        if (searchData) {
            if (user) {
                const matchData = predefinedNames.find(name =>
                    name.toLowerCase().includes(searchData.destination.toLowerCase())
                );
                if (matchData !== undefined) {
                    setIsSearch(true);
                }
                else {
                    toast.error("Destination doesn't match")
                }
            }
            else {
                navigate('/login');
            }
        }
    }
    const handleSave = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const userData = { name, email, phone };
        // setSearchData(searchText)
        if (userData) {
            Swal.fire({
                title: 'Booking Successful!',
                text: 'Information Saved Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            setIsSearch(false);
            localStorage.removeItem('searchData');
        }
    }
    return (
        <div>
            <div className='relative md:min-h-fit'>
                <img className='md:h-full h-[450px] filter brightness-50' src={image} alt="" />

                <div className=''>

                    <div className='absolute top-[25%] md:left-[40%] left-[10%] text-center space-y-8 md:space-y-16'>
                        <p style={{ fontFamily: 'Chakra Petch' }} className='text-[42px] text-red-600 font-bold font-serif'>  {heading}</p>
                        <p style={{ fontFamily: 'Chakra Petch' }} className='text-[22px]  font-bold text-white font-serif'><Link to='/'>Home </Link>/ {subHeading}</p>
                    </div>

                    <div className='absolute top-[70%] md:right-[10%] md:h-32 md:w-[85%] opacity-90 md:bg-white bg-slate-300  p-4 rounded-2xl'>
                        <form onSubmit={handleSearch} className="md:flex grid grid-cols-2 gap-2 justify-evenly md:pb-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg text-black font-serif font-semibold">Destination</span>
                                </label>

                                <input onChange={handleInputChange} value={inputValue} defaultValue={storageSearchData?.destination} type="text" placeholder="Where to go?" name='destination' className="input input-bordered" required />
                                {suggestions.length > 0 && (
                                    <ul>
                                        {suggestions.map((name, index) => (
                                            <li className='bg-white px-4' key={index} onClick={() => handleSuggestionClick(name)}>
                                                {name}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg text-black font-serif font-semibold">Type</span>
                                </label>
                                <input type="text" defaultValue={storageSearchData?.type} placeholder="Activity" name='type' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg text-black font-serif font-semibold">When?</span>
                                </label>
                                <input type="date" placeholder="Date" defaultValue={storageSearchData?.date} name='date' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg text-black font-serif font-semibold">Guests</span>
                                </label>
                                <input type="number" placeholder="0" defaultValue={storageSearchData?.guests} name='guests' className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-10">
                                <button onClick={handleSearchButton} type='submit' className="p-4 rounded-xl bg-red-600 font-semibold text-white">Search</button>
                            </div>
                        </form>
                    </div>
                    {
                        isSearch ?
                            <div className={`absolute top-[70%] md:right-[10%] md:h-32 md:w-[85%]  md:bg-white bg-blue-800  pb-8 px-2 rounded-2xl`}>
                                <form onSubmit={handleSave} className="grid grid-cols-2 gap-2 md:flex justify-evenly md:pb-4 h-full">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg text-black font-serif font-semibold">Destination</span>
                                        </label>
                                        <input type="text" value={searchData.destination} placeholder="Destination" name='destination' className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg text-black font-serif font-semibold">Name</span>
                                        </label>

                                        <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg text-black font-serif font-semibold">Email</span>
                                        </label>
                                        <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg text-black font-serif font-semibold">Contact No.</span>
                                        </label>
                                        <input type="text" placeholder="Contact No." name='phone' className="input input-bordered" required />
                                    </div>
                                    <div className="form-control mt-10">
                                        <button type='submit' className="p-4 rounded-xl bg-red-600 font-semibold text-white">Save</button>
                                    </div>
                                </form>
                            </div>
                            : <></>
                    }
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default AbsoluteBanner;