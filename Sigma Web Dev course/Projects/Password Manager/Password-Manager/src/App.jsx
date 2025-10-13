import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <div>My Ui</div>
    </>
  )
}

export default App
