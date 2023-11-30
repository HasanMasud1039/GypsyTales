import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaMoon, FaSun, FaUser } from 'react-icons/fa'
import logo from '../assets/gypsy31.png'
import axios from 'axios';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const [isLoggedInUser, setIsLoggedInUser] = useState()
    const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContext);
    // const [user, setUser] = useState();
    const [theme, setTheme] = useState("light");
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

    //dark
    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    // const handleThemeSwitch = () => {
    //     // console.log("clicked")
    //     setTheme(theme === "dark" ? "light" : "dark");
    // };
    const handleThemeLight = () => {
        setTheme(theme === "dark" ? "light" : "light");
    };
    const handleThemeDark = () => {
        setTheme(theme === "light" ? "dark" : "dark");
    };

    const handleLogOut = () => {
        logOut()
            .then(() => localStorage.removeItem('searchData'))
            .catch(error => console.log(error));
    };

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
                            <li><Link to='/destHome'>Destination</Link></li>
                            <li><Link to='/tours'>Tours</Link></li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                            {
                                user ? (<>
                                    <li onClick={handleLogOut}><Link to='/'>Logout</Link></li>
                                </>
                                )
                                    :
                                    (<li><Link to='/login'>Login</Link></li>)
                            }
                            <div className='flex gap-2 my-2 rounded-3xl ms-4 '>

                                {
                                    theme == "dark" ?
                                        <FaSun className='md:text-3xl text-yellow-500 text-lg' onClick={handleThemeLight} type="checkbox" />
                                        :
                                        <FaMoon className='md:text-3xl text-gray-700 text-lg' onClick={handleThemeDark} type="checkbox" />
                                }
                            </div>
                        </ul>
                    </div>
                    <img className='h-16 md:mx-0 mx-8' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4 text-lg font-bold">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/destHome'>Destination</Link></li>
                        <li><Link to='/tours'>Tours</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        {
                            user ? (<>
                                <li onClick={handleLogOut}><Link to='/'>Logout</Link></li>
                            </>
                            )
                                :
                                (<li><Link to='/login'>Login</Link></li>)
                        }

                    </ul>
                </div>
                <div className='navbar-end gap-4'>
                    <div className='flex gap-6 mt-2 md:block hidden  rounded-3xl ms-4 '>
                        {
                            theme == "dark" ?
                                <FaSun className='md:text-3xl text-yellow-500 text-lg' onClick={handleThemeLight} type="checkbox" />
                                :
                                <FaMoon className='md:text-3xl text-gray-700 text-lg' onClick={handleThemeDark} type="checkbox" />
                        }
                    </div>
                    {
                        user ? (
                            <div className="md:pr-8">
                                {/* <h2 className='px-4 text-lg md:block hidden font-semibold'>{user?.displayName}</h2> */}
                                <img className='w-16 h-16 rounded-full' src={user?.photoURL} alt="USER" />
                            </div>)
                            :
                            (<div className="navbar-end">
                                <a className="rounded-full text-[44px] text-center border-0 w-16 h-16 "><Link to='/login'><FaUser></FaUser></Link></a>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar; 