import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // let a = 0;  // -- does not persist value between renders (causes re-render when updated)
  // const a = useRef(0);  // -- allows to persist value between renders (doesn't cause re-render when updated)
  const btnRef = useRef()

  // useEffect(() => { 
  //   // a = a + 1
  //   a.current = a.current + 1;
  //   console.log(`re-rendering and the value of a is ${a.current}...`);
  // });

   useEffect(() => { 
    console.log(`First rendering...`)
    btnRef.current.style.backgroundColor = "red"
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={() =>{btnRef.current.style.display = "none"}}>Change Me</button>
    </>
  )
}

export default App
