import React from 'react'

interface card {
  src: string,
  title: string,
}
export default function Card(props:card) {
  return (
    <div className='lg:w-2/6 md:w-full md:h-1/5 sm:w-full sm:h-1/5 lg:h-2/5  rounded-3xl bg-[#EEEEEE] hover:translate-y-5'>
      <img src={props.src} className='h-3/4 w-full rounded-t-3xl'></img>
      <h1 className='h-1/4 font-bold flex justify-center items-center text-xl text-[#053B50]'>{props.title}</h1>
    </div>
  )
}
