import React, { useContext, useState } from 'react';
import { Controller, useForm, } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

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
        <div className='h-screen '>
            <h1 className='text-3xl font-bold text-center dark:text-white py-8 uppercase'>login Now</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-[600px] mx-auto p-20 border border-gray-300 rounded-lg shadow-md bg-gray-200 dark:bg-gray-600">
                <div>
                    <label htmlFor="email" className="block dark:text-white font-bold mb-2">Email</label>
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
                            <input {...field} type="email" id="email" className="w-full p-2 mb-2 border border-gray-300 rounded-md" />
                        )}
                    />
                    {errors.email && <p className="text-red-500 mt-[-10px] mb-2">{errors.email.message}</p>}
                </div>

                <div>
                    <label htmlFor="password"  className="block dark:text-white font-bold mb-2">Password</label>
                    <Controller
                        name="password"
                        control={control}
                        rules={{
                            required: 'Password is required',
                            minLength: { value: 6, message: 'Password must be at least 6 characters long' },
                        }}
                        render={({ field }) => (
                            <input {...field} type="password" id="password" className="w-full p-2 mb-2 border border-gray-300 rounded-md" />
                        )}
                    />
                    {errors.password && <p className="text-red-500 mt-[-10px] mb-2">{errors.password.message}</p>}
                </div>

                <h3 className="text-lg dark:text-white">New Here? <span className="text-primary dark:text-blue-400 font-semibold"><Link to="/registration">Register</Link></span></h3>

                <div className="text-center mt-4 flex justify-center">
                    <button type="submit" className=" bg-blue-500 text-white p-2 font-semibold px-4 rounded-md cursor-pointer">Login</button>
                </div>
            </form>

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