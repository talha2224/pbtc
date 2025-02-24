import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../assets/hero.svg'
import { Link } from 'react-router-dom'
import { FaCross, FaGifts, FaGlobe, FaHandHoldingDollar, FaRadio } from 'react-icons/fa6'
import { FaTshirt } from 'react-icons/fa'
import { CgArrowTopRight } from 'react-icons/cg'
import { GoArrowDownRight } from 'react-icons/go'
import Footer from '../components/Footer'

const HomePage = () => {
    return (
        <div>
            <Navbar />

            <div style={{ backgroundImage: `url(${Hero})` }} className='h-[80vh] w-screen border-b-5 border-b-[#E67E22] flex justify-center items-center flex-col text-[#fff] px-5'>
                <h1 className='text-5xl font-semibold text-center'>Empowering Faith,</h1>
                <h1 className='text-5xl font-semibold mt-1 text-center'>Elevating Business</h1>
                <p className='mt-2 text-sm md:w-[50%] text-center text-[#D1D0D0]'>Join a thriving community dedicated to spreading the Gospel, achieving financial empowerment, and unlocking new opportunities through faith-driven entrepreneurship.</p>
                <button className='bg-[#E67E22] px-4 py-2 rounded-[2rem] text-sm mt-3'>
                    <Link to={"/register"}>Get Started Now</Link>
                </button>
            </div>

            <div className='bg-[#F2F4F3] p-10'>
                <h1 className='text-center text-xl font-semibold'>What Sets PBTC Apart</h1>
                <div className='flex justify-center items-center mt-[3rem]'>

                    <div className='w-[90%] bg-[#fff]  rounded-md flex justify-between items-center flex-wrap'>

                        <div className='border-r border-r-[#E7E7E7] border-b border-b-[#E7E7E7] h-[15rem] flex-1 min-w-[100%] md:min-w-[26.9rem] px-4 flex flex-col justify-center'>
                            <div className='w-[2.5rem] h-[2.5rem] rounded-md bg-[#fff] border border-[#E4E4E4] flex justify-center items-center'>
                                <FaRadio className='text-[#E67E22]' />
                            </div>
                            <h1 className=' text-lg font-semibold mt-4'>Futurist Evangelism</h1>
                            <p className='mt-2 text-[#969696] text-sm'>Spreading the Gospel through innovative strategies and cutting-edge technology</p>
                        </div>

                        <div className='border-r border-r-[#E7E7E7] border-b border-b-[#E7E7E7] h-[15rem] flex-1 min-w-[100%] md:min-w-[26.9rem] px-4 flex flex-col justify-center'>
                            <div className='w-[2.5rem] h-[2.5rem] rounded-md bg-[#fff] border border-[#E4E4E4] flex justify-center items-center'>
                                <FaCross className='text-[#E67E22]' />
                            </div>
                            <h1 className=' text-lg font-semibold mt-4'>Deliverance & Healing</h1>
                            <p className='mt-2 text-[#969696] text-sm'>Experience life-changing breakthroughs, spiritual deliverance, and divine healing</p>
                        </div>

                        <div className='border-r border-r-[#E7E7E7] border-b border-b-[#E7E7E7] h-[15rem] flex-1 min-w-[100%] md:min-w-[26.9rem] px-4 flex flex-col justify-center'>
                            <div className='w-[2.5rem] h-[2.5rem] rounded-md bg-[#fff] border border-[#E4E4E4] flex justify-center items-center'>
                                <FaTshirt className='text-[#E67E22]' />
                            </div>
                            <h1 className=' text-lg font-semibold mt-4'>Ultimate Top Sportswear Brand</h1>
                            <p className='mt-2 text-[#969696] text-sm'>Wear your faith proudly! Our premium Christian apparel blends style</p>
                        </div>

                        <div className='border-r border-r-[#E7E7E7] border-b border-b-[#E7E7E7] h-[15rem] flex-1 min-w-[100%] md:min-w-[26.9rem] px-4 flex flex-col justify-center'>
                            <div className='w-[2.5rem] h-[2.5rem] rounded-md bg-[#fff] border border-[#E4E4E4] flex justify-center items-center'>
                                <FaHandHoldingDollar className='text-[#E67E22]' />
                            </div>
                            <h1 className=' text-lg font-semibold mt-4'>Digital Tokens & Kingdom Finance</h1>
                            <p className='mt-2 text-[#969696] text-sm'>Be part of the future of faith-based finance. Access exclusive  investment opportunities</p>
                        </div>

                        <div className='border-r border-r-[#E7E7E7] border-b border-b-[#E7E7E7] h-[15rem] flex-1 min-w-[100%] md:min-w-[26.9rem] px-4 flex flex-col justify-center'>
                            <div className='w-[2.5rem] h-[2.5rem] rounded-md bg-[#fff] border border-[#E4E4E4] flex justify-center items-center'>
                                <FaGifts className='text-[#E67E22]' />
                            </div>
                            <h1 className=' text-lg font-semibold mt-4'>Exclusive Membership Benefits</h1>
                            <p className='mt-2 text-[#969696] text-sm'>Unlock the best compensation plan in the business, premium resources</p>
                        </div>

                        <div className='border-r border-r-[#E7E7E7] border-b border-b-[#E7E7E7] h-[15rem] flex-1 min-w-[100%] md:min-w-[26.9rem] px-4 flex flex-col justify-center'>
                            <div className='w-[2.5rem] h-[2.5rem] rounded-md bg-[#fff] border border-[#E4E4E4] flex justify-center items-center'>
                                <FaGlobe className='text-[#E67E22]' />
                            </div>
                            <h1 className=' text-lg font-semibold mt-4'>Global Impact & Community</h1>
                            <p className='mt-2 text-[#969696] text-sm'>Join a worldwide network of Christian entrepreneurs, ministries, and believers</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='p-10'>
                <h1 className='text-center text-xl font-semibold'>What Our Community Says About Us</h1>
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

            <div className='bg-[#F2F4F3] p-10 flex justify-center items-start gap-x-10 flex-wrap'>

                <div className='bg-[#fff] rounded-xl p-5 w-[98%] sm:w-[20rem] mt-4'>
                    <h1 className='text-lg font-semibold'>Why you Should Be A Part of</h1>
                    <h1 className='text-lg font-semibold text-[#E67E22]'>PBTC Worldwide Ministries</h1>
                    <div className='mt-5 flex justify-center items-center rounded-xl  bg-[#D9D9D9] h-[20rem] py-5 '>
                        <img className='bg-cover h-[100%] rounded-xl' src="https://s3-alpha-sig.figma.com/img/cd3a/c0a9/0841a84e52934ba2fa3224fbe4c1216c?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bVgLlmvxWolCu1M11JiFMBf9ysBamKEpXHCZlOzDCdyZF1ukkQIOw2I5TefBze1-sBEhyK--Bz6YuTzSAUu-qtLcYry5qXaRV7-EaampcTtOwYGM7V4YaIiVuX0AQJAeEQhlxx~WUADhHGV76Y3p0tiPf0L9JsoQLUu1Sdy-ItofeWVbow-B-LzfFGPkUILgWT0O9loJoSv5AHEkS-MtIIKtQxHOWiTcEaaLWM3QOQ8ZZ1G99yVz8gfFTOov32AZ5W4kxKkHuqt-w61GlSn5DvNwhsz~0WN0z8j7AB2vCOlhb5q~VlKKDBxK-JmgvSjurGcHn63TeV6IXnm1gxlwZg__" alt=""/>
                    </div>
                </div>
                <div className='bg-[#fff] rounded-xl p-5 w-[98%] sm:w-[30rem] mt-4'>
                    <div className='flex items-center justify-between bg-[#F6F6F6] w-[100%] h-[3.5rem] rounded-[3rem] px-3 py-2'>
                        <button className='px-3 py-2 text-[#fff] rounded-[3rem] bg-[#E67E22] text-sm cursor-pointer'>Our vision</button>
                        <button className='text-sm font-semibold cursor-pointer'>Our Mission</button>
                        <button className='text-sm font-semibold cursor-pointer'>What we offer</button>
                    </div>
                    <div className='flex justify-between items-center mt-5'>
                        <h1 className='text-[#E67E22] font-semibold '>Access to community disciples</h1>
                        <CgArrowTopRight className='text-[#E67E22] text-xl' />
                    </div>
                    <p className='mt-5 text-[#616060] text-sm'>Joining PBTC was a life-changing decision! The mentorship and faith-driven business model helped me build a strong spiritual foundation while creating financial opportunities. I’ve never felt more aligned with my purpose!</p>

                    <div className='flex justify-between items-center mt-5 border-t border-t-[#E1E1E1] border-b border-b-[#E1E1E1] py-4'>
                        <h1 className='font-semibold '>Transform your passion for christ</h1>
                        <GoArrowDownRight className='text-xl' />
                    </div>

                    <div className='flex justify-between items-center mt-5 border-b border-b-[#E1E1E1] pb-4'>
                        <h1 className='font-semibold '>Access resources and support</h1>
                        <GoArrowDownRight className='text-xl' />
                    </div>

                    <div className='flex justify-between items-center mt-5 border-b border-b-[#E1E1E1] pb-4'>
                        <h1 className='font-semibold '>Access resources and support</h1>
                        <GoArrowDownRight className='text-xl' />
                    </div>



                </div>

            </div>

            <div className='p-10 bg-[#E67E22] flex justify-center items-center text-[#fff] flex-col'>
                <h1 className='text-2xl font-semibold'>Don’t wait—step into your divine calling now</h1>
                <p className=' text-sm text-[#FFE6CF] md:w-[50%] text-center mt-3'>Be part of a movement that empowers you spiritually and financially. Unlock exclusive resources, mentorship, and opportunities designed for believers like you</p>
                <button className='bg-[#fff] text-[#E67E22] px-10 py-2 mt-3 rounded-full font-semibold cursor-pointer'>Book a call</button>
            </div>

            <Footer/>


        </div>
    )
}

export default HomePage
