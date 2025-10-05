import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let  todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])


  const saveToLS = (params)=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = (e)=>{
    setshowFinished(!showFinished)
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLS()
  }

  const handleDelete = (e, id) => {
    alert("Are you sure you want to delete this task?")
    let newTodos = todos.filter(item => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLS()
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    console.log(todos)
    saveToLS()
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS()
  }

  return (
    <>
     <Navbar />
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-blue-100 min-h-[80vh] md:w-1/2">
        <h1 className='font-bold text-center text-xl'>iTask - Manage your Daily Tasks at one Place</h1>
        <div className="addTodo my-5 flex flex-col gap-3">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className="bg-white w-full rounded-full px-5 py-2" />
          <button onClick={handleAdd} disabled={todo.length<=3}className="flex text-center mx-auto px-6 py-2 justify-center bg-blue-800 hover:bg-blue-950 font-bold text-sm   text-white rounded-md  disabled:bg-blue-800">Save</button> 
        </div>
        <input className="my-4" onChange={toggleFinished} type="checkbox" checked={showFinished} /> Show Finished
        <div className="line h-[1px] bg-black mx-auto opacity-15 w-3/4 my-4"></div>
        <h2 className="text-lg font-bold">Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className="m-4">No todos added yet</div>}
          {todos.map(item => {

            return(showFinished || !item.isCompleted) && <div key={item.id} className="todo flex my-3 justify-between">
              <div className='flex gap-5'>
                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>
              <div className="buttons flex h-full">
                <button onClick={(e) => handleEdit(e, item.id)} className="bg-blue-800 hover:bg-blue-950 font-bold text-sm p-3 py-1 text-white rounded-md mx-3"><FaEdit /></button>
                <button onClick={(e) => handleDelete(e, item.id)} className="bg-blue-800 hover:bg-blue-950 font-bold text-sm p-3 py-1 text-white rounded-md mx-3"><MdDeleteForever /></button>
              </div>
            </div>
          })}
        </div>

      </div>
    </>
  )
}

export default App
