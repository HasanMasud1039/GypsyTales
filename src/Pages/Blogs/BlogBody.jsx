import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import img1 from '../../assets/bg/m1.jpg'
import img2 from '../../assets/bg/m3.jpeg'
import img3 from '../../assets/bg/m21.jpg'
import img4 from '../../assets/spots/ctg.jpeg'
import img5 from '../../assets/spots/chit.jpg'
import img6 from '../../assets/spots/lal.jpg'
import img7 from '../../assets/spots/sund.jpg'
import img8 from '../../assets/spots/band.jpg'
import img9 from '../../assets/spots/syl.jpg'
import { GoDotFill } from "react-icons/go";

const BlogBody = () => {
    const blogs = [
        {
            "id": 1,
            "title": "Discovering Beauty: Top Tourist Spots in Bangladesh",
            "image": "https://isbsp.daffodilvarsity.edu.bd/wp-content/uploads/2018/11/shapla.jpg",
            "date": "2023-01-01",
            "description": "Bangladesh, a country adorned with lush landscapes, rich history, and vibrant culture, stands as an enchanting destination for travelers seeking unique experiences. From UNESCO-listed heritage sites to serene natural wonders, Bangladesh offers a tapestry of attractions that captivate the senses. In this journey of discovery, we'll explore the top tourist spots that showcase the beauty and diversity of this South Asian gem. Topping the list of must-visit places is the Sundarbans, the world's largest mangrove forest and a UNESCO World Heritage Site. This sprawling ecosystem, spread across the southwestern part of Bangladesh, is home to the elusive Bengal tiger. Travelers can explore the intricate network of waterways, witness the unique flora and fauna, and immerse themselves in the tranquility of this biodiverse haven. For history enthusiasts, the ancient city of Bagerhat beckons. Known for its stunning collection of historic mosques, Bagerhat is a UNESCO-listed site that transports visitors back in time. The Sixty Dome Mosque, with its impressive architecture, stands as a testament to the region's medieval glory. The city's rich history comes alive as you stroll through its narrow lanes, discovering the remnants of a bygone era. Cox's Bazar, boasting the world's longest natural sea beach, is a coastal paradise that attracts sun-seekers and beach lovers alike. Miles of golden sands stretch along the Bay of Bengal, providing a serene retreat for those looking to unwind. The juxtaposition of vibrant local culture and the soothing sound of the waves makes Cox's Bazar a quintessential destination for relaxation and rejuvenation. Dhaka, the bustling capital of Bangladesh, is a vibrant hub of culture and history. The Lalbagh Fort, Ahsan Manzil, and the National Museum are just a few of the landmarks that showcase the city's architectural and cultural heritage. The lively markets, such as Shankhari Bazar and New Market, offer a taste of local life and crafts.",
        },
        {
            "id": 2,
            "title": "Navigating Turbulence: The Impact of COVID-19 on Tourism in Bangladesh",
            "image": "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blogiJR0K1sWVNFzinGC_l4r3IdsVLyxZfkr.jpg",
            "date": "2023-02-15",
            "description": "The COVID-19 pandemic, an unprecedented global health crisis, has sent shockwaves through various sectors, with tourism being one of the hardest hit. Bangladesh, a country with a burgeoning tourism industry, faced immense challenges as the virus swept across the globe. In this blog, we will delve into the profound impact of COVID-19 on tourism in Bangladesh, exploring the initial setbacks, adaptive strategies, and the path to recovery. As news of the novel coronavirus surfaced, the world watched in apprehension. For Bangladesh, a nation embracing its potential as a tourist destination, the sudden cessation of international travel had immediate consequences. Airports, once bustling hubs of activity, fell silent, and hotels stood vacant. The vibrant streets of Dhaka and the serene landscapes of Cox's Bazar echoed with an eerie quiet. The statistical decline in tourist arrivals was staggering. Bangladesh, known for its rich cultural heritage, historical sites, and natural wonders, witnessed a sharp drop in international visitors. The economic ramifications were swift and severe, affecting not only the hospitality sector but also the livelihoods of those dependent on tourism. In the face of adversity, the resilience of Bangladesh's tourism industry shone through. Stakeholders, from tour operators to hotel owners, swiftly adapted to the new normal. Health and safety protocols were implemented rigorously, and technology became a key ally. Virtual tours and online experiences emerged as creative ways to keep the spirit of exploration alive. However, challenges persisted. The lack of a coordinated international response, uncertainty around vaccine distribution, and fluctuating travel restrictions continued to impact the recovery process. Bangladesh's tourism sector had to learn to adapt swiftly, emphasizing flexibility and resilience in the face of ongoing uncertainty.",
        },
        {
            "id": 3,
            "title": "Unraveling the Threads: Russia-Ukraine War and Its Ripple Effects on Tourism",
            "image": "https://www.itij.com/sites/itij/files/2023-01/itij264-local-conflict-header.jpg",
            "date": "2023-03-20",
            "description": "The geopolitical landscape is in constant flux, and events on the global stage often have far-reaching consequences. The Russia-Ukraine war, a conflict that has dominated headlines and stirred international tensions, extends its impact beyond politics and economics to touch various aspects of our interconnected world. One such area significantly affected is the global tourism industry. In this blog, we will explore the intricate threads that connect the Russia-Ukraine conflict to the world of travel and tourism, understanding how these ripple effects shape the choices of tourists and impact destinations far beyond the conflict zone. The tourism industry, known for its sensitivity to geopolitical events, is a barometer of global stability. The Russia-Ukraine war, with its geopolitical ramifications, has led to a significant decline in international tourism. The fear of uncertainties, travel advisories, and the redirection of resources toward conflict resolution have all contributed to a climate where potential tourists hesitate to embark on journey. As conflict isrupts traditional travel routes and popular destinations, tourists are compelled to reconsider their plans. Countries in proximity to the conflict zone may experience a decline in visitor numbers due to safety concerns, while alternative destinations farther away may witness an unexpected surge in popularity. These shifts in travel patterns reshape the tourism landscape, impacting local economies that rely heavily on the influx of visitors.Tourism is a major economic driver for many nations, contributing significantly to GDP and employment. The Russia-Ukraine conflict disrupts this economic engine, leading to losses in revenue for countries directly affected and those indirectly impacted by the decline in global tourism. Businesses reliant on the travel industry, such as hotels, restaurants",
        },
        {
            "id": 4,
            "title": "Bangladesh Beckons: Why You Should Visit",
            "image": "https://wondrousdrifter.com/wp-content/uploads/2022/08/reasons-to-visit-bangladesh.jpg",
            "date": "2023-04-10",
            "description": "Nestled in South Asia, Bangladesh is a country that often remains undiscovered by many globetrotters. However, this unassuming land is a hidden gem, waiting to be explored. From its vibrant cultural heritage to its breathtaking landscapes, Bangladesh beckons travelers with a unique tapestry of experiences that leave an indelible mark on those who venture into its embrace.       Bangladesh is a melting pot of cultures, where history and tradition blend seamlessly. The archaeological wonders of Bagerhat, a UNESCO World Heritage Site, showcase the rich history of the medieval Muslim city. The Sundarbans, a UNESCO-listed mangrove forest, is not only a natural wonder but also home to the elusive Bengal tiger. Explore the Lalbagh Fort in Dhaka, where the echoes of Mughal architecture tell tales of the city's storied past. Bangladesh's cultural heritage is not confined to monuments; it is alive in the festivals, music, and dance that grace the streets.          What sets Bangladesh apart is the warmth of its people. Hospitality here is not just a gesture; it's a way of life. Locals welcome visitors with open arms, eager to share their stories and traditions. Whether wandering through bustling markets or rural villages, you'll find a sense of community that transcends language barriers. The genuine smiles of the Bangladeshi people create a welcoming atmosphere that turns a simple visit into an unforgettable journey.     For nature enthusiasts, Bangladesh offers a diverse landscape that captivates the senses. The serene Srimangal region, known as the 'Tea Capital of Bangladesh,' invites you to explore lush tea gardens and discover the art of tea production. The Sylhet Division, with its rolling hills and tea estates, provides a tranquil escape. Meanwhile, the Cox's Bazar, with its endless sandy beaches along the Bay of Bengal, beckons sun-seekers and water enthusiasts.       No journey is complete without savoring the local cuisine. Bangladesh boasts a rich culinary heritage, with a variety of flavors that tantalize taste buds. From the renowned biryanis to mouth-watering street food like fuchka (pani puri) and jhalmuri, every bite is a journey into the heart of Bangladeshi culture. Dhaka's bustling food streets and traditional eateries offer a gastronomic adventure that adds another layer to your travel experience.          Discover the artistry and craftsmanship that define Bangladesh. The traditional Jamdani sarees, known for their intricate handwoven patterns, are a testament to the country's artistic heritage. Visit local markets where artisans showcase their skills in pottery, weaving, and woodcraft. The vibrant colors and meticulous craftsmanship found in Bangladeshi handicrafts reflect a deep connection to the land's cultural roots.",
        },
        {
            "id": 5,
            "title": "Limitations and Challenges: Tourism in Bangladesh",
            "image": "https://www.ekoenergy.org/wp-content/uploads/post-Beach-sea-coast-tourism-waste-trash-pollution-e1544434278746-scaled-e1581425965557.jpg",
            "date": "2023-05-05",
            "description": "Bangladesh, a land of cultural richness and natural wonders, has increasingly garnered attention as a potential tourist destination. However, like any burgeoning tourism industry, Bangladesh faces its fair share of limitations and challenges that impact its growth and potential. In this blog, we delve into the various hurdles that the country encounters in its quest to become a prominent player in the global tourism arena.1. Infrastructure Bottlenecks: One of the primary challenges hampering the growth of tourism in Bangladesh is the state of its infrastructure. While the country boasts historical sites, serene landscapes, and vibrant cities, the lack of well-maintained roads, airports, and public transportation can pose a hindrance to seamless travel experiences. Improving and expanding the infrastructure is crucial for attracting and accommodating a growing number of tourists.2. Perception and Awareness. Another obstacle Bangladesh faces is the misperception about its safety and attractions. The country's image is sometimes overshadowed by negative stereotypes and lack of awareness about its diverse cultural and natural offerings. A comprehensive marketing strategy is essential to reshape perceptions and highlight the hidden gems that make Bangladesh a unique and worthwhile destination.3. Limited Promotional Efforts:  Despite its tourism potential, Bangladesh has not been as proactive in promoting itself on the global stage compared to some of its regional counterparts. Effective marketing campaigns, both online and offline, are essential to reach a broader audience and showcase the richness of the country's tourism offerings.4. Environmental Sustainability:          The delicate balance between tourism and environmental conservation is a pressing concern in Bangladesh. With attractions like the Sundarbans, the world's largest mangrove forest, and diverse ecosystems, the need for sustainable tourism practices is paramount. Striking a balance between attracting tourists and preserving the natural beauty of these areas is a delicate but necessary task.                **5. Seasonal Vulnerability:          Bangladesh is prone to seasonal challenges, such as monsoons and cyclones, which can disrupt travel plans and affect the accessibility of certain regions. Developing strategies to mitigate the impact of these seasonal variations and providing alternative attractions during unfavorable times can contribute to a more consistent tourist influx.        **6. Limited Tourist Facilities:          While Bangladesh offers a myriad of cultural and historical attractions, the lack of well-developed tourist facilities, such as hotels, restaurants, and recreational areas, can hinder the overall visitor experience. Investing in the development of these",
        },
        {
            "id": 6,
            "title": "Revitalizing the Essence: Government Initiatives in Bangladesh's Tourism Sector",
            "image": "https://www.tbsnews.net/sites/default/files/styles/infograph/public/images/2023/09/27/p5_infograph_tourism-master-plan_final_online_0.jpg",
            "date": "2023-06-15",
            "description": "Bangladesh, with its rich cultural heritage and diverse landscapes, is poised to emerge as a significant player in the global tourism industry. Recognizing the potential of this sector, the government of Bangladesh has implemented a series of strategic initiatives aimed at revitalizing and boosting the essence of tourism. In this blog, we explore the key measures undertaken by the government to elevate Bangladesh as a sought-after destination on the world tourism map.          **1. Infrastructure Development:          The cornerstone of any successful tourism industry is a robust infrastructure. The Bangladeshi government has demonstrated its commitment to this principle by investing significantly in the development and maintenance of transportation networks, including roads, airports, and public transit. This not only facilitates easier access to tourist destinations but also enhances the overall travel experience for both domestic and international visitors.  2. Cultural Heritage Preservation:          Bangladesh is home to a wealth of historical and cultural treasures, from ancient archaeological sites to vibrant traditions. The government has initiated projects to preserve and showcase these assets, ensuring that they remain integral to the nation's identity while also becoming major attractions for tourists. Efforts to restore and maintain heritage sites contribute to the cultural richness that draws travelers seeking authentic experiences.         **3. Tourism Marketing and Promotion:          To counter misperceptions and increase global awareness, the government has embarked on extensive marketing and promotional campaigns. Leveraging both traditional and digital platforms, these initiatives aim to highlight the beauty, hospitality, and unique offerings of Bangladesh. Participation in international travel fairs and collaborations with global tourism organizations further contribute to the nation's visibility on the world stage.          **4. Incentives for Private Investment:          Recognizing the pivotal role of the private sector in tourism development, the government has introduced various incentives to encourage private investment in the industry. This includes tax breaks, financial assistance, and streamlined processes for establishing tourism-related businesses. The synergy between public and private sectors is vital for fostering innovation and sustainable growth in the tourism sector.      **5. Community Involvement and Sustainable Practices:          To ensure that tourism benefits local communities and contributes to sustainable development, the government encourages community involvement in tourism activities. This includes promoting homestays, community-based tourism initiatives, and emphasizing sustainable",

        },
        {
            "id": 7,
            "title": "Seasons of Splendor: When to Visit Bangladesh's Tourist Spots",
            "image": "https://www.besonline.in/blog/wp-content/uploads/2020/12/places-to-visit-in-bangladesh.jpg",
            "date": "2023-07-20",
            "description": "Embarking on a journey to Bangladesh promises a tapestry of experiences, from cultural immersion to encounters with breathtaking natural beauty. Understanding the best times to visit this South Asian gem is crucial for travelers seeking to make the most of their exploration. In this blog, we unravel the seasonal nuances and offer insights into the optimal times to explore Bangladesh's diverse tourist spots.         **1. The Refreshing Winters (November to February):          For a temperate and pleasant experience, consider planning your visit during the winter months. Bangladesh experiences cooler temperatures, ranging from 10 to 20 degrees Celsius, making it an ideal time to explore the cultural wonders of cities like Dhaka and historical sites like Bagerhat. The winter season also provides an excellent opportunity to visit the Sundarbans, the world's largest mangrove forest, and enjoy boat cruises in the serene rivers.       **2. Blooms of Spring (March to May):          As winter gives way to spring, Bangladesh comes alive with vibrant blossoms and a lively atmosphere. This season is particularly favorable for exploring the lush landscapes of Srimangal, often referred to as the Tea Capital of Bangladesh. The tea gardens are in full bloom during this period, creating a picturesque setting for nature enthusiasts and photographers.         **3. Monsoons and the Green Canvas (June to September):          While monsoons bring heavy rainfall to Bangladesh, transforming the landscape into a lush green canvas, this season is not without its challenges. Travelers should be prepared for occasional showers and plan their visits to avoid the peak of the monsoon. However, for those who appreciate the beauty of rain-drenched landscapes, the monsoon season can be an enchanting time to witness Bangladesh's natural splendor.     **4. Festive Autumns (October):     Autumn marks the end of the monsoon season, and the country begins to dry up. October provides a transitional period with clearer skies and a comfortable climate. This month is an excellent time to explore archaeological sites like Mahasthangarh and the ancient city of Panam Nagar. Additionally, visitors can partake in traditional festivals, such as Durga Puja, which adds a cultural touch to the travel experience.         **5. Consideration for Religious Festivals:          For travelers interested in experiencing the vibrant religious and cultural festivals of Bangladesh, planning a visit during major celebrations like Eid ul-Fitr, Durga Puja, or the Bengali New Year (Pohela Boishakh) can provide an immersive cultural experience. However, it's essential to be aware that these festivals can also lead to increased crowds and higher demand for accommodations.",
        }
    ]

    const [expandedBlogs, setExpandedBlogs] = useState([]);

    const toggleReadMore = (blogId) => {
        setExpandedBlogs((prevExpanded) => {
            if (prevExpanded.includes(blogId)) {
                return prevExpanded.filter((id) => id !== blogId);
            } else {
                return [...prevExpanded, blogId];
            }
        });
    }
    return (
        <div className='md:flex justify-between py-12'>
            <div className='min-h-screen md:w-[65%] border-1 dark:text-white'>
                {
                    blogs.map(blog => (
                        <div className='space-y-2 '>
                            <img className='h-[500px] w-full pb-2' src={blog.image} alt="" />
                            <div className='px-4'>
                                <div className='flex gap-8 md:text-xl font-semibold'>
                                    <p>{blog.date}</p>
                                    <p className=' gap-2 join'><GoDotFill className='mt-1'/>Admin</p>
                                </div>
                                <p className='font-bold md:text-[34px] text-[24px]'>{blog.title}</p>
                                <p className='text-lg'>
                                    {expandedBlogs.includes(blog.id) ? blog.description : `${blog.description.slice(0, 200)}...`}
                                </p>
                                <button className='md:text-xl text-red-600 font-semibold pb-8' onClick={() => toggleReadMore(blog.id)}>
                                    {expandedBlogs.includes(blog.id) ? '...Read Less' : 'Read More...'}
                                </button>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className='min-h-screen md:w-[32%] dark:text-white  space-y-8'>

                <div className="p-8 bg-zinc-100 dark:bg-zinc-400 space-y-2">
                    <p className='text-xl md:text-2xl py-2  font-bold'>Search</p>
                    <div className='join'>
                        <input className="input join-item" placeholder="Type Anything..." />
                        <button className="text-[28px] bg-white  p-2 join-item"><CiSearch className='dark:text-black'/></button>
                    </div>
                </div>

                <div className="p-8 bg-zinc-100 dark:bg-zinc-400 space-y-2">
                    <p className='text-xl md:text-2xl py-2  font-bold'>Categories</p>
                    <div>
                        <ul className='text-lg font-semibold text-slate-500 dark:text-slate-100'>
                            <a>Company News (01)</a>
                            <li>Travel Guide (07)</li>
                            <li>Tourist Spot (05)</li>
                            <li>Social Media (05)</li>
                            <li>Travel Time (09)</li>
                        </ul>
                    </div>
                </div>

                <div className="p-4 bg-zinc-100 dark:bg-zinc-400 space-y-2">
                    <p className='text-xl md:text-2xl py-2 font-bold'>Recent Posts</p>
                    <div className='space-y-4 '>
                        {
                             blogs.slice(0, 3).map(blog => (
                                <div className='flex gap-4'>
                                    <img className='w-32 h-28' src={blog.image} alt="" />
                                    <div>
                                        <p className='flex space-x-8 text-slate-700 font-semibold'><span>{blog.date}</span><GoDotFill className='mt-1'/>Admin</p>
                                        <p className='text-lg font-bold'>{blog.title}</p>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="p-8 bg-zinc-100 dark:bg-zinc-400 space-y-2">
                    <p className='text-xl md:text-2xl py-2  font-bold'>Tags</p>
                    <div className='join md:flex flex-wrap text-center gap-2 dark:text-slate-50 text-slate-600'>
                        <p className='p-2 border-2 rounded-lg font-semibold '>Activity</p>
                        <p className='p-2 border-2 rounded-lg font-semibold '>Destination</p>
                        <p className='p-2 border-2 rounded-lg font-semibold '>Sea</p>
                        <p className='p-2 border-2 rounded-lg font-semibold '>Mountain</p>
                        <p className='p-2 border-2 rounded-lg font-semibold '>Lake</p>
                        <p className='p-2 border-2 rounded-lg font-semibold '>River</p>
                        <p className='p-2 border-2 rounded-lg font-semibold '>Apex</p>
                        <p className='p-2 border-2 rounded-lg font-semibold '>Boat</p>
                        <p className='p-2 border-2 rounded-lg font-semibold '>Facebook</p>
                        <p className='p-2 border-2 rounded-lg font-semibold '>News</p>
                        <p className='p-2 border-2 rounded-lg font-semibold '>Coral</p>
                        <p className='p-2 border-2 rounded-lg font-semibold '>Food</p>
                        <p className='p-2 border-2 rounded-lg font-semibold '>Waterfall</p>
                        <p className='p-2 border-2 rounded-lg font-semibold '>Ship</p>

                    </div>
                </div>

                <div className="md:p-8 p-2 bg-zinc-100 dark:bg-zinc-400 space-y-2">
                    <p className='text-xl md:text-2xl py-2  font-bold'>Gallery</p>
                    <div className='join'>
                        <div className='grid grid-cols-3 gap-2 p-4'>
                            <img className='w-28 h-28' src={img1} alt="" />
                            <img className='w-28 h-28' src={img2} alt="" />
                            <img className='w-28 h-28' src={img3} alt="" />
                            <img className='w-28 h-28' src={img4} alt="" />
                            <img className='w-28 h-28' src={img5} alt="" />
                            <img className='w-28 h-28' src={img6} alt="" />
                            <img className='w-28 h-28' src={img7} alt="" />
                            <img className='w-28 h-28' src={img8} alt="" />
                            <img className='w-28 h-28' src={img9} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogBody;