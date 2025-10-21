"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const page = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = async () => {
         const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                seturl("")   
                setshorturl("")
                console.log(result)
                alert(result.message)
            
            })
            .catch((error) => console.error(error));

    }

  return (
    <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
      <h1 className='font-bold text-2xl'>Generate your short URL's</h1>
      <div className='flex flex-col gap-2'>
        <input type="text" value={url} className='p-3 focus:outline-purple-600 bg-white rounded-md' placeholder='Enter your URL' onChange={e =>{seturl(e.target.value)}} />

        <input type="text" value={shorturl} className='p-3 focus:outline-purple-600 bg-white rounded-md' placeholder='Enter preferred short URL text' onChange={e =>{setshorturl(e.target.value)}} />

        <button onClick={generate} className='bg-amber-500 rounded-lg shadow-lg my-2 p-2 font-bold w-fit px-6 self-center'>Generate</button>
      </div>
      {generated && <><span className='font-bold text-lg'>Your Link</span><code> <Link target="_blank" href={generated}>{generated}</Link>
        </code></>}
    </div>
  )
}

export default page
