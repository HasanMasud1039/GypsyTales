import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/navigation';
import photo1 from '../../assets/testimonial/p1.JPG'
import photo2 from '../../assets/testimonial/p2.JPG'
import photo3 from '../../assets/testimonial/p3.JPG'
import photo4 from '../../assets/testimonial/p4.JPG'
import photo5 from '../../assets/testimonial/p5.JPG'
import photo6 from '../../assets/testimonial/p8.JPG'
import photo7 from '../../assets/testimonial/p7.JPG'
import photo8 from '../../assets/testimonial/p7.JPG'
import ic from '../../assets/testimonial/ic.png'

const Testimonial = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200
        });
      }, [])
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
        },
        {
            id: 4,
            name: 'Alan Donald - Traveler, USA',
            review: "If you're looking for a travel agency that goes above and beyond, look no further than GypsyTales. Our family vacation was perfectly executed, thanks to their expertise. They carefully tailored our trip to our interests and preferences, ensuring everyone had a fantastic time. GypsyTales made our travel experience effortless and extraordinary.",
        },
        {
            id: 5,
            name: 'Nakaya Yamamoto - Traveler, Japan',
            review: "GypsyTales turned our wanderlust into a reality. Their deep knowledge of destinations, combined with their passion for travel, shines through in every aspect of their service. They took care of every detail, from accommodations to activities, making our trip stress-free. We're so grateful for the amazing memories we created with GypsyTales. Highly recommended!",
        },
        {
            id: 6,
            name: 'Shariar Ucchash - MD, Amazon Bangladesh',
            review: "GypsyTales is more than just a travel agency; they're dream-weavers! We approached them with a vague idea of what we wanted, and they turned it into a breathtaking adventure. Their ability to curate unique experiences and uncover hidden gems is exceptional. Thanks to GypsyTales, we had a journey filled with magic, and we can't wait for our next one!",
        },
        {
            id: 7,
            name: 'A.M.A.S. Rifat - DC, Laxmipur, Bangladesh',
            review: "The team at GypsyTales is the epitome of professionalism and expertise. They guided us through the entire planning process with patience and a deep understanding of our desires. What sets GypsyTales apart is their commitment to sustainability and responsible travel. We were able to explore the world while minimizing our ecological footprint, which left us with a sense of fulfillment and responsibility.",
        },
    ]
    return (
        <div>
            <div className=' space-y-2 my-8 text-center'>
                <p className='text-blue-800 text-[32px] font-serif font-semibold'>Testimonial</p>
                <p className='text-black text-[48px] font-serif font-bold'>What Our Customer <br /> Says About Us</p>
            </div>

            <div className='w-full md:flex justify-between'>
                <div className=' md:w-[25%]  relative'>
                    <img data-aos="zoom-in" className='w-40 h-40 rounded-full absolute right-[70%] md:top-[10%] md:left-10' src={photo1} alt="" />
                    <img data-aos="zoom-in"  className='w-32 h-32 rounded-full absolute right-[20%] top-[40%] ' src={photo2} alt="" />
                    <img data-aos="zoom-in"  className='w-24 h-24 rounded-full  absolute md:right-[70%] right-[50%] top-[60%]' src={photo3} alt="" />
                    <img data-aos="zoom-in"  className='w-28  rounded-full absolute right-[2%] md:right-[30%] top-[70%] ' src={photo4} alt="" />
                </div>
                <div className='md:w-[50%] '>

                    <img className='w-24  md:pt-12 pt-32 mx-auto' src={ic} alt="" />
                    <Swiper navigation={true} spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                       className="mySwiper">
                        {
                            reviews.map(review => <SwiperSlide key={review.id}>
                                <div className="flex flex-col text-center items-center mx-24 md:my-16">
                                    <p className="text-xl my-10 ">"{review.review}"</p>
                                    <h3 className=" text-xl text-orange-400">-{review.name}</h3>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
                <div className='relative md:w-[25%]'>
                    <img data-aos="zoom-in"  className='w-40 h-40 rounded-full absolute md:right-[70%] top-[10%] left-10' src={photo6} alt="" />
                    <img data-aos="zoom-in"  className='w-32 h-32 rounded-full absolute right-[20%] top-[40%] ' src={photo7} alt="" />
                    <img data-aos="zoom-in"  className='w-24 h-24 rounded-full  absolute right-[70%] top-[60%]' src={photo8} alt="" />
                    <img data-aos="zoom-in"  className='w-28  rounded-full absolute right-[30%] top-[70%] ' src={photo5} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Testimonial;