import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
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
            <div className="navbar bg-base-100 dark:bg-zinc-400 dark:text-white md:px-20 mx-auto">
                <div className="navbar-start md:w-fit">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-base-400 rounded-box w-52 text-black">
                            <li><NavLink className={({ isActive }) =>
                                    isActive ? "text-green-600" : ""} to='/'>Home</NavLink></li>
                            <li><NavLink className={({ isActive }) =>
                                    isActive ? "text-green-600" : ""} to='/about'>About</NavLink></li>
                            <li><NavLink className={({ isActive }) =>
                                    isActive ? "text-green-600" : ""} to='/destHome'>Destination</NavLink></li>
                            <li><NavLink className={({ isActive }) =>
                                    isActive ? "text-green-600" : ""} to='/tours'>Tours</NavLink></li>
                            <li><NavLink className={({ isActive }) =>
                                    isActive ? "text-green-600" : ""} to='/blogs'>Blogs</NavLink></li>
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
                <div className="navbar-center hidden lg:flex mx-auto">
                    <ul className="menu menu-horizontal px-1 gap-4 text-lg font-semibold dark:text-white">
                        <li><NavLink className={({ isActive }) =>
                                    isActive ? "text-sky-600 dark:text-sky-200 border-l-4 border-r-4  shadow-xl" : ""} to='/'>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                                    isActive ? "text-red-600 dark:text-red-200 border-l-4 border-r-4  shadow-xl" : ""} to='/about'>About</NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                                    isActive ? "text-green-600 dark:text-green-200 border-l-4 border-r-4  shadow-xl" : ""} to='/destHome'>Destination</NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                                    isActive ? "text-blue-600 dark:text-blue-200 border-l-4 border-r-4  shadow-xl" : ""} to='/tours'>Tours</NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                                    isActive ? "text-violet-600 dark:text-fuchsia-100 border-l-4 border-r-4  shadow-xl" : ""} to='/blogs'>Blogs</NavLink></li>
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
                <div className='navbar-end md:w-fit gap-4'>
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
                            <div className="md:pr-8 md:flex items-center gap-2">
                                <h2 className='px-4 text-lg md:block hidden font-semibold'>{user?.displayName}</h2>
                                <img className='w-16 h-16 rounded-full' src={user?.photoURL} alt="USER" />
                            </div>)
                            :
                            (<div className="">
                                <a className="rounded-full text-[44px] text-center border-0 w-16 h-16 "><Link to='/login'><FaUser></FaUser></Link></a>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar; 