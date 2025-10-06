import React, {useContext} from 'react'
import Component1 from './Component1'
import { counterContext } from '../Context/context'

const button = () => {
  const value = useContext(counterContext);
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}><span><Component1/></span>I am a button</button>
      
    </div>
  )
}

export default button
