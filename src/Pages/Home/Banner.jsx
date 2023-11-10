import React, { useState } from 'react';
import bg from '../../assets/bg/w11.jpg'
import photo1 from '../../assets/bg/m1.jpg'
import photo2 from '../../assets/bg/m2.webp'
import photo3 from '../../assets/bg/m21.jpg'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';

const Banner = () => {
    const predefinedNames = ['Rangamati', 'Cox Bazar', 'Sylhet', 'Chattogram', 'Dhaka', 'Saint Martin', 'Bandarban'];
    const userEmail = localStorage.getItem('userEmail');
    const storageSearchDataJSON = localStorage.getItem('searchData');
    const storageSearchData = JSON.parse(storageSearchDataJSON);
    const navigate = useNavigate();
    const [isSearch, setIsSearch] = useState(false);
    const [searchData, setSearchData] = useState();
    const [destinationData, setDestinationData] = useState();

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

    console.log(storageSearchData);
    // console.log(destinationData);
    const getIsLoggedInUser = () => {
        const token = localStorage.getItem('access-token');
        return token ? true : false
    }

    const handleSearch = event => {
        event.preventDefault();
        const form = event.target;
        const destination = form.destination.value;
        const type = form.type.value;
        const date = form.date.value;
        const guests = form.guests.value;
        const searchText = { destination, type, date, guests };
        console.log(searchText);
        setSearchData(searchText);
        

    }
    const handleSearchButton = () => {
        if (searchData) {
            if (getIsLoggedInUser()) {
                const matchData = predefinedNames.find(name =>
                    name.toLowerCase().includes(searchData.destination.toLowerCase())
                );
                if(matchData !== undefined){
                    setIsSearch(true);
                }
                else{
                    toast.error("Destination doesn't match")
                }
            }
            else {
                const searchDataJson = JSON.stringify(searchData)
                localStorage.setItem('searchData', searchDataJson);
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
        const userData = { name, email, phone};
        console.log(userData);
        // setSearchData(searchText)
        if(userData){
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
    console.log(isSearch);
    return (
        <div>
            <div className='relative min-h-fit'>
                <img className=' filter brightness-50' src={bg} alt="" />

                <div className=''>
                    <div className='absolute  top-[5%] left-[5%] h-[60%] flex justify-between gap-4'>
                        <img className='w-112 h-full rounded-tl-3xl rounded-br-3xl brightness-125 saturate-150' src={photo3} alt="" />
                        <div>
                            <img className='w-96 h-96 mt-24 rounded-tr-3xl rounded-bl-3xl brightness-125 saturate-150' src={photo2} alt="" />
                        </div>
                        <div className='p-8 mt-24 space-y-4 text-right'>
                            <p className='text-[40px] font-serif text-yellow-400 font-bold'>Explore The</p>
                            <p className='text-[48px] font-serif text-white font-bold'>Travel &<br />Adventures</p>
                            <p className='text-xl  text-white font-semibold'>Find awesome hotel, car, tour, flight in Bangladesh</p>

                            {/* <img className='w-96 h-96 rounded-tr-3xl rounded-bl-3xl' src={photo2} alt="" /> */}
                        </div>
                    </div>
                    <div className='absolute top-[70%] right-[10%] h-32 w-[85%] opacity-90 bg-white  p-4 rounded-2xl'>
                        <form onSubmit={handleSearch} className="flex justify-evenly pb-8">
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
                                <button onClick={handleSearchButton} type='submit' className="btn btn-warning  text-black font-bold">Search</button>
                            </div>
                        </form>
                    </div>
                    {
                        isSearch ?
                            <div className={`absolute top-[85%] right-[10%] h-32 w-[85%] opacity-90 bg-white  p-4 rounded-2xl`}>
                                <form onSubmit={handleSave} className="flex justify-evenly pb-8">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg text-black font-serif font-semibold">Destination</span>
                                        </label>
                                        <input type="text" value={searchData.destination} placeholder="Destination" name='destination' className="input input-bordered"  />
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
                                        <button type='submit' className="btn btn-warning  text-black font-bold">Save</button>
                                    </div>
                                </form>
                            </div>
                            : <></>
                    }
                </div>
            </div>
            <Toaster/>
        </div>
    );
};

export default Banner;
