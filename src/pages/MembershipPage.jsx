import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Members from '../assets/members.svg'
import event2 from '../assets/event-2.jpg'
import event3 from '../assets/event-3.svg'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { FaAddressCard, FaShield, FaUserNinja } from "react-icons/fa6";
import { FaBible, FaGlobeAsia } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { IoMdArrowBack, IoMdMailOpen, IoMdPersonAdd } from "react-icons/io";
import Footer from '../components/Footer'
import { GoArrowDownRight } from 'react-icons/go'
import { CgArrowTopRight } from 'react-icons/cg'

const MembershipPage = () => {

    return (
        <div>
            <Navbar />


            <div className='flex justify-between items-start p-10 bg-black'>

                <div>
                    <h1 className='text-[3rem] font-bold text-white'>Become a PBTC <br /> Member and Unlock <br /> Your Purpose</h1>
                    <p className='mt-2 text-sm text-[#949494]'>Join a faith-driven community that empowers you spiritually and financially. <br /> Gain exclusive access to mentorship, resources, and business opportunities</p>
                    <button className='bg-[#E67E22] text-white px-8 py-2 rounded-4xl text-sm mt-3'>Learn More</button>
                </div>

                <div>
                    <img src={Members} alt="" />
                </div>

            </div>

            <div className='bg-[#FCF1E8] flex justify-center items-center flex-wrap'>

                <div className='flex justify-center items-start gap-x-10 bg-[#D9D9D9] w-[100%] md:w-[90%] md:m-10 p-3 md:p-10 rounded-2xl flex-wrap'>

                    <div className='bg-[#fff] rounded-xl p-5 w-[98%] sm:w-[30rem] mt-4'>

                        <h1 className='text-lg font-semibold'>What You Gain as a <span className='text-lg font-semibold text-[#E67E22]'>PBTC Worldwide Ministries</span> </h1>

                        <div className='mt-3'>

                            <div className='flex items-center gap-x-3  mt-4'>
                                <div className='min-w-[2rem] min-h-[2rem] rounded-md flex justify-center items-center border border-[#D4D4D4]'><FaShield className='text-[#E67E22]' /></div>
                                <div>
                                    <h1 className=' font-semibold text-lg'>Empower Your Faith</h1>
                                    <p className='text-xs text-[#969696]'>Deepen your relationship with God through impactful ministry</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-x-3 mt-4'>
                                <div className='min-w-[2rem] min-h-[2rem] rounded-md flex justify-center items-center border border-[#D4D4D4]'><FaShield className='text-[#E67E22]' /></div>
                                <div>
                                    <h1 className=' font-semibold text-lg'>Build Community</h1>
                                    <p className='text-xs text-[#969696]'>Network with fellow believers dedicated to making difference</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-x-3  mt-4'>
                                <div className='min-w-[2rem] min-h-[2rem] rounded-md flex justify-center items-center border border-[#D4D4D4]'><FaShield className='text-[#E67E22]' /></div>
                                <div>
                                    <h1 className=' font-semibold text-lg'>Transform Lives</h1>
                                    <p className='text-xs text-[#969696]'>Use your talents and skills to serve others and spread the gospel </p>
                                </div>
                            </div>

                            <div className='flex items-center gap-x-3 mt-4'>
                                <div className='min-w-[2rem] min-h-[2rem] rounded-md flex justify-center items-center border border-[#D4D4D4]'><FaShield className='text-[#E67E22]' /></div>
                                <div>
                                    <h1 className=' font-semibold text-lg'>Monthly Donations</h1>
                                    <p className='text-xs text-[#969696]'>Donation and support will help many to serve the living God</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='p-5 w-[98%] sm:w-[30rem] pt-4'>
                        <img src="https://s3-alpha-sig.figma.com/img/d2a3/64fb/414aa3e1b3fe18b6d5e6364c3b08c4f8?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=msPkvhszP8YUQX-9keGtWZCwPtoW40cHOfKWN6zSGzcmXQgrRSnlkfrI57uiHQtxL3wWCMpFAIxLM2wdEAZ3THDREchVanbpbocqm7WOuselPXGwZZBCqYcZno4pOFfJnZcxbD~aAJHQZVEk5mbg4eP5uxTgAqHqcGN3Mmzn49xQLx9fcw5hgkYEB0blcp0ZARhZOPQaUaHke2QVaIZE0cOhQIDw9qut39jXaczC4uxgCIF1fHeZKLxzBzRzlBH-cPYAd9PISwtXR5A2QCSabsRR-p5FAyK37ABxQmXxMw3ERxOjziN3dWPJxm5lV~hQTmmfeoTbT3JtHYbq7tGDTA__" alt="" />
                    </div>

                </div>


            </div>

            <div className='p-10'>
                <h1 className='text-center text-xl font-semibold'>What Our Members Says About Us</h1>
                <div className='flex justify-center items-center mt-[3rem]'>

                    <div className='w-[98%] xl:w-[75%] bg-[#F2F4F3]  rounded-md flex justify-center items-center p-10 overflow-x-auto xl:overflow-visible'>

                        {
                            [1, 2, 3].map((i) => (
                                <div key={i} className='bg-[#fff] border border-[#F3F3F3] rounded-lg mr-5 h-[15rem] min-w-[25rem] px-4 flex flex-col justify-center'>
                                    <div className='flex items-start gap-x-3'>
                                        <img className='w-[3rem] h-[3rem] rounded-full bg-contain' src="https://s3-alpha-sig.figma.com/img/0137/6a01/f8898b4d066033af55f17b0f52d39b46?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EFjUUKlzVNuo6R9tRqkeHbYnk6poQVcaEwdkSDHpKhEoTd~~E6gphgiJI2LWeLqrbPDxHhVt-PKGG9qDH3qSzSuw0u87BwUpSUBRP0UJVbMwj8Fsqjia-rrqI3VXM7V5XS1SO5gn8wjm6bvotXCzAPX~5vR3xcVgIRREL8dxf0auGP9MfNRD~chm~wLuqujdiTmiTL9~SaukrLG8~IURuOGWbBKBF5Xr9~wSO7lAT7S4ByyMC-JvZfgPOf-xsDY9Q8SPRwJFj7Er8DRHPdmrFVuJloPUoJuJbQ3qZr7d8TPietJGupew5B0csKjcBtsPLyKHPU0xSoEH1y~unxp5Pw__" alt="" />
                                        <div>
                                            <h1 className='text-lg font-semibold'>Michael O’Connor</h1>
                                            <p className='mt-1 text-[#969696] text-sm'>London, UK</p>
                                        </div>
                                    </div>
                                    <p className='text-[#969696] mt-3 text-sm'>Before PBTC, I struggled to balance my faith and career. Through A.R.K II, I found a supportive community, gained business skills, and strengthened my walk with God. Now, I’m thriving both spiritually and professionally</p>
                                </div>
                            ))
                        }

                    </div>

                </div>
            </div>


            <div className='p-10  flex justify-center items-center flex-col bg-[#121212] text-white'>
                <h1 className='text-center text-xl font-semibold'>Our Packages Details</h1>

                <div className='flex justify-center items-center w-[90%] z-50 mt-8 gap-x-3 flex-wrap'>

                    <div className='w-[18rem] border border-[#454545] rounded-xl p-7 flex justify-center items-center flex-col mt-3'>
                        <h1 className='text-[#D1D1D1]'>Membership Plan</h1>
                        <h1 className='mt-1 font-semibold text-xl'>$4.11 <span className='text-sm text-[#8D8D8D]'>/ Month</span></h1>
                        <p className=' text-center mt-3 text-sm text-[#B6B2B2]'>Joining PBTC was a life-changing decision! The mentorship and faith-driven business model helped me build a strong spiritual foundation while creating financial opportunities. I’ve never felt more aligned with my purpose</p>
                        <button className='border border-white px-6 py-2 mt-4 rounded-4xl text-sm'>Get Started</button>
                    </div>
                    <div className='w-[18rem] border border-[#454545] rounded-xl p-7 flex justify-center items-center flex-col mt-3'>
                        <h1 className='text-[#D1D1D1]'>Product Plan</h1>
                        <h1 className='mt-1 font-semibold text-xl'>$47 <span className='text-sm text-[#8D8D8D]'>/ Month</span></h1>
                        <p className=' text-center mt-3 text-sm text-[#B6B2B2]'>Get equipped with our affordable starter kit for futurist evangelism. Driven business model helped me build a strong spiritual foundation while creating financial opportunities. I’ve never felt more aligned with my purpose</p>
                        <button className='border border-white bg-[#E67E22] px-6 py-2 mt-4 rounded-4xl text-sm'>Get Started</button>
                    </div>
                    <div className='w-[18rem] border border-[#454545] rounded-xl p-7 flex justify-center items-center flex-col mt-3'>
                        <h1 className='text-[#D1D1D1]'>Investment  Plan</h1>
                        <h1 className='mt-1 font-semibold text-xl'>$47 <span className='text-sm text-[#8D8D8D]'>/ Month</span></h1>
                        <p className=' text-center mt-3 text-sm text-[#B6B2B2]'>Joining PBTC was a life-changing decision! The mentorship and faith-driven business model helped me build a strong spiritual foundation while creating financial opportunities. I’ve never felt more aligned with my purpose</p>
                        <button className='border border-white px-6 py-2 mt-4 rounded-4xl text-sm'>Get Started</button>
                    </div>

                </div>
            </div>

            <div className='p-10 bg-[#E67E22] flex justify-center items-center text-[#fff] flex-col'>
                <h1 className='text-2xl font-semibold'>Don’t wait—step into your divine calling now</h1>
                <p className=' text-sm text-[#FFE6CF] md:w-[50%] text-center mt-3'>Be part of a movement that empowers you spiritually and financially. Unlock exclusive resources, mentorship, and opportunities designed for believers like you</p>
                <button className='bg-[#fff] text-[#E67E22] px-10 py-2 mt-3 rounded-full font-semibold cursor-pointer'>Book a call</button>
            </div>


            <Footer />



        </div>
    )
}

export default MembershipPage
