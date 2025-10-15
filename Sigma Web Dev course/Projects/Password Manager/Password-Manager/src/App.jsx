import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Manager from './Components/Manager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Manager/>
      <div className='font-bold text-2xl text-center'>
        <span className='text-green-500'>&lt;</span>
          <span>Your Saved Passwords</span><span>
             <span className='text-green-500'>/&gt;</span>
        </span>
      </div>
    </>
  )
}

export default App
