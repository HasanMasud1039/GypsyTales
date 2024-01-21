import React from 'react';
import { Link } from 'react-router-dom';

const BlogBanner = () => {
    return (
        <div>
            <div>
                <div className='relative bg-green-900'>
                    <img  className='h-96 md:w-full w-fit saturate-150 brightness-50 contrast-100' src='https://wallpaperaccess.com/full/709104.jpg' alt="" />
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-8 md:space-y-2'>
                        <p style={{ fontFamily: 'Chakra Petch' }} className='text-[42px] text-[#10FC05] font-bold font-serif'>Our Blog</p>
                        <p style={{ fontFamily: 'Chakra Petch' }} className='text-[21px] text-white font-serif'><Link to='/'>Home</Link> / <span className='text-[#10FC05]'>Blog</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogBanner;