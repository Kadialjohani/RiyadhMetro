import React from 'react'
import TicketForm from '../assets/TicketForm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface details {
  from: string,
  to: string,
  date: string,
  price: number,
}  

export default function Ticket(props:details) {
  return (
    
      <div className='flex justify-center items-center h-3/4 w-full my-10 relative'>
                <img className='' src={TicketForm}></img>
                <div className='absolute top-10 left-12'>
                  <h1 className='mb-2 text-xl font-bold text-[#176B87]'>From</h1>
                  <h1 className='text-lg font-bold text-[#64CCC5] w-4/6'>{props.from}</h1>
                </div>
                <div className='absolute top-10 left-80'>
                  <h1 className='mb-2 text-xl font-bold text-[#176B87]'>To</h1>
                  <h1 className='text-lg font-bold text-[#64CCC5] w-4/6'>{props.to}</h1>
                </div>
                <div className='absolute top-48 left-52'>
                  <h1 className='mb-2 text-xl font-bold text-[#176B87]'>Date</h1>
                  <div className='flex flex-row items-center'>
                  <FontAwesomeIcon className='text-[#176B87]' icon={faCalendarDays}/>
                  <h1 className='text-xl font-bold text-[#64CCC5] pl-2'>{props.date}</h1>
                  </div>
                </div>
                <div className='absolute flex flex-col h-36 justify-between top-8 right-14'>
                  <div className='flex flex-row justify-between w-52'>
                  <button className='mb-2 text-2xl text-[#EEEEEE] font-bold bg-[#176B87] w-20 h-10 rounded-full'><FontAwesomeIcon icon={faPenToSquare} /></button>
                  <button className='mb-2 text-2xl text-[#EEEEEE] font-bold bg-[#871717] w-20 h-10 rounded-full'><FontAwesomeIcon icon={faTrash} /></button>
                  </div>
                  <div className='flex flex-row justify-center text-6xl font-bold'>
                    <p className='text-[#64CCC5]'>{props.price}</p>
                    <h1 className='text-[#176B87]'>$</h1>
                  </div>
                </div>
            </div>
      
  
  )
}