"use client"
import React from 'react'
import {signIn} from "next-auth/react"



export default function Login() {
  return (
    <div>
      <button className='cursor-pointer' onClick={()=>signIn()}>Login</button>
    </div>
  )
}
