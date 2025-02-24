import React from 'react'
import Countries from '../assets/countries.svg'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const EventsPage = () => {
    return (
        <div>
            <Navbar />

            <div style={{ backgroundImage: `url(${`https://s3-alpha-sig.figma.com/img/369d/2aaf/446bc220955c2a0fd30f33777fbda59e?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TRCJJb6tBMA~0F9bmWCRrZdvEMrt1Vsoe7K0iSL~jGyl34dCiek6Spg2mHvTHGMKaHrD~hnpNvSlxtE5PIjcIyNf6Du9lbInhTjQvZIwNbULiRKuFMCV2RLOgw3ykdrQD42g6Jbs5SXoAaVyudbndwhJr2f9-fqK9eXxdPlVGHtb6BqXIC7o5nHrj54ve-kjb2aNAvQaDegvnS2M0HO~G5c5sYHZJPS83gLAvnU6rsuNnaFUvcdm7pCVNySmxpVGD0Ew4HbP7Hr598~JHlQ2M2RHDiEfRS9e1YsrAI~A-rTd~CaXwcSN5bvt~xVx0PqB1QaTZH-wDMgDJ65iyumWjQ__`})` }} className='h-[100vh] w-screen flex justify-center items-center flex-col text-[#fff] px-5'>
                <h1 className='text-5xl font-semibold text-center'>All Our Church</h1>
                <h1 className='text-5xl font-semibold mt-1 text-center'>around The World</h1>
                <p className='mt-2 text-sm md:w-[50%] text-center text-[#D1D0D0]'>We love Jesus, we love people, and we’re on a mission of showing God’s love to the world. This website gives you an idea of who we are but best of all, come and visit!</p>
                <button className='bg-[#E67E22] px-4 py-2 rounded-[2rem] text-sm mt-3'>
                    <Link to={"/register"}>Get Started Now</Link>
                </button>
            </div>


            <div className="p-10 flex justify-center items-center flex-col">

                <h1 className="text-xl font-semibold">Exciting Events Ahead Stay Connected and Get Involved</h1>

                <div className='flex justify-center items-center mt-10'>
                    <img src={Countries} alt="" />
                </div>
                
            </div>


            <div className="p-10 bg-[#E67E22] flex justify-center items-center text-[#fff] flex-col">
                <h1 className="text-2xl font-semibold">Don’t wait—step into your divine calling now</h1>
                <p className=" text-sm text-[#FFE6CF] w-[50%] text-center mt-3">Be part of a movement that empowers you spiritually and financially. Unlock exclusive resources, mentorship, and opportunities designed for believers like you</p>
                <button className="bg-[#fff] text-[#E67E22] px-10 py-2 mt-3 rounded-full font-semibold cursor-pointer">Book a call</button>
            </div>

            <Footer />


        </div>
    )
}

export default EventsPage
