import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'
import logo from '../assets/gypsy31.png'
import axios from 'axios';

const Navbar = () => {
    const [isLoggedInUser, setIsLoggedInUser] = useState()
    const navigate = useNavigate();
    const [user, setUser] = useState();
    const userEmail = localStorage.getItem('userEmail');
    // console.log(user)

    useEffect(() => {
        if (userEmail) {
            axios.get(`https://reqres.in/api/users/2`)
                .then((response) => {
                    setUser(response.data.data);
                })
                .catch((error) => {
                    console.error('Error retrieving data:', error);
                });
        }
        else {
            navigate('/');
        }
    }, []);


    const getIsLoggedInUser = () => {
        const token = localStorage.getItem('access-token');
        return token ? true : false
    }

    const handleLogout = () => {
        localStorage.removeItem('access-token');
        localStorage.removeItem('userEmail');
        setIsLoggedInUser(false);
        navigate('/');
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/destinationDescription'>Destination</Link></li>
                        </ul>
                    </div>
                    <img className='h-16' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/destinationDetails'>Destination</Link></li>
                        {
                                getIsLoggedInUser() ? (<>
                                    <li onClick={handleLogout}><Link to='/'>Logout</Link></li>
                                </>
                                )
                                    :
                                    (<li><Link to='/login'>Login</Link></li>)
                            }
                    </ul>
                </div>
                {
                    getIsLoggedInUser() ? (
                        <div className="navbar-end md:pr-8">
                            <h2 className='px-4 text-lg font-semibold'>{user?.first_name} {user?.last_name}</h2>
                            <img className='w-16 h-16 rounded-full' src={user?.avatar} alt="USER" />
                        </div>)
                        :
                        (<div className="navbar-end">
                            <a className="rounded-full text-[44px] text-center border-0 w-16 h-16 "><Link to='/login'><FaUser></FaUser></Link></a>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Navbar; 