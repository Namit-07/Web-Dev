"use client"

import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const Generate = () => {

    const searchParams = useSearchParams()

    // const [links, setLinks] = useState("")
    // const [linktext, setlinktext] = useState("")
    const [handle, sethandle] = useState(searchParams.get('handle'))
    const [link, setLink] = useState([{ link: "", linktext: "" }])
    const [pic, setpic] = useState("")

    const handleChange = (index, link, linktext) => {
            setLink((initialLinks)=>{
                return initialLinks.map((item, i)=>{
                    if (i==index){
                        return{link, linktext}
                    }
                    else{
                        return item
                    }
                })
            })
    }

    const addLink = () =>{
        setLink(link.concat([{ link: "", linktext: "" }]))
    }


    const submitLinks = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "links": link,
            "handle": handle,
            "pic": pic
        });    

        console.log("Sending data:", raw)

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("http://localhost:3000/api/add", requestOptions)
        const result = await r.json()
        if (result.success) {
            toast.success(result.message)
            setLink([{ link: "", linktext: "" }])
            setpic("")
            sethandle("")
        }
        else{
            toast.error(result.message)
        }
    }

    return (
        
        <div className='min-h-screen grid grid-cols-2'>
            
            <div className='col1 flex justify-center items-center flex-col'>
                <Link href={"/"}>
                 <img className="h-15 my-10" src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" alt="" />
                </Link>
                <h1 className='font-bold text-4xl'>Create your Bittree</h1>
                
                <div className='flex flex-col gap-4 my-10'>

                    <h2 className='font-semibold text-2xl'>Step 1: Claim your Handle</h2>
                    <div className='mx-4'>
                        <input value={handle || ""} onChange={e=>{sethandle(e.target.value)}} className="px-4 py-2 rounded-full border border-black" type="text" placeholder='Choose a Handle' />
                    </div>

                    <div className="item">
                    <h2 className='font-semibold text-2xl'>Step 2: Add Links</h2>
                    {link && link.map((item, index)=>{
                        return <div key={index} className='mx-4 flex gap-2 my-2'>
                        <input value={item.linktext || ""} onChange={e=>{handleChange(index, item.link, e.target.value)}} className="px-4 py-2 rounded-full border border-black" type="text" placeholder='Enter link text' />
                        <input value={item.link || ""} onChange={e=>{handleChange(index, e.target.value, item.linktext)}} className="px-4 py-2 rounded-full border border-black" type="text" placeholder='Enter link' />
                    </div>
                    })}
                        <button onClick={() => addLink()} className='p-5 py-2 bg-black text-white font-bold rounded-3xl mx-4 my-2'> + Add link</button>
                    </div>

                    <h2 className='font-semibold text-2xl'>Step 3: Add Pictures and Finalize</h2>
                    <div className='mx-4 flex flex-col gap-2'>
                        <input value={pic || ""} onChange={e=>{setpic(e.target.value)}} className="px-4 py-2 rounded-full border border-black" type="text" placeholder='Enter link to your picture' />
                        <button disabled={pic == "" || handle == "" || link[0].linktext == ""} onClick={()=>{submitLinks()}} className='disabled:bg-slate-500 p-5 py-2 bg-black w-fit text-white font-bold rounded-3xl'>Create your bittree</button>
                    </div>
                </div>
            </div>

            <div className='h-screen'>
                <div className='col2 w-full h-full'>
                    <img className="w-full h-full object-cover relative" src="banner-register-social-desktop.18fa56fce6ad2db4f48b.webp" alt="" />
                    <ToastContainer />
                </div>
            </div>
        </div>




    )
}

export default Generate
