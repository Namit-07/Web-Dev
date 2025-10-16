import React from 'react'

const footer = () => {
  return (
    <div className='bg-slate-800 text-white text-white flex flex-col justify-center items-center fixed bottom-0 w-full'>
        <div className="logo font-bold text-white text-2xl">
                    <span className='text-green-500'>&lt;</span>
                    Pass
                    <span className='text-green-500'>JAIL/&gt;</span>
                </div>

       <div className='flex'>   Created with <img className='w-6 mx-2' src="heart.png" alt="" /> by Namit Tickoo </div> 
      </div>
    
  )
}

export default footer
