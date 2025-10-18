"use client"
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation' 
import { useRouter } from 'next/navigation'

const page = () => {
  const params = useParams()  
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
        router.push('/dashboard')
    }, 2333);
    }, [])
  
  return (
    <div>
      <div>{params.slug}
         <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
      </div>
    </div>
  )
}

export default page
