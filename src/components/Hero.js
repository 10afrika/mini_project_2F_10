import React from 'react'
import Button from './Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function Hero() {
    return (
        <section className="relative ">
            <div className="container flex flex-col-reverse lg:flex-row items-center gap-12  mx-auto lg:mt-20">
                <div className='flex flex-1 flex-col  flex-wrap item-center lg:items-start'>
                    <h1 className=" md:text-4 lg:text-3xl text-center lg:text-left font-bold">Business</h1>
                    <h1 className=" md:text-4 lg:text-3xl text-center lg:text-left mt-2 mb-10 font-bold">Management</h1>

                    <div className='container mb-7'>
                        <div className='flex shadow-lg rounded-md bg-blue-700 items-center'>
                            <div className='rounded-md bg-white flex items-center justify-center w-15 h-15 mb-3 ml-7'>
                                <img className=" rounded-full w-10 h-10" src={require('../assets/images/main-logo.png')} />
                            </div>
                            <div className="flex flex-col px-5 py-1">
                                <h3 className="font-semibold text-lg">Sales</h3>
                                <p className="mt-1 flex-1 font-light text-sm text-gray-400">Lorem ipsum is simply dummy text of the</p>
                            </div>
                        </div>
                        <div className='flex shadow-lg rounded-md bg-blue-700 items-center'>
                            <div className='rounded-md bg-white flex items-center justify-center w-15 h-15 mb-3 ml-7'>
                                <img className=" rounded-full w-10 h-10" src={require('../assets/images/main-logo.png')} />
                            </div>
                            <div className="flex flex-col px-5 py-1">
                                <h3 className="font-semibold text-lg">Sales</h3>
                                <p className="mt-1 flex-1 font-light text-sm text-gray-400">Lorem ipsum is simply dummy text of the</p>
                            </div>
                        </div>
                        <div className='flex shadow-lg rounded-md bg-blue-700 items-center'>
                            <div className='rounded-md bg-white flex items-center justify-center w-15 h-15 mb-3 ml-7'>
                                <img className=" rounded-full w-10 h-10" src={require('../assets/images/main-logo.png')} />
                            </div>
                            <div className="flex flex-col px-5 py-1">
                                <h3 className="font-semibold text-lg">Sales</h3>
                                <p className="mt-1 flex-1 font-light text-sm text-gray-400">Lorem ipsum is simply dummy text of the</p>
                            </div>
                        </div>
                    </div>

                    <div className='relative mt-2 flex justify-center  flex-wrap gap-6'>
                        <Button class="mx-0">Join Us</Button>
                        <div className=' flex items-center justify-center shadow-md relative w-10 h-10 border-1 border-black  rounded-full'>
                            <InstagramIcon />
                        </div>
                        <div className=' flex items-center justify-center shadow-md relative w-10 h-10 border-1 border-black  rounded-full'>
                            <TwitterIcon />
                        </div>
                        <div className=' flex items-center justify-center shadow-md relative w-10 h-10 border-1 border-black  rounded-full'>
                            <FacebookIcon />
                        </div>


                    </div>

                </div>
                <div className=" flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
                    <img className='w-3/4 h-3/4' src={require("../assets/images/main-girl.png")} alt="main body" />
                </div>
            </div>
        </section>
    )
}

export default Hero