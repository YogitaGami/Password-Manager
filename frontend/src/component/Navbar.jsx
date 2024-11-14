import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className='bg-green-950 w-full sticky top-0 p-2'>
        <ul className='flex justify-around'>
          <div className="title flex gap-0 font-bold text-3xl  md:text-2xl max-md:text-xl justify-center">
            <span className='text-green-400'>&lt;</span>
            <h1 className='text-white'>Pass</h1><span className='text-green-500'>OP</span>
            <span className='text-green-400'>&#x2f;</span>
            <span className='text-green-400'>&gt;</span>
          </div>

          <button className='bg-green-700 p-1 max-md:p-0.5 rounded-full border-white border-[1px] flex gap-1 items-center'><img className="invert size-7 max-md:size-5" src="src/assets/github.svg" alt="" /><span className='text-white max-md:text-[16px]'>GitHub</span></button>
          
        </ul>
      </nav>
    </>
  )
}

export default Navbar
