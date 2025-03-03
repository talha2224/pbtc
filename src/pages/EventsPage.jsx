import React from 'react'
import Navbar from '../components/Navbar'
import event1 from '../assets/event-1.svg'
import event2 from '../assets/event-2.jpg'
import event3 from '../assets/event-3.svg'
const EventsPage = () => {
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



        </div>
    )
}

export default EventsPage
