import React from 'react';

const BlogBanner = () => {
    return (
        <div>
            <div>
                <div className='relative bg-green-900 w-screen'>
                    <img  className='h-96 md:w-full w-fit saturate-50' src='https://wallpaperaccess.com/full/709104.jpg' alt="" />
                    <div className='absolute md:top-[40%] top-[70%] md:left-[30%] left-[25%] text-center space-y-8 md:space-y-16'>
                        <p style={{ fontFamily: 'Chakra Petch' }} className='text-[42px] text-red-600 font-bold font-serif'>Our Blog</p>
                        <p style={{ fontFamily: 'Chakra Petch' }} className='text-[28px]  font-bold text-white font-serif'>Home / <span className='text-red-600'>Blog</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogBanner;