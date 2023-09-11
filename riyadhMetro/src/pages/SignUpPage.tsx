import React from 'react'
import img from '../assets/signupImg.png'

export default function SignUpPage() {
  return (
    <div className='flex flex-row justify-between items-center w-full h-screen'>
      <div className='flex flex-col items-center shadow-2xl bg-gradient-to-b from-[#64CCC5] to-[#053B50] w-1/2 h-3/4 ml-40 rounded-3xl'>
        <h1 className='font-bold text-4xl my-8  text-[#EEEEEE]'>Sign Up</h1>
        <div className='flex flex-row my-10 w-4/5 justify-between'>
          <div className='flex flex-col'>
          <label className='text-md  text-[#EEEEEE]'>First Name</label>
          <input className='rounded-md h-8'></input>
          </div>
          <div className='flex flex-col'>
          <label className='text-md  text-[#EEEEEE]'>Last Name</label>
          <input className='rounded-md h-8'></input>
          </div>
        </div>
        <div className='flex justify-start flex-col w-4/5'>
          <div className='flex flex-col mb-10 w-full'>
        <label className='text-md  text-[#EEEEEE]'>Email</label>
        <input className='rounded-md h-8'></input>
        </div>
        <div className='flex flex-col w-full'>
        <label className='text-md  text-[#EEEEEE]'>Password</label>
        <input className='rounded-md h-8'></input>
        </div>
        </div>
        <button className='rounded-xl w-72 h-12 bg-[#EEEEEE] mt-12 text-[#64CCC5] font-bold text-2xl'>Sign Up</button>
      </div>
      <img className='h-screen w-1/2' src={img}></img>
    </div>
  )
}
