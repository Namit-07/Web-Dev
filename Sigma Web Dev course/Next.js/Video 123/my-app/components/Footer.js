import React from 'react'

const Footer = () => {
  return (
   <footer className="flex justify-around bg-slate-800 text-white py-4">
    <div className="text-center">Copyright &copy; 2023</div>
    <ul className="flex gap-2 text-sm"></ul>
    <a href="/"><li className='text-xs'>Home</li></a>
    <a href="/about"><li className='text-xs'>About</li></a>
    <a href="/contact"><li className='text-xs'>Contact</li></a>
   </footer>
      
    
  )
}

export default Footer
