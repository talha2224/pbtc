import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import { IoMail } from 'react-icons/io5'
import { RiInstagramFill } from 'react-icons/ri'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='p-10 bg-[#121212] text-[#fff]'>

            <div className='flex justify-between items-start border-b border-b-[#272727] pb-10 flex-wrap'>

                <div className='mt-2'>
                    <div className='flex items-center gap-x-2'>
                        <img src={Logo} alt="" className='h-10' />
                        <p className='text-lg font-semibold'>PBTC Worldwide Ministries</p>
                    </div>
                    <p className='mt-3 text-sm text-[#8D8D8C] sm:w-[24rem]'>Be part of a movement that empowers you spiritually and financially. Unlock exclusive resources, mentorship, and opportunities designed for believers like you</p>

                </div>

                <div className='mt-2'>
                    <h1 className='text-lg font-semibold'>Product & Store</h1>
                    <p className='mt-3 text-sm text-[#8D8D8C]'>Featured Christian Merchandise</p>
                    <p className='mt-3 text-sm text-[#8D8D8C]'>Ultimate Top Sportwear Brand</p>
                    <p className='mt-3 text-sm text-[#8D8D8C]'>Digital Tokens</p>
                    <p className='mt-3 text-sm text-[#8D8D8C]'>Affiliate Opportunities</p>
                </div>

                <div className='mt-2'>
                    <h1 className='text-lg font-semibold'>Our Team & Ministries</h1>
                    <p className='mt-3 text-sm text-[#8D8D8C]'>Meet Our Team</p>
                    <p className='mt-3 text-sm text-[#8D8D8C]'>Who is the creator?</p>
                    <p className='mt-3 text-sm text-[#8D8D8C]'>Why Jesus /Yeshua</p>
                    <p className='mt-3 text-sm text-[#8D8D8C]'>Our Ministries & Messages</p>
                    <p className='mt-3 text-sm text-[#8D8D8C]'>Resources & Search by area</p>
                </div>

                <div className='mt-2'>
                    <h1 className='text-lg font-semibold'>Get in touch</h1>
                    <p className='mt-3 text-sm text-[#8D8D8C]'> Support@pbtc.us</p>
                    <div className='flex-wrap flex gap-x-2 items-center mt-5'>
                        <div className='mt-2 w-[2rem] h-[2rem] bg-[#272727] rounded-md flex justify-center items-center text-[#fff]'>
                            <IoMail />
                        </div>
                        <div className='mt-2 w-[2rem] h-[2rem] bg-[#272727] rounded-md flex justify-center items-center text-[#fff]'>
                            <RiInstagramFill />
                        </div>
                        <div className='mt-2 w-[2rem] h-[2rem] bg-[#272727] rounded-md flex justify-center items-center text-[#fff]'>
                            <FaTelegramPlane />
                        </div>
                        <div className='mt-2 w-[2rem] h-[2rem] bg-[#272727] rounded-md flex justify-center items-center text-[#fff]'>
                            <FaTwitter />
                        </div>
                    </div>
                </div>

            </div>

            <div className='mt-10 flex justify-between items-center flex-wrap'>
                <p className='text-[#8D8D8C]'>@2025 PBTC, All rights reserved</p>
                <div className='flex items-center gap-x-4 mt-2'>
                    <p className='text-[#8D8D8C]'>Terms & Conditions</p>
                    <p className='text-[#8D8D8C]'>Privacy Policy</p>
                </div>
            </div>

        </div>
    )
}

export default Footer
