import React from 'react'
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import EastIcon from '@mui/icons-material/East';


function Features() {
    return (
        <section class="py-20 mt-15 h-screen w-screen">

            <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                <h1 class="text-3xl text-center text-gray-800">Features</h1>
                <p class="text-center text-gray-400 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
            </div>

            <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">

                <div class="flex flex-col rounded-md shadow-md bg-gradient-to-tr from-[#daf5de] via-white to-[#dadff5] lg:mb-16">
                    <div class="p-6 flex flex-col">
                        <div className=' flex items-center justify-center shadow-md relative w-16 h-16  bg-[#e63c4a] rounded-full'>
                            <CloudDownloadOutlinedIcon style={{ color: "white" }} />
                        </div>
                        <h3 class="mt-5 mb-2 text-lg font-semibold">Business Consulting</h3>
                        <p class="mb-5 text-gray-400 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        <a href="#" style={{ color: "#6367eb" }}>Learn More <EastIcon className="float-right" style={{ color: "gray" }} /> </a>

                    </div>

                </div>

                <div class="flex flex-col rounded-md shadow-md bg-gradient-to-br from-white via-white to-[#a7e8c1] lg:mb-16">
                    <div class="p-6 flex flex-col">
                        <div className=' flex items-center justify-center relative w-16 h-16 bg-[#3ce699] rounded-full shadow-md'>
                            <GppGoodOutlinedIcon style={{ color: "white" }} />
                        </div>
                        <h3 class="mt-5 mb-2 text-lg font-semibold">Market Analysis</h3>
                        <p class="mb-5 text-gray-400 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        <a href="#" style={{ color: "#6367eb" }}>Learn More <EastIcon className="float-right" style={{ color: "gray" }} /> </a>

                    </div>

                </div>

                <div class="flex flex-col rounded-md shadow-md bg-gradient-to-br from-[#dadff5] via-white to-[#b1e0f0]  lg:mb-16">
                    <div class="p-6 flex flex-col">
                        <div className=' flex items-center justify-center relative w-16 h-16 bg-[#63c6eb] rounded-full shadow-md'>
                            <GridViewIcon style={{ color: "white" }} />
                        </div>
                        <h3 class="mt-5 mb-2 text-lg font-semibold">User Analysis</h3>
                        <p class="mb-5 text-gray-400 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        <a href="#" style={{ color: "#6367eb" }}>Learn More <EastIcon className="float-right" style={{ color: "gray" }} /> </a>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Features