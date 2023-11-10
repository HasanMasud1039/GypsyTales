import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/navigation';
import img1 from '../../assets/bg/m2.webp'
import img2 from '../../assets/bg/m21.jpg'
import img3 from '../../assets/bg/m3.jpeg'
import ic from '../../assets/testimonial/ic.png'

const Testimonials_About = () => {
    const reviews = [
        {
            id: 1,
            name: 'Hasan Masud - Photographer',
            review: 'GypsyTales made our dream vacation a reality! From the moment we contacted them, they provided exceptional service and personalized attention. They meticulously planned our itinerary, ensuring that we got the most out of our trip. The experiences they arranged were truly unforgettable. We could not be happier with our choice of GypsyTales for our travel partner.',
        },
        {
            id: 2,
            name: 'Maliha Mehjabin - Entrepreneur',
            review: "Our honeymoon, organized by GypsyTales, was nothing short of a fairy tale. From romantic sunsets in exotic locations to intimate dinners at hidden gems, every moment was a page from a love story. Their ability to turn dreams into reality is unparalleled. GypsyTales has left us with beautiful memories that we will cherish for a lifetime.",
        },
        {
            id: 3,
            name: 'Azman Amin - Software Engineer, Google',
            review: "I can not speak highly enough about GypsyTales. Their team's dedication to creating memorable journeys is second to none. The attention to detail, seamless logistics, and excellent customer service are truly commendable. Our recent adventure with them exceeded all expectations. We're already planning our next trip with GypsyTales!",
        }
    ]
    return (
        <div className='py-8'>
            <div className='flex justify-between'>
                <div className='flex p-12 ms-4 relative'>
                    <img className='h-64 w-80 border-4 absolute rotate-[-15deg] left-[90%]' src={img1} alt="" />
                    <img className='h-64 w-80 rotate-[-12deg] border-4' src={img3} alt="" />
                    <img className='h-64 w-80 border-4 absolute rotate-[-5deg] left-[60%] top-[50%]' src={img2} alt="" />
                </div>
                <div className='w-[50%] px-4'>
                    <div className='w-full'>
                        <div className='text-center space-y-2'>
                            <p className='text-red-500 text-[32px] font-serif font-semibold'>Testimonials</p><hr className='w-96 mx-auto' />
                            <p className='text-black text-[48px] font-serif font-bold'>What Travelers Say</p>
                        </div>

                        <img className='w-24  pt-2 mx-auto' src={ic} alt="" />
                        <Swiper navigation={true} spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 5500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper">
                            {
                                reviews.map(review => <SwiperSlide key={review.id}>
                                    <div className="flex flex-col text-center items-center mx-24 my-4">
                                        <p className="text-xl my-10 ">"{review.review}"</p>
                                        <h3 className=" text-xl text-orange-400">-{review.name}</h3>
                                    </div>
                                </SwiperSlide>)
                            }
                        </Swiper>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Testimonials_About;