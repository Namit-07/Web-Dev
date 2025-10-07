import { useState } from 'react'
import './App.css'
import { set, useForm } from "react-hook-form"


function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()

  const delay = (d)=>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve()
      }, d*1000)
    })
  }
   const onSubmit = async (data) =>{ 
    //await delay(2) // simulating network delay
    let r = await fetch("http://localhost:3000/", {
      method: "POST",   
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    let res = await r.text()
     console.log(data, res)
    // if(data.username !== "shubham"){
    //   setError("myForm", {message: "Your form is not in good order because credentials are invalid"})
    // }
    // if(data.username === "rohan"){
    //   setError("blocked", {message: "Sorry this user is blocked"})
    // } 
  }

  return (
    <>
    {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' {...register("username", {required: {value:true, message: "Username is required"}, minLength: {value: 3, message: "Min length is 3"}, maxLength: {value: 8, message: "Max length is 8"}})} type="text" />
          <br />
          {errors.username && <div className='red'>{errors.username.message}</div>}
          <input placeholder='password' {...register("password", {minLength: {value: 3, message: "Min length is 3"}})} type="password" />
          <br />
          {errors.password && <div className='red'>{errors.password.message}</div>}
          <input disabled={isSubmitting} type="submit" value="Submit" />
          {errors.myForm && <div className='red'>{errors.myForm.message}</div>}  
          {errors.blocked && <div className='red'>{errors.blocked.message}</div>}  
        </form>
      </div>
    </>
  )
}

export default App
