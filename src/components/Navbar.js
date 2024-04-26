import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className='bg-orange-400 text-white px-3 py-5 flex justify-around items-center '>
            <h2 className='text-4xl font-[Rubik Scirbble]'>sk8</h2>
            {/* <img src={''} className='text-2xl font-bold' alt="sk8"/> */}
            <div className='flex gap-6 '>
                <a href="#home" className='hover:text-amber-800 hover:font-semibold'>Home</a>
                <a href="#skateApparel" className='hover:text-amber-800 hover:font-semibold'>Skate Apparel</a>
                <a href="#skateSupply" className='hover:text-amber-800 hover:font-semibold'>Skate Supply</a>
                <a href="#courses" className='hover:text-amber-800 hover:font-semibold'>Skate Lesson</a>
            </div>
            <button className='tezt-xl font-semibold text-black px-3 py-3 rounded-md bg-white'>Let's Connect</button>
        </nav>
    </>
  )
}

export default Navbar;

