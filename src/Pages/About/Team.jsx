import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SectionTitle from '../../Component/SectionTitle';

const Team = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500
        });
      }, [])
    const members = [
        {
            photo: 'https://i.ibb.co/PYvRpLf/Capture1.png',
            name: 'Hasan Masud',
            designation: 'Founder & Director',
            facebook: 'https://www.facebook.com',
            linkedin: "https://www.linkedin.com",
            twitter: 'https://www.twitter.com'
        },
        {
            photo: 'https://i.ibb.co/6r64tHN/hipwee-Emma-Watson.png',
            name: 'Maliha Afreen',
            designation: 'Director - Finance',
            facebook: 'https://www.facebook.com',
            linkedin: "https://www.linkedin.com",
            twitter: 'https://www.twitter.com'
        },
        {
            photo: 'https://i.ibb.co/KVF6mgh/p1.jpg',
            name: 'Shahriar Hossain',
            designation: 'Chief Operating Officer',
            facebook: 'https://www.facebook.com',
            linkedin: "https://www.linkedin.com",
            twitter: 'https://www.twitter.com'
        },
        {
            photo: 'https://i.ibb.co/R2cML5W/MV5-BOWYz-Mzdk-Nj-At-NTU0-NS00-Yz-Vi-LWI3-NTMt-ZDc5-MTEz-OTA0-M2-I5-Xk-Ey-Xk-Fqc-Gde-QXVy-MTU4-MTM5.jpg',
            name: 'Rifat Ali Khan',
            designation: 'Chief Executive',
            facebook: 'https://www.facebook.com',
            linkedin: "https://www.linkedin.com",
            twitter: 'https://www.twitter.com'
        },
        {
            photo: 'https://i.ibb.co/3pk3wnJ/pngtree-vector-avatar-icon-png-image-889339.jpg',
            name: 'Azman Zaman',
            designation: 'Customer Support',
            facebook: 'https://www.facebook.com',
            linkedin: "https://www.linkedin.com",
            twitter: 'https://www.twitter.com'
        },

    ]
    return (
        <div className='p-8'>
            <SectionTitle heading={'Our Amazing Team'} subheading={'Team'} additionalStyle={'text-center'}/>
            {/* <div className='text-center space-y-2 my-8'>
                <p className='text-red-500 text-[32px] font-serif font-semibold'>Team</p><hr className='w-96 mx-auto' />
                <p className='text-black dark:text-white text-[48px] font-serif font-bold'>Our Amazing Team</p>
            </div> */}
            <div className=" md:flex justify-between grid grid-cols-2 py-8 gap-4 ">
                {
                    members.map(member => <div>
                        <div  data-aos="flip-up" className={`relative text-center`}>
                            <div className={`dark:bg-slate-300 pb-4 border-0`}>
                                <figure className='relative  text-transparent hover:text-white'>
                                    <img className='md:h-[300px] h-[200px] md:w-[300px] my-4 hover:brightness-50' src={member.photo} alt="" />
                                    <p className='flex absolute hover:block hover:flex  top-[40%] right-[25%]  text-3xl justify-between gap-4'>
                                        <Link to={member.facebook}><FaFacebook/> </Link>
                                        <Link to={member.linkedin}><FaLinkedin/> </Link>
                                        <Link to={member.twitter}><FaTwitter/> </Link>
                                    </p>
                                </figure>
                                <div className="member-body">
                                    <h2 className="member-location text-xl font-bold font-serif">
                                        {member.name}
                                    </h2>
                                    <p className='font-semibold text-lg text-slate-500'>{member.designation}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>

        </div>
    );
};

export default Team;