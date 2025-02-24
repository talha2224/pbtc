import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Team from '../assets/team.png';
import { FaQuestionCircle, FaUsers, FaGift, FaGlobe, FaHandHoldingHeart } from 'react-icons/fa'; // Import icons
import { CgArrowTopRight } from 'react-icons/cg';

const AboutPage = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const faqData = [
        {
            question: 'Our history',
            answer: 'Join us for a powerful night of prayer, healing, and breakthroughs as we seek divine intervention together. Experience live prophetic sessions, deliverance, and testimonies from believers worldwide. This life-changing virtual event is open to all—come expectant and leave transformed! Join us for a powerful night of prayer, healing, and breakthroughs as we seek divine intervention together. Experience live prophetic sessions, deliverance, and testimonies from believers worldwide. This life-changing virtual event is open to all—come expectant and leave transformed!',
            icon: <CgArrowTopRight className=' text-[#E67E22]' />,
        },
        {
            question: 'What we believe ',
            answer: 'OUR VISION AND MISSION ARE TO LEAD PEOPLE TO BECOME FULLY DEVOTED FOLLOWERS OF YESHUA, SPEAK TO THE NEVER-ENDING PROCESS OF DEVELOPING INTO BETTER FOLLOWERS OF YESHUA, ALONG WITH LEARNING, EDUCATING, EMPOWERING WISDOM, AND UNDERSTANDING THE THINGS OF GOD. THE NAME OF OUR BRAND, POWERED BY THE CREATOR™, SPEAKS TO THE IDEA THAT GOD IS ALWAYS,  CONSISTENTLY, CALLING PEOPLE TO RETURN TO THEIR CREATOR AND FIND RESTORATION IN HIM! ALSO WITH HELPING OUR COMMUNITIES AND NEIGHBORS TO BE HEALTHIER BOTH PHYSICALLY AND SPIRITUALLY AROUND THE WORLD. WE FOCUS ALWAYS TO GIVE HIM THE GLORY, HONOR, POWER AND PRAISE AMEN. ',
            icon: <CgArrowTopRight className=' text-[#E67E22]' />,
        },
        {
            question: 'Our Vision ',
            answer: 'Join us for a powerful night of prayer, healing, and breakthroughs as we seek divine intervention together. Experience live prophetic sessions, deliverance, and testimonies from believers worldwide. This life-changing virtual event is open to all—come expectant and leave transformed! Join us for a powerful night of prayer, healing, and breakthroughs as we seek divine intervention together. Experience live prophetic sessions, deliverance, and testimonies from believers worldwide. This life-changing virtual event is open to all—come expectant and leave transformed!',
            icon: <CgArrowTopRight className=' text-[#E67E22]' />,
        },
        {
            question: 'Our Mission',
            answer: 'OUR VISION AND MISSION ARE TO LEAD PEOPLE TO BECOME FULLY DEVOTED FOLLOWERS OF YESHUA, SPEAK TO THE NEVER-ENDING PROCESS OF DEVELOPING INTO BETTER FOLLOWERS OF YESHUA, ALONG WITH LEARNING, EDUCATING, EMPOWERING WISDOM, AND UNDERSTANDING THE THINGS OF GOD. THE NAME OF OUR BRAND, POWERED BY THE CREATOR™, SPEAKS TO THE IDEA THAT GOD IS ALWAYS,  CONSISTENTLY, CALLING PEOPLE TO RETURN TO THEIR CREATOR AND FIND RESTORATION IN HIM! ALSO WITH HELPING OUR COMMUNITIES AND NEIGHBORS TO BE HEALTHIER BOTH PHYSICALLY AND SPIRITUALLY AROUND THE WORLD. WE FOCUS ALWAYS TO GIVE HIM THE GLORY, HONOR, POWER AND PRAISE AMEN. ',
            icon: <CgArrowTopRight className=' text-[#E67E22]' />,
        },
        {
            question: 'Where we go?',
            answer: 'Join us for a powerful night of prayer, healing, and breakthroughs as we seek divine intervention together. Experience live prophetic sessions, deliverance, and testimonies from believers worldwide. This life-changing virtual event is open to all—come expectant and leave transformed! Join us for a powerful night of prayer, healing, and breakthroughs as we seek divine intervention together. Experience live prophetic sessions, deliverance, and testimonies from believers worldwide. This life-changing virtual event is open to all—come expectant and leave transformed!',
            icon: <CgArrowTopRight className=' text-[#E67E22]' />,
        },
    ];

    const toggleQuestion = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };
    return (
        <div>
            <Navbar />


            <div className="flex justify-center items-center flex-col py-16 bg-[#FCF1E8]">
                <h1 className="text-5xl font-semibold">Who are we?</h1>
                <p className="mt-2 text-sm text-[#4E4E4E] text-center">We love Jesus, we love people, and we’re on a mission of showing God’s love to the world.<br /> This website gives you an idea of who we are but best of all, come and visit!</p>
                <img src={Team} alt="" className="mt-10" />
            </div>


            <div className="p-10 flex justify-center items-center flex-col bg-[#E8E8E8]">
                <h1 className="text-xl font-semibold">Exciting Events Ahead Stay Connected and Get Involved</h1>
                <div className="mt-10 flex justify-center items-center flex-col w-full bg-[#fff] p-5 rounded-xl">
                    <div className="w-full max-w-2xl">
                        {faqData.map((item, index) => (
                            <div key={index} className="border border-gray-200 p-4 cursor-pointer mb-3 rounded-md">
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
    )
}

export default AboutPage
