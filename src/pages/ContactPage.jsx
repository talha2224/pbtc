import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Map from '../assets/map.png';
import { FaQuestionCircle, FaUsers, FaGift, FaGlobe, FaHandHoldingHeart } from 'react-icons/fa'; // Import icons

const ContactPage = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const faqData = [
        {
            question: 'What is PBTC, and how does it work?',
            answer: 'PBTC (Powered by The Creator) is a faith-driven community that merges spiritual growth with financial empowerment. We provide mentorship, business opportunities, and resources to help believers align their faith with success.',
            icon: <FaQuestionCircle className=' text-[#E67E22]' />,
        },
        {
            question: 'How can I become a member of PBTC?',
            answer: 'To become a member, you can visit our website and fill out the membership application form. Our team will review your application and get back to you with the next steps.',
            icon: <FaUsers className=' text-[#E67E22]' />,
        },
        {
            question: 'What are the benefits of joining A.R.K II?',
            answer: 'Joining A.R.K II offers numerous benefits including exclusive mentorship, access to business opportunities, spiritual growth resources, and a supportive community.',
            icon: <FaGift className=' text-[#E67E22]' />,
        },
        {
            question: 'Is PBTC open to people outside the U.S.?',
            answer: 'Yes, PBTC is open to people from all around the world. We welcome believers from diverse backgrounds to join our community and benefit from our resources.',
            icon: <FaGlobe className=' text-[#E67E22]' />,
        },
        {
            question: 'How does PBTC integrate faith with business opportunities?',
            answer: 'PBTC integrates faith by grounding all business opportunities in biblical principles. We provide guidance on ethical business practices and encourage members to use their talents to serve God and their community.',
            icon: <FaHandHoldingHeart className=' text-[#E67E22]' />,
        },
    ];

    const toggleQuestion = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    return (
        <div>
            <Navbar />

            <div className="flex justify-center items-center flex-col px-5 py-16 bg-[#FCF1E8]">
                <h1 className="text-5xl font-semibold">We’ll love to hear from you</h1>
                <p className="mt-2 text-sm text-[#4E4E4E] text-center">Your connection with PBTC matters. Reach out to us for inquiries, <br /> support, or to learn more about our mission</p>
                <img src={Map} alt="" className="mt-10" />
            </div>

            <div className="p-10 flex justify-center items-center flex-col">
                <h1 className="text-xl font-semibold">All Your Answers at your fingertips</h1>
                <div className="mt-10 flex justify-center items-center flex-col w-full">
                    <div className="w-full max-w-2xl">
                        {faqData.map((item, index) => (
                            <div key={index} className="border-b border-gray-200 py-4 cursor-pointer">
                                <div className="flex items-center justify-between" onClick={() => toggleQuestion(index)}>
                                    <div className="flex items-center">
                                        <div className=" rounded-md mr-3 w-[2rem] h-[2rem] border border-[#DADADA] flex justify-center items-center">{item.icon}</div>
                                        <h2 className="text-lg font-semibold">{item.question}</h2>
                                    </div>
                                    <svg className={`w-6 h-6 transform transition-transform duration-300 ${activeQuestion === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                                {activeQuestion === index && (<div className="mt-4 text-gray-700 text-sm">{item.answer}</div>)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>



            <div className="p-10 bg-[#E67E22] flex justify-center items-center text-[#fff] flex-col">
                <h1 className="text-2xl font-semibold">Don’t wait—step into your divine calling now</h1>
                <p className=" text-sm text-[#FFE6CF] md:w-[50%] text-center mt-3">Be part of a movement that empowers you spiritually and financially. Unlock exclusive resources, mentorship, and opportunities designed for believers like you</p>
                <button className="bg-[#fff] text-[#E67E22] px-10 py-2 mt-3 rounded-full font-semibold cursor-pointer">Book a call</button>
            </div>

            <Footer />
        </div>
    );
};

export default ContactPage;