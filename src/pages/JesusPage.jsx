import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CgArrowTopRight } from 'react-icons/cg';

const JesusPage = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const faqData = [
        {
            question: 'Jesus Is A Historical Figure',
            answer:"Joining PBTC was a life-changing decision! The mentorship and faith-driven business model helped me build a strong spiritual foundation while creating financial opportunities. I've never felt more aligned with my purpose!",
        },
        {
            question: 'Jesus Is A Man',
            answer:"Joining PBTC was a life-changing decision! The mentorship and faith-driven business model helped me build a strong spiritual foundation while creating financial opportunities. I've never felt more aligned with my purpose!",

        },
        {
            question: 'Jesus Was Crucified',
            answer:"Joining PBTC was a life-changing decision! The mentorship and faith-driven business model helped me build a strong spiritual foundation while creating financial opportunities. I've never felt more aligned with my purpose!",

        },
        {
            question: 'Jesus Rose From Dead',
            answer:"Joining PBTC was a life-changing decision! The mentorship and faith-driven business model helped me build a strong spiritual foundation while creating financial opportunities. I've never felt more aligned with my purpose!",

        },
        {
            question: 'Jesus Is Fully God',
            answer:"Joining PBTC was a life-changing decision! The mentorship and faith-driven business model helped me build a strong spiritual foundation while creating financial opportunities. I've never felt more aligned with my purpose!",

        },
        {
            question: 'Jesus Can Be Known Personally',
            answer:"Joining PBTC was a life-changing decision! The mentorship and faith-driven business model helped me build a strong spiritual foundation while creating financial opportunities. I've never felt more aligned with my purpose!",

        },
        {
            question: 'Jesus Is A Historical Figure',
            answer:"Joining PBTC was a life-changing decision! The mentorship and faith-driven business model helped me build a strong spiritual foundation while creating financial opportunities. I've never felt more aligned with my purpose!",

        },
    ];

    const toggleQuestion = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    return (
        <div>
            <Navbar />

            <div className="flex justify-center items-center flex-col pt-16">
                <h1 className="text-5xl font-semibold">Our Latest Message</h1>
                <p className="mt-2 text-sm text-[#838383] text-center">Go to our YouTube channel to watch all our recorded Sunday meetings.</p>
                <img src="https://s3-alpha-sig.figma.com/img/a2b0/542e/0af6c1f9cd96aa006393d0e7b6f7881d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qm0pn9bvZvMHS34JWpWOm7jNYQ6eLYhQuDmYIPhbcuEacB7V4~UFLWb2q82ofo1B~e0WZkKNqTMVZhwNG9LSrgbqxsFpzM-dk5JUpQktDVsQ2MbKr2G3p9mn967~Ld5VAY65xvvUPus4fzaYDqXzQR7ttDBVmfWXMpNEuN8TlgicQh1tFfFX6QY0a2XZDXkSQO7RJA0cQoqwVwPU35IZuaOBCbNBf7~XlZWjKc4XDUWlfGngZfh~5vqyBbZJKpqkUAMckO9QzrklCH6kXnMWy9X61FyAjfVFCIS3QWYsSPeb-oteFnaYCEAffFAqYZSE7Q0kVJjAuLSXklXSeGHzdA__" alt="" className="mt-10 w-full"/>
            </div>

            <div className="bg-[#F2F4F3] flex justify-center items-start flex-wrap rounded-md p-4 md:p-10">
                
                <div className="w-[98%] sm:w-[30rem] pt-4">
                    <img className="w-[30rem] h-[24rem] rounded-2xl md:rounded-none md:rounded-tl-2xl" src="https://s3-alpha-sig.figma.com/img/30d4/0b65/32eb36fe9a983ef0abecbf8035f6c833?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lfcBfr3MFlTG8qm-sfTkeIxXpgBpmySII3OlfRjvMnhzs22hQVBk0Lf3K5NmJ8nQZ-Trfq-Q4B73Do6LU6YA0JAGQUiw7sSzuDMuG7r8yi3qapCc7FliAB4zeP18IDTTXIcEVN-Ehz2GRSWXMJgpOZBFVaTqyhCDdgy1wjlvl9ruiISQSFSfCw1NkpsxQBMTMNnyo-NKDonUu~JymFg3pTNRAlFa35K2nSkUH4FscKD-2csutXy21H6OwfESngYbw-~Jkvrs-ngpDsF-Pa1XQot5zlny5xqFkMS6iQU1Jxhn4ZEhm7axDUU~5C9OqNvY5~TT~BAYPBsfjQKBvsdtzw__" alt="" />
                    <img className="rounded-2xl md:rounded-none md:rounded-bl-2xl" src="https://s3-alpha-sig.figma.com/img/369d/2aaf/446bc220955c2a0fd30f33777fbda59e?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UmJrHiQhxXXbpLG5wZ9ZQdZ~u1luw70egoy8ZfaB6WacwTT~lAFRFSYNM3QeXVtZkyDtgAiSxXzFtOX6ZXIhPX1lS7HHMyBsk0mRKSf-fhXjlpZYxpOsi2488MBignPXW5xy-wMW~PYxZQqhuQ5LBukAF4UAiF8bUc~VgAa-HwG8DKOVJ9Wf~stbhQv8BHQ70c0AHCaOZ3eqBLDYELmdCJiHparFXRBADXCutJqZ6CiF6dxAzC2bM9sSQ1khVe5vyo4F-kVi-udv-~XhXgD5idxx6HMe-3hj4~BPUDqalY9g-EXaYmoeI-yeuB4SxNJNGr6qBfjeyH3H~0OPV3Qf5g__" alt=""/>
                </div>

                <div className="bg-[#fff] p-5 w-[98%] sm:w-[30rem] h-[44rem] mt-4  md:rounded-none rounded-2xl md:rounded-tr-2xl md:rounded-br-2xl">
                    {faqData.map((item, index) => (
                        <div key={index} className="border-b border-gray-200 py-4 cursor-pointer" >
                            <div className="flex items-center justify-between"onClick={() => toggleQuestion(index)}>
                                <div className="flex items-center">
                                    <div className="rounded-md mr-3 w-[2rem] h-[2rem] border border-[#DADADA] flex justify-center items-center">
                                        <CgArrowTopRight className="text-[#E67E22]" />
                                    </div>
                                    <h2 className="text-lg font-semibold">{item.question}</h2>
                                </div>
                                <svg className={`w-6 h-6 transform transition-transform duration-300 ${activeQuestion === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round"strokeLinejoin="round"strokeWidth="2"d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                            {activeQuestion === index && (<div className="mt-4 text-gray-700 text-sm">{item.answer}</div>)}
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-10 bg-[#E67E22] flex justify-center items-center text-[#fff] flex-col">
                <h1 className="text-2xl font-semibold">Don’t wait—step into your divine calling now</h1>
                <p className=' text-sm text-[#FFE6CF] md:w-[50%] text-center mt-3'>Be part of a movement that empowers you spiritually and financially. Unlock exclusive resources, mentorship, and opportunities designed for believers like you</p>
                <button className="bg-[#fff] text-[#E67E22] px-10 py-2 mt-3 rounded-full font-semibold cursor-pointer">Book a call</button>
            </div>

            <Footer />
        </div>
    );
};

export default JesusPage;