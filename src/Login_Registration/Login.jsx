import React, { useContext, useState } from 'react';
import { Controller, useForm, } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaEnvelope, FaUserLock } from 'react-icons/fa';
import SocialLogin from './SocialLogin';

const Login = () => {

    const { handleSubmit, control, formState: { errors }, reset } = useForm();
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [user, setUser] = useState();
    const [currentUser, setCurrentUser] = useState([]);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const onSubmit = async (userData) => {
        console.log(userData);
        setUser(userData);
        const email = userData.email;
        const password = userData.password;
        signIn(email, password)
            .then(result => {
                
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
            .catch(error =>
                Swal.fire({
                    title: 'Try Again.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            )

        // try {
        //     const response = await axios.post('https://reqres.in/api/login', { email: userData.email, password: userData.password });
        //     const token = await response.data.token;
        //     localStorage.setItem('access-token', token);
        //     localStorage.setItem('userEmail', userData.email);

        //     toast.success("Login Successful")
        //     setCurrentUser(userData.email);
        //     console.log(userData);
        //     navigate('/');

        // } catch (error) {
        //     console.error(error.response.data);
        //     toast.error(error.response.data)

        // }
    };

    return (
        <div className='h-screen bg-gradient-to-t from-teal-500'>
            <h1 className='text-xl font-bold text-center dark:text-white mt-16 max-w-[600px] mx-auto uppercase grid grid-cols-2'>
                <NavLink className={({ isActive }) =>
                    isActive ? "w-full p-2 bg-gradient-to-r from-green-500 to-sky-200" : ""} to='/login'>Login</NavLink>
                <NavLink className='w-full border-l-2 p-2 bg-gradient-to-r to-red-500 from-sky-200' to='/registration'>Registration</NavLink>
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-[600px] mx-auto p-20 border border-gray-300  shadow-xl bg-gray-200 dark:bg-gray-600 space-y-2">
                <div>
                    {/* <label htmlFor="email" className="block dark:text-white font-bold mb-2">Email</label> */}
                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                            },
                        }}
                        render={({ field }) => (
                            <div className='flex items-center bg-white border border-gray-300 gap-4 rounded-md'>
                                <FaEnvelope className='ms-2 text-3xl px-1' />
                                <input {...field} placeholder='Email' type="email" id="email" className="w-full p-2  rounded-md" />
                            </div>

                        )}
                    />
                    {errors.email && <p className="text-red-500 mt-[-10px] pt-2">{errors.email.message}</p>}
                </div>

                <div>
                    {/* <label htmlFor="password"  className="block dark:text-white font-bold mb-2">Password</label> */}
                    <Controller
                        name="password"
                        control={control}
                        rules={{
                            required: 'Password is required',
                            minLength: { value: 6, message: 'Password must be at least 6 characters long' },
                        }}
                        render={({ field }) => (
                            <div className='flex items-center bg-white border border-gray-300 gap-4 rounded-md'>
                                <FaUserLock className='ms-2 text-3xl px-1 ' />
                                <input {...field} placeholder='* * * * * *' type="password" id="password" className="w-full p-2  rounded-md" />
                            </div>
                        )}
                    />
                    {errors.password && <p className="text-red-500 mt-[-10px] pt-2">{errors.password.message}</p>}
                </div>

                <h3 className="text-lg dark:text-white">New Here? <span className="text-primary dark:text-blue-400 font-semibold"><Link to="/registration">Register</Link></span></h3>

                <div className="text-center mt-4 flex justify-center">
                    <button type="submit" className=" bg-gradient-to-b from-emerald-600 to-sky-500 text-white py-2 font-semibold px-8 rounded-md cursor-pointer shadow-xl">Login</button>
                </div>
            </form>
            <div className="max-w-[600px] mx-auto px-20 py-6 border border-gray-300 rounded-b-xl shadow-xl bg-gray-200 dark:bg-gray-600 space-y-2">
                <SocialLogin />
            </div>
            <Toaster
                position="top-right"
                reverseOrder
                containerStyle={{ padding: '10px', fontSize: '18px' }}
                containerClassName="custom-toast-container"
                toastClassName="custom-toast"
                toastOptions={{ duration: 2000, style: { background: '' } }}
            />
        </div>
    );
};

export default Login;