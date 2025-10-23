"use client"

import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';

const Generate = () => {
    const [links, setLinks] = useState("")
    const [handle, sethandle] = useState("")
    const [linktext, setlinktext] = useState("")
    const [pic, setpic] = useState("")

    const addLink = async (text, links, handle) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "links": links,
            "linktext": text,
            "handle": handle
        });    

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
            setLinks([])
            setlinktext("")
            setpic("")
            sethandle("")
        }
        else {
            toast.error(result.message)
        }
    }

    return (
        <div className='min-h-screen grid grid-cols-2'>
            
            <div className='col1 flex justify-center items-center flex-col'>
                <h1 className='font-bold text-4xl'>Create your Bittree</h1>
                <div className='flex flex-col gap-4 my-10'>

                    <h2 className='font-semibold text-2xl'>Step 1: Claim your Handle</h2>
                    <div className='mx-4'>
                        <input value={handle || ""} onChange={e=>{sethandle(e.target.value)}} className="px-4 py-2 rounded-full border border-black" type="text" placeholder='Choose a Handle' />
                    </div>

                    <h2 className='font-semibold text-2xl'>Step 2: Add Links</h2>
                    <div className='mx-4 flex gap-4'>
                        <input value={linktext || ""} onChange={e=>{setlinktext(e.target.value)}} className="px-4 py-2 rounded-full border border-black" type="text" placeholder='Enter link text' />
                        <input value={links || ""} onChange={e=>{setLinks(e.target.value)}} className="px-4 py-2 rounded-full border border-black" type="text" placeholder='Enter link' />
                        <button onClick={() => addLink(linktext, links, handle)} className='p-5 py-2 bg-black text-white font-bold rounded-3xl'> + Add link</button>
                    </div>

                    <h2 className='font-semibold text-2xl'>Step 3: Add Pictures and Finalize</h2>
                    <div className='mx-4 flex flex-col'>
                        <input value={pic || ""} onChange={e=>{setpic(e.target.value)}} className="px-4 py-2 rounded-full border border-black" type="text" placeholder='Enter link to your picture' />
                        <button className='p-5 py-2 my-2 bg-black w-fit text-white font-bold rounded-3xl'>Create your bitlink</button>
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
