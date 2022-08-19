import React from 'react'

const Button = (props) => {
    return (
        <button className='bg-[#c29008] text-white font-sans font-semibold py-2 px-6 rounded  hover:shadow-lg 
    duration-500'>
            {props.children}
        </button>
    )
}

export default Button