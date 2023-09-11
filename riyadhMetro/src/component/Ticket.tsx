import React from 'react'
import TicketForm from '../assets/TicketForm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

interface details {
  from: string,
  to: string,
  date: string,
  price: number,
  deleteOnclick:string
  pdfOnclick: string,
}  

export default function Ticket(props:details) {
  
  return (
    
      <div className='flex justify-center items-center h-3/4 w-full my-10 relative'>
                <img className='w-full' src={TicketForm}></img>
                <div className='absolute top-16 left-20'>
                  <h1 className='mb-2 text-3xl font-bold text-[#176B87]'>From</h1>
                  <h1 className='text-lg font-bold text-[#64CCC5] w-4/6'>{props.from}</h1>
                </div>
                <div className='absolute top-16 left-96'>
                  <h1 className='mb-2 text-3xl font-bold text-[#176B87]'>To</h1>
                  <h1 className='text-lg font-bold text-[#64CCC5] w-4/6'>{props.to}</h1>
                </div>
                <div className='absolute top-48 left-52'>
                  <h1 className='mb-2 text-2xl font-bold text-[#176B87]'>Date</h1>
                  <div className='flex flex-row items-center'>
                  <FontAwesomeIcon className='text-[#176B87]' icon={faCalendarDays}/>
                  <h1 className='text-xl font-bold text-[#64CCC5] pl-2'>{props.date}</h1>
                  </div>
                </div>
                <div className='absolute flex flex-col h-36 justify-between gap-y-10 top-26 right-36'>
                  
                
                  <div className='flex flex-row justify-center text-6xl font-bold'>
                    <p className='text-[#64CCC5]'>{props.price}</p>
                    <h1 className='text-[#176B87]'>$</h1>
                  </div>
                  <button onClick={props.deleteOnclick} className='ml-5 text-2xl text-[#EEEEEE] font-bold bg-[#871717] w-14 h-14 rounded-full'><FontAwesomeIcon icon={faTrash} /></button>

                </div>
            </div>
      
  
  )
}
