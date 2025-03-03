import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Team from '../assets/youtube.png';
import { FaQuestionCircle, FaUsers, FaGift, FaGlobe, FaHandHoldingHeart } from 'react-icons/fa'; // Import icons
import { CgArrowTopRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const MessagesPage = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const faqData = [
        {
            question: "A-B",
            answer: ["A call to action", "Action", "Apolistic", "Bear much fruit", "Be a good disciple", "Blog",],
        },
        {
            question: "B-C",
            answer: ["A call to action", "Action", "Apolistic", "Bear much fruit", "Be a good disciple", "Blog",],

        },
        {
            question: "D-E",
            answer: ["A call to action", "Action", "Apolistic", "Bear much fruit", "Be a good disciple", "Blog",],

        },
        {
            question: "E-F",
            answer: ["A call to action", "Action", "Apolistic", "Bear much fruit", "Be a good disciple", "Blog",],

        },
        {
            question: "G-H",
            answer: ["A call to action", "Action", "Apolistic", "Bear much fruit", "Be a good disciple", "Blog",],

        },
        {
            question: "I-J",
            answer: ["A call to action", "Action", "Apolistic", "Bear much fruit", "Be a good disciple", "Blog",],

        },
        {
            question: "K-L",
            answer: ["A call to action", "Action", "Apolistic", "Bear much fruit", "Be a good disciple", "Blog",],

        },
        {
            question: "M-N",
            answer: ["A call to action", "Action", "Apolistic", "Bear much fruit", "Be a good disciple", "Blog",],

        },
        {
            question: "O-P",
            answer: ["A call to action", "Action", "Apolistic", "Bear much fruit", "Be a good disciple", "Blog",],

        },
        {
            question: "Q-R",
            answer: ["A call to action", "Action", "Apolistic", "Bear much fruit", "Be a good disciple", "Blog",],

        },
        {
            question: "S-T",
            answer: ["A call to action", "Action", "Apolistic", "Bear much fruit", "Be a good disciple", "Blog",],

        },
        {
            question: "K",
            answer: ["A call to action", "Action", "Apolistic", "Bear much fruit", "Be a good disciple", "Blog",],

        },
    ];


    const toggleQuestion = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };
    return (
        <div>
            <Navbar />


            <div className="flex justify-center items-center flex-col pt-16 bg-[#000] text-white">
                <h1 className="text-5xl font-semibold">Our Latest Message</h1>
                <p className="mt-2 text-sm text-[#838383] text-center">Go to our YouTube channel to watch all our recorded Sunday meetings.</p>
                <button className='bg-[#E67E22] px-10 py-2 rounded-[2rem] text-sm mt-4 mb-6'>
                    <Link to={"/login"}>Youtube</Link>
                </button>
                <img src={Team} alt="" className="mt-10 w-full" />
            </div>


            <div className="p-10 flex justify-center items-center flex-col bg-[#FCF1E8]">
                <h1 className="text-xl font-semibold">Find Resources By Topic</h1>
                <div className="mt-10 flex justify-center items-center flex-col w-full bg-[#fff] p-5 rounded-xl">
                    <div className="w-full max-w-2xl">
                        {faqData.map((section, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 p-4 cursor-pointer mb-3 rounded-md"
                            >
                                <div
                                    className="flex items-center justify-between"
                                    onClick={() => toggleQuestion(index)}
                                >
                                    <div className="flex items-center">
                                        <div className="rounded-md mr-3 w-[2rem] h-[2rem] border border-[#DADADA] flex justify-center items-center">
                                            <CgArrowTopRight className="text-[#E67E22]" />
                                        </div>
                                        <h2 className="text-lg font-semibold">{section.question}</h2>
                                    </div>
                                    <svg
                                        className={`w-6 h-6 transform transition-transform duration-300 ${activeQuestion === index ? 'rotate-180' : ''
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        ></path>
                                    </svg>
                                </div>
                                {activeQuestion === index && (
                                    <div className="mt-4 text-gray-700 text-sm">
                                        {section.answer.map((item, i) => (
                                            <div key={i} className="ml-6 list-disc list-item">{item}</div>
                                        ))}
                                    </div>
                                )}
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

export default MessagesPage
