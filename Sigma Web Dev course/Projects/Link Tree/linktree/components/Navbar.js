import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-white w-[90vw] flex justify-between fixed absolute top-12 right-[4.5vw] rounded-full p-3  '>
      <div className="logo flex gap-16 items-center px-8">
        <img className="h-6" src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" alt="" />

        <ul className='flex gap-6 text-black items-center'>
            <li>Products</li>
            <li>Templates</li>
            <li>Marketplace</li>
            <li>Learn</li>
            <li>Pricing</li>
        </ul>
      </div>
      <div className='flex gap-3'>
        <button className='login bg-gray-200 px-6 py-4 rounded-md font-bold'>Log in</button>
        <button className='signup bg-gray-800 text-white rounded-full py-5  px-7 font-bold'>Sign up free</button>
      </div>
    </nav>
  )
}

export default Navbar
