import TicketForm from '../assets/TicketForm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { MouseEventHandler } from 'react'

interface details {
  from: string | null,
  to: string | null,
  date: string | null,
  price: string | null,
  deleteOnclick?: MouseEventHandler<HTMLButtonElement>
  
}  

export default function Ticket(props:details) {
  
  return (
    
      <div className='flex justify-center items-center h-3/4 w-full lg:my-10 md:my-10 my-5 relative'>
                <img className='w-full' src={TicketForm}></img>
                <div className='absolute lg:top-16 lg:left-20 md:top-8 md:left-8 right-72 top-4'>
                  <h1 className='lg:mb-2 md:mb-1 lg:text-3xl md:text-xl text-sm font-bold text-[#176B87]'>From</h1>
                  <h1 className='lg:text-2xl text-sm md:text-xl font-bold text-[#64CCC5] lg:w-1/5 w-20'>{props.from}</h1>
                </div>
                <div className='absolute lg:top-16 lg:left-96 md:top-8 md:left-60 left-36 top-4'>
                  <h1 className='lg:mb-2 md:mb-1 lg:text-3xl md:text-xl text-sm font-bold text-[#176B87]'>To</h1>
                  <h1 className='lg:text-2xl text-sm md:text-xl font-bold text-[#64CCC5] lg:w-4/6 w-40'>{props.to}</h1>
                </div>

                <div className='absolute lg:top-60 lg:left-52 md:top-36 md:left-40 right-48 top-20'>
                  <h1 className='lg:mb-2 md:mb-1 lg:text-3xl md:text-xl text-sm font-bold text-[#176B87]'>Date</h1>
                  <div className='flex flex-row items-center'>
                  <FontAwesomeIcon className='text-[#176B87] lg:text-lg text-sm' icon={faCalendarDays}/>
                  <h1 className='lg:text-2xl text-sm md:text-xl font-bold text-[#64CCC5] pl-2'>{props.date}</h1>
                  </div>
                </div>

                <div className='absolute justify-center items-center flex flex-col lg:h-48 md:h-32 h-16 w-20 lg:w-60 md:w-40 gap-y-2 md:gap-y-5 lg:gap-y-10 lg:top-26 lg:right-20 md:right-12 right-8'>
                
                  <div className='flex flex-row justify-center gap-x-2 lg:text-6xl font-bold'>
                    <p className='text-[#64CCC5] lg:pr-5 text-sm lg:text-6xl md:text-4xl'>{props.price}</p>
                    <h1 className='text-[#176B87] text-sm lg:text-6xl md:text-4xl'>SAR</h1>
                  </div>
                  <button onClick={props.deleteOnclick} className='text-[#EEEEEE] font-bold bg-[#871717] lg:w-14 lg:h-14 md:w-10 md:h-10 w-6 h-6 rounded-full'><FontAwesomeIcon className='lg:text-2xl md:text-xl text-sm' icon={faTrash} /></button>

                </div>
            </div>
      
  
  )
}
