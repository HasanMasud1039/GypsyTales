import React, { useContext, useState } from 'react';
import { Controller, useForm, } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import { FaEnvelope, FaImage, FaLocationArrow, FaPhoneAlt, FaUserAlt, FaUserLock } from 'react-icons/fa';


const Registration = () => {

    const { handleSubmit, control, formState: { errors }, reset } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL, data?.contact, data?.address)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, photo: data.photoURL, contact: data?.contact, address: data?.address }
                        fetch('https://gypsy-tales-server-hasanmasud1039.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    };

    return (
        <div className='h-screen bg-gradient-to-t from-teal-500'>
            <h1 className='text-xl font-bold text-center dark:text-white mt-16 max-w-[600px] mx-auto uppercase  grid grid-cols-2'>
                <NavLink className='w-full p-2 border-r-2 bg-gradient-to-r from-red-500 to-sky-200' to='/login'>Login</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? "w-full p-2  bg-gradient-to-l from-green-500 to-sky-200" : ""} to='/registration'>Registration </NavLink>
            </h1>
            <form className='max-w-[600px] mx-auto p-20 border border-gray-300 rounded-b-xl shadow-xl bg-gray-200 dark:bg-gray-600 space-y-4' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    {/* <label htmlFor="name" className="block font-bold pt-2 dark:text-white">Name</label> */}
                    <Controller
                        name="name"
                        control={control}
                        rules={{ required: 'Name is required' }}
                        render={({ field }) => (
                            <div className='flex items-center gap-4 rounded-md'>
                                <FaUserAlt className='ms-2 text-3xl px-1 dark:text-white' />
                                <input {...field} type="text" id="name" placeholder='Name' className="w-full p-2 border border-gray-300 rounded-md" />
                            </div>

                        )}
                    />
                    {errors.name && <p className="text-red-500 mt-[-10px] pt-2">{errors.name.message}</p>}
                </div>

                <div>
                    {/* <label htmlFor="email" className="block dark:text-white font-bold pt-2">Email</label> */}
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
                        render={({ field }) =>
                        (
                            <div className='flex items-center gap-4 rounded-md dark:text-white'>
                            <FaEnvelope className='ms-2 text-3xl px-1' />
                            <input {...field} type="email" id="email" placeholder='Email' className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        )
                    } />
                    {errors.email && <p className="text-red-500 mt-[-10px] pt-2">{errors.email.message}</p>}
                </div>

                <div>
                    {/* <label htmlFor="password" className="block dark:text-white font-bold pt-2">Password</label> */}
                    <Controller
                        name="password"
                        control={control}
                        rules={{
                            required: 'Password is required',
                            minLength: { value: 6, message: 'Password must be at least 6 characters long' },
                        }}
                        render={({ field }) =>                         (
                            <div className='flex items-center gap-4 rounded-md'>
                            <FaUserLock className='ms-2 text-3xl px-1 dark:text-white' />
                            <input {...field} type="password" id="password" placeholder='Password' className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        )}
                    />
                    {errors.password && <p className="text-red-500 mt-[-10px] pt-2">{errors.password.message}</p>}
                </div>

                <div>
                    {/* <label htmlFor="photoURL" className="block font-bold pt-2 dark:text-white">Photo URL</label> */}
                    <Controller
                        name="photoURL"
                        control={control}
                        rules={{ required: 'Photo URL is required' }}
                        render={({ field }) =>                         (
                            <div className='flex items-center gap-4 rounded-md'>
                            <FaImage className='ms-2 text-3xl px-1 dark:text-white' />
                            <input {...field} type="text" id="photoURL" placeholder='Photo URL' className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        )}
                    />
                    {errors?.photoURL && <p className="text-red-500 mt-[-10px] pt-2">{errors?.photoURL.message}</p>}
                </div>
                <div>
                    {/* <label htmlFor="contact" className="block font-bold pt-2 dark:text-white">Contact</label> */}
                    <Controller
                        name="contact"
                        control={control}
                        rules={{ required: 'Contact is required' }}
                        render={({ field }) =>                         (
                            <div className='flex items-center gap-4 rounded-md'>
                            <FaPhoneAlt className='ms-2 text-3xl px-1 dark:text-white' />
                            <input {...field} type="text" id="contact" placeholder='Contact No.' className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        )}
                    />
                    {errors?.contact && <p className="text-red-500 mt-[-10px] pt-2">{errors?.contact.message}</p>}
                </div>
                <div>
                    {/* <label htmlFor="address" className="block font-bold pt-2 dark:text-white">Address (Optional)</label> */}
                    <Controller
                        name="address"
                        control={control}
                        rules={{ required: 'Address is required' }}
                        render={({ field }) =>                         (
                            <div className='flex items-center gap-4 rounded-md'>
                            <FaLocationArrow className='ms-2 text-3xl px-1 dark:text-white' />
                            <input {...field} type="text" id="address" placeholder='Address' className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        )}
                    />
                    {errors?.address && <p className="text-red-500 mt-[-10px] pt-2">{errors?.address.message}</p>}
                </div>

                <h3 className="text-lg dark:text-white">Already have an account? <span className="text-primary dark:text-blue-400 font-semibold"><Link to="/login">Login</Link></span></h3>

                <div className="text-center mt-4 flex justify-center">
                    <button type="submit" className="bg-gradient-to-b from-emerald-600 to-sky-500 text-white py-2 font-semibold px-8 rounded-md cursor-pointer shadow-xl">Register</button>
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

export default Registration;