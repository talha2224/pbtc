import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import event1 from '../assets/event-1.svg'
import event2 from '../assets/event-2.jpg'
import event3 from '../assets/event-3.svg'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { FaAddressCard, FaUserNinja } from "react-icons/fa6";
import { FaBible, FaGlobeAsia } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { IoMdArrowBack, IoMdMailOpen, IoMdPersonAdd } from "react-icons/io";
import Footer from '../components/Footer'

const EventsPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const events = [
        {
            title: 'Global Prayer & Deliverance Night',
            description: 'A powerful night of healing, miracles, and breakthroughs.',
            date: '10 February',
            range: 'February 10-12, 2025',
            description2: "Join us for a powerful night of prayer, healing, and breakthroughs as we seek divine intervention together. Experience live prophetic sessions, deliverance, and testimonies from believers worldwide. This life-changing virtual event is open to all—come expectant and leave transformed! Join us for a powerful night of prayer, healing, and breakthroughs as we seek divine intervention together. Experience live prophetic sessions, deliverance, and testimonies from believers worldwide. This life-changing virtual event is open to all—come expectant and leave transformed!"
        },
        {
            title: 'PBTC Evangelism Conference',
            description: 'Learn innovative ways to spread the Gospel worldwide',
            date: '16 February',
            range: 'February 16-20, 2025',
            description2: "Join us for a powerful night of prayer, healing, and breakthroughs as we seek divine intervention together. Experience live prophetic sessions, deliverance, and testimonies from believers worldwide. This life-changing virtual event is open to all—come expectant and leave transformed! Join us for a powerful night of prayer, healing, and breakthroughs as we seek divine intervention together. Experience live prophetic sessions, deliverance, and testimonies from believers worldwide. This life-changing virtual event is open to all—come expectant and leave transformed!"
        },
        {
            title: 'PBTC Evangelism Conference',
            description: 'Learn innovative ways to spread the Gospel worldwide',
            date: '28 February',
            range: 'February 28, 2025',
            description2: "Join us for a powerful night of prayer, healing, and breakthroughs as we seek divine intervention together. Experience live prophetic sessions, deliverance, and testimonies from believers worldwide. This life-changing virtual event is open to all—come expectant and leave transformed! Join us for a powerful night of prayer, healing, and breakthroughs as we seek divine intervention together. Experience live prophetic sessions, deliverance, and testimonies from believers worldwide. This life-changing virtual event is open to all—come expectant and leave transformed!"
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div>
            <Navbar />

            <div className='mt-10 flex justify-center items-center flex-col'>
                <h1 className="text-5xl font-semibold text-center">PBTC Timeline & Events</h1>
                <p className="mt-2 text-sm text-[#4E4E4E] text-center">Explore our past achievements, upcoming events, and the milestones <br /> that shape PBTC Worldwide Ministries.</p>
                <button className='bg-[#E67E22] text-[#fff] text-sm px-6 py-2 rounded-3xl mt-5 cursor-pointer'>Explore events</button>
            </div>


            <div className='p-10'>
                <h1 className='text-center text-xl font-semibold'>What Our Community Says About Us</h1>
                <div className='flex justify-center items-center mt-[3rem]'>

                    <div className='w-[98%] xl:w-[75%] bg-[#F2F4F3]  rounded-md flex justify-center items-center p-10 overflow-x-auto xl:overflow-visible'>

                        <div className='mr-[1rem]'>
                            <img className='rounded-lg w-[20rem]' src={event1} alt="" />
                        </div>

                        <div className='mr-[1rem]'>
                            <img className='rounded-lg w-[20rem]' src={event2} alt="" />
                        </div>

                        <div className='mr-[1rem]'>
                            <img className='rounded-lg w-[20rem]' src={event3} alt="" />
                        </div>


                    </div>

                </div>
            </div>


            <div className='p-10  flex justify-center items-center flex-col bg-[#F2F4F3]'>
                <h1 className='text-center text-xl font-semibold'>What Our Community Says About Us</h1>

                <div className='md:w-[90%] rounded-2xl bg-[#D9D9D9] mt-10 flex justify-center items-center px-10 py-[5rem]'>
                    <img className='w-[100%]' src="https://s3-alpha-sig.figma.com/img/05e9/e011/5546c3f549b4cb95e56768c3f1d50a95?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uW8SwkLwqXJwHP5gJHA~CtDk9ePmR5YaiS02ScBA4V53Vakv8gms7duvB~e9rnMCV2Ib4ejsMEkyx2I-WsfL7UNri2EWe3J~wr3xZ-bjbxtZNIo1ybRWwtRGtpCWxzQ1scqxgI-KBROSVc2oel3Yln9RVRXtmPrbRFkrlJH3xtun4IdRA0aM9Xtl7b0kAG8rU5de4~tdQug1C530ioXiJV6we5l~ra7D62AvmS42kxAErCnNdMM6U98jEomVpHajRZn1qenaMBUZ5j94Dp2Km3MXjgK0ZuSE6g8X-RArRliDko7ty74o4hYZABvs4Z-UbwL5kL~m6t9z0uLiY6Qkgw__" alt="" />
                </div>

                <div className='flex justify-center items-center w-[90%] mt-[-4.3rem] z-50'>

                    <div className='bg-[#E67E22] p-5 md:w-[70%] rounded-md h-[10rem] flex justify-between items-center text-white overflow-x-auto'>
                        <div className='flex-1 flex justify-center items-center flex-col border-r border-r-[#F8D7BB] px-3'>
                            <h1 className='text-2xl font-semibold'>10K+</h1>
                            <p className='text-[#F8D7BB] mt-1 text-center text-sm md:text-wrap text-nowrap'>Lives transformed through the ministry</p>
                        </div>
                        <div className='flex-1 flex justify-center items-center flex-col border-r border-r-[#F8D7BB] px-3'>
                            <h1 className='text-2xl font-semibold'>500+</h1>
                            <p className='text-[#F8D7BB] mt-1 text-center text-sm md:text-wrap text-nowrap'>Successful Events Hosted Worldwide</p>
                        </div>
                        <div className='flex-1 flex justify-center items-center flex-col border-r border-r-[#F8D7BB] px-3'>
                            <h1 className='text-2xl font-semibold'>100+</h1>
                            <p className='text-[#F8D7BB] mt-1 text-center text-sm md:text-wrap text-nowrap'>Countries Reached with the Message of Hope</p>
                        </div>
                        <div className='flex-1 flex justify-center items-center flex-col'>
                            <h1 className='text-2xl font-semibold'>72+</h1>
                            <p className='text-[#F8D7BB] mt-1 text-center text-sm md:text-wrap text-nowrap'>Ministries and Outreach Programs Established</p>
                        </div>
                    </div>

                </div>
            </div>


            <div className='p-10 flex justify-center items-center flex-col'>
                <h1 className='text-center text-xl font-semibold'>Exciting Events Ahead Stay Connected and Get Involved</h1>

                <button className='border border-gray-400 px-3 py-2 text-sm rounded-md mt-5 cursor-pointer flex items-center justify-between w-40'>
                    <span>February</span>
                    <BsChevronDown className='ml-2' />
                </button>

                <div className='mt-8 w-full max-w-3xl'>
                    {events.map((event, index) => (
                        <div key={index} className={`border border-gray-300 rounded-lg p-4 mb-4 `}>
                            <div className='flex items-center cursor-pointer justify-between flex-wrap' onClick={() => toggleAccordion(index)}>


                                <div className='flex items-center gap-x-4'>

                                    <div className='min-w-12 min-h-12 rounded-full bg-[#F4F4F4] flex items-center justify-center mr-4'>
                                        {index == 0 ? <FaUserNinja className='text-[#E67E22]' /> : index == 1 ? <FaBible className='text-[#E67E22]' /> : <FaGlobeAsia className='text-[#E67E22]' />}
                                    </div>

                                    <div className=''>
                                        <h2 className='font-semibold'>{event.title}</h2>
                                        <p className='text-sm text-gray-600'>{event.description}</p>
                                    </div>

                                </div>


                                <div className='flex items-center gap-x-4'>
                                    <span className='text-2xl font-bold text-gray-700'>{event.date.split(' ')[0]}</span>
                                    <div>
                                        <h1>February</h1>
                                        <span className='text-sm text-gray-500 text-nowrap'>{event.range}</span>
                                    </div>
                                    <button className='ml-2 mt-2'>
                                        {activeIndex === index ? (<BsChevronUp />) : (<BsChevronDown />)}
                                    </button>
                                </div>

                            </div>

                            {index == activeIndex && <p className='text-sm text-[#7E7E7E] mt-5 pt-5 border-t'>{event.description2}</p>}
                        </div>
                    ))}
                </div>
            </div>

            <div className='p-10 flex justify-center items-center flex-col'>

                <div className='flex justify-between items-center w-[100%]'>

                    <h1 className='text-center text-xl font-semibold'>Our Gallery</h1>
                    <div className='flex items-center justify-center gap-x-3'>
                        <div className='w-[2.5rem] h-[2.5rem] rounded-full border border-[#E67E22] flex justify-center items-center cursor-pointer'>
                            <IoMdArrowBack className='text-[#E67E22]' />
                        </div>
                        <div className='w-[2.5rem] h-[2.5rem] rounded-full border border-[#DDDDDD] flex justify-center items-center cursor-pointer'>
                            <GrLinkNext className='text-[#DDDDDD]' />
                        </div>
                    </div>



                </div>

                <div className='flex items-start justify-center gap-x-3 mt-10 flex-wrap'>
                    <div className='mt-5'>
                        <div>
                            <img className='h-[20rem] rounded-md' src="https://s3-alpha-sig.figma.com/img/7350/7f41/ace0f4395174a3b0c86f9c0085baa611?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HvdYnmYjjtzzwepHvZH6FrxvDIpwiw0bB5CJTATiCI24xPhGWYNpWF-Auhtca-IQ8OZ9WC40Z3S7UuKHwxxeXHPmXvlG6Xsb4tWfVUb6OpWB6zJnyhEE~q151GXAMYaq40Deikxw08DAhCw5-Q7LQce0BRyBd25YY53l7ikpxKiOX6SntkoB0caY~rjkPVg3pNb6Wux5Kbh3BND3esSuS2s1MQa-ekAf53Py5JN2SCJGNMsdgUl7CjHnoIW35LlRhAXKNhMR4-M~WWtob9iJDssHrtYlrbu0EV9KFZSsZZSQwTbBcPl049HHvBv2Znbs-Yj5CmMT1veb3itS9BTDrA__" alt="" />
                        </div>
                        <div>
                            <img className='h-[8.9rem] mt-3 rounded-md' src="https://s3-alpha-sig.figma.com/img/d290/3207/dd8e908b73aa38de9913faa9b6e6de88?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RV4EBYYYh8LtHlnu5eGXLu46WibJczMI7wYjn3z~Wg6rvNTQhwfjTxnrpLpiQcT6CmVnoTOqv1dOBDpmFPe0UirYgIPcKH9NRDXe2~MIvmVALdlfcJBNZhgI40SjCuZIgyCsmPqIU-CIhkJyIy7vV8PzlME1MGC56ChSZiEhI51G01h-XyqyWcasY7aRfjzRNebEGJEAWR60ypr7ydgM1Fl9aOfcd715rcfPrsF0cKU8lMEGS4FjU40haEG0zcEJP3osz9A2fDnMv2~qxRgFh5SuSNidgtCbgKK4e~vQKwjPM19U5C~ypA9YywRqFRA8r6Sdv47hJKEPG~JvS0cDgQ__" alt="" />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div>
                            <img className='h-[8.9rem] rounded-md' src="https://s3-alpha-sig.figma.com/img/04f2/2cdb/fa59f5bef9e90a412f530caca907bfd3?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=q6ITRaGCHj~JwPS19g~hmnOl6bfenRN3B8IQgGjQKMCtSXH1X1NQS7w9x4Y7ozwoAFlUrarH6qrXrKBj8mZ2wdoOpKLR5T6ak84rCBB0n2BYHvHrTpZ8CGJUMmqvnQa6WZntCqYStOwQpkflexcogqfh9-Mq3tsqgZgQp9oZVIr~UaCjT9qpmpvfhL~39LIG0MOQM4xDtrgtjHaUXFQPizqMZbSCTq-ETMzjfaPSMgezbbnK7RRAkQ26XbCs~baDSoA1C4NOdVnSnO4X5R5F-~oSrkCrN4nOI9W2b0GtBwgTVkr-8WjETpza6sffwtyS8m8Zp-8HGghCi6nciQ0h5A__" alt="" />
                        </div>
                        <div>
                            <img className='w-[13.5rem] mt-3 rounded-md h-[20rem] bg-contain' src="https://s3-alpha-sig.figma.com/img/cbf6/b78d/564ea9513810c027ca89635db784ca3f?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SYOl9Gc~vZWqk-H0RKQrBOPpjcLSP5VYN~7D9mmvh6bPT1BYb64sWzpe7gV81~S~rIpIIpIxt1kLbZZdkcH6mPynxom~aenwHUIL4FpxKAiJcL~JUYSykln~kUMHJME8ZjbKk1YGVzplHxQL~bBmIUsUNhLKTga93MxzXTYWA90-aaRSRBOrTe9HELZjN3d5pE78H9mt1-50hmV~t4T5U6YMTwK0mshm0-EbwgPOrc4pv6AJ9iud0eVkmjWN0c1yrldZ1WE8W2JJ1xSToXjOwe3x~jhKOABDct16vzaVisyK9i~zTRrAanPTT-OuSjHlmFeMqUFXhJBnvmT6HVAKDA__" alt="" />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div>
                            <img className='w-[13.5rem] rounded-md h-[20rem] bg-contain' src="https://s3-alpha-sig.figma.com/img/7ae6/0d46/26dae707d00176e37f69b97c5f008ec3?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eggZllUKuT6Re3eZW5eGZ7~gApe0cIwEX5B57DknRHfDkxBOAHt5U8oqRoubNtYL-PRgrou6kx6EBci~qM2K~8crJ2wnUxh833a942KCWB16I46td8BdGY2H3QWojQtY4AAZFM6IGhyhQmiYFpJNsNHNlpCBM7hwKAdsWd~Sx9nSKrJSGWonbSOc8sx32NNrsLK2wkoZekbOX5DUiy2r2eYQvMkSBV~tr~82A4bxkkOTYosmuUCT-9~IabYaIX4m-zZp0udcsJRlUoe0rJrhMPcLiBTK0q2UOXe7KXePXZK9lu-TGhjjmMfaagIFhgflhROKT-QAA8ud7Lb53335gA__" alt="" />
                        </div>
                        <div>
                            <img className='h-[8.9rem] w-[13.7rem] mt-3 rounded-md bg-contain bg-center' src="https://s3-alpha-sig.figma.com/img/ad6b/e940/246eb28b417fef30bc673cbc4fb25248?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QrYFfOV9TdRh3JDlmrT-E-j7QmTa2dcytYona57EpdFYw0RBnAjjz2qlqh1CjZi4t9MGAvEgeDXNOdEYDor0e2TQ6dP1Dighxa~9NDSvkmMTOgO2NfDJCORxjdnIz7OWjguSuxNcJ3JSxXDKx9pnowZmu25z90Kwz2ThR28W73jLu2l3xEN9QfasGs2PZM6GyOh0-cpMDFwCP0sLf9u80oW~YQnuhvXEffOUYIbTKsQpGLIEL~~oj3WTdJ6Ba-4kry3ufCxmqG3f5hFW7GoTkxtUcohl89mz-LhHHfBYDLIalkP70SMf~6br3A0up24yYQUfaSWtvQUN9cfWBOD1Ng__" alt="" />
                        </div>
                    </div>
                </div>

            </div>

            <div className='p-10  flex justify-center items-center flex-col bg-[#F2F4F3]'>
                <h1 className='text-center text-xl font-semibold'>How To Get Involved</h1>

                <div className='flex justify-center items-center w-[90%] z-50 mt-8 gap-x-3 flex-wrap'>

                    <div className='w-[20rem] h-[12rem] bg-white rounded-md p-3 flex justify-center items-center flex-col mt-3'>
                        <div className='w-12 h-12 rounded-full bg-[#F4F4F4] flex items-center justify-center mr-4'>
                            <IoMdPersonAdd  className='text-[#E67E22]' /> 
                        </div>
                        <h1 className='text-lg font-semibold'>Register and Secure spot</h1>
                        <p className='mt-2 text-[#9B9B9B] text-sm text-center'>Sign up for upcoming events and be part of life-changing experiences. Reserve your place today</p>
                    </div>
                    <div className='w-[20rem] h-[12rem] bg-white rounded-md p-3 flex justify-center items-center flex-col mt-3'>
                        <div className='w-12 h-12 rounded-full bg-[#F4F4F4] flex items-center justify-center mr-4'>
                            <IoMdMailOpen   className='text-[#E67E22]' /> 
                        </div>
                        <h1 className='text-lg font-semibold'>Invite you friends</h1>
                        <p className='mt-2 text-[#9B9B9B] text-sm text-center'>Join our mission by offering your time, skills, or resources to support PBTC events and outreach</p>
                    </div>
                    <div className='w-[20rem] h-[12rem] bg-white rounded-md p-3 flex justify-center items-center flex-col mt-3'>
                        <div className='w-12 h-12 rounded-full bg-[#F4F4F4] flex items-center justify-center mr-4'>
                            <FaAddressCard   className='text-[#E67E22]' /> 
                        </div>
                        <h1 className='text-lg font-semibold'>Spread the Word</h1>
                        <p className='mt-2 text-[#9B9B9B] text-sm text-center'>Share event details with friends, family, and your community to help grow the movement!</p>
                    </div>

                </div>
            </div>


            <Footer/>



        </div>
    )
}

export default EventsPage
