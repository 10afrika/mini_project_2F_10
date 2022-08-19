import React from 'react'

function NavBar2() {
    let Links = [

        { name: "About", link: "/" },
        { name: "Service", link: "/" },
        { name: "Product", link: "/" },
        { name: "Blog", link: "/" },

    ];
    return (
        <header>
            <nav class="container flex items-center py-4 mt-4 sm:mt-12">
                <div className=' ml-36 py-1 flex relative items-center justify-center w-10 h-10 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full gap-10'>
                    <img className="inline-block w-8 h-8 bg-transparent rounded-full" src={require("../assets/images/main-logo.png")} alt="Main Logo" />
                </div>
                <div className='font-bold ml-10 text-2xl  cursor-pointer flex items-center font-sans 
        text-gray-800'>
                    Business
                </div>
                <ul class="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs">
                    {Links.map((link) => (
                        <li key={link.name} className='md:ml-8 text-m md:my-0 my-7 font-semibold pl-4'>
                            <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                        </li>
                    ))}
                    <Button className='ml-16'>
                        Contact Us
                    </Button>      </ul>
                <div class="flex sm:hidden flex-1 justify-end">
                    <i class="text-2xl fas fa-bars"></i>
                </div>
            </nav>
        </header>
    )
}

export default NavBar2