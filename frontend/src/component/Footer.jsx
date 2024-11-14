import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col items-center bg-green-950 justify-center w-full fixed bottom-0'>
        <div className="title flex gap-0 font-bold text-xl justify-center  md:text-lg max-md:text-base">
            <span className='text-green-400'>&lt;</span>
            <h1 className='text-white'>Pass</h1><span className='text-green-500'>OP</span>
            <span className='text-green-400'>&#x2f;</span>
            <span className='text-green-400'>&gt;</span>
        </div>
        <div className='flex items-center pb-[0.5px] text-white max-md:text-[12px] '>Created UnderGuidence of <img className='size-6 max-md:size-3 m-1 max-md:m-0.5 rounded-full' src="/harryBhai.jpg" alt="" /> codewithharry</div>
    </div>
  )
}

export default Footer
