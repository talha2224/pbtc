import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Countries from '../assets/countries2.svg';
import { FaQuestionCircle, FaUsers, FaGift, FaGlobe, FaHandHoldingHeart } from 'react-icons/fa'; // Import icons
import { CgArrowTopRight } from 'react-icons/cg';

const TeamPage = () => {
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


            <div className='bg-[#000] px-5 py-10'>
                <h1 className="text-5xl font-semibold text-[#fff] text-center">Spreading Love for God</h1>
                <p className="mt-2 text-sm text-[#4E4E4E] text-center">Spreading the love for God and each other is what <br /> makes being part of a ministry so special.</p>
            </div>


            <img className='h-[95vh] w-screen bg-no-repeat my-10' src={`https://s3-alpha-sig.figma.com/img/271a/752e/48de6783b13073b41c0d8689c0de6a77?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oBv7ANzSePjwZ8TJnwza3TC67eDC5XGH1IXhdggazI56MfINCvlrsA3wLB46HF766KUmaQ-zEARJlkxXLntRXha9f5FQRYm8-vkyEI6dCVoLgcmtuEMsg5~dB9lWfrvWWcfOwJ8H7T5ZnHykISH-n21ZDXnUUQ~kCKt1StiO5ewFACIo9hh4c0PW6SRno9dEkb1n7YkKUQ9Zcfw9Q9zfiUcezmpTAyEunmCkMqY1Wzidnvih2WE8-GWnlT75Oy3981fc5SzEtUWbS~IZa-OLe6IzFgBkryBKQ-imVNuvJ-~1C9fE4~p9tXrMT-ada1Cv7umPu0s4d8wubwVn8EXqRw__`} alt="" />


            <div className='flex justify-center items-center flex-col'>
                <h1 className="text-xl font-semibold  text-center">Our Ministries</h1>
                <img src={Countries} alt="" className='my-10 sm:w-[120vh] px-5' />
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

export default TeamPage
