import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, multiply } from './redux/Counter/CounterSlice.js'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar count={count} />
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        Currently count is {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(multiply())}>*</button>
      </div>
    </>
  )
}

export default App
