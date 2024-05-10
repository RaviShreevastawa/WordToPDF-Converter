import React from 'react'

function navbar() {
  return (
    <div className='max-w-screnn-2xl mx-auto container px-6 md:px-40 shadow-lg h-16 fixed'>
       <div className='flex justify-between'>
        <h1 className=' text-2xl cursor-pointer font-bold'>Word
        <span className='text-3xl text-green-500'>To</span>PDF
        </h1>
        <h1 className='text-2xl cursor-pointer font-bold hover:scale-125 duration-300'>Home</h1>
       </div>
    </div>
  )
}

export default navbar;
