import React from 'react'
import SuccesessIcon from '../assets/icon-success.svg'

const Thanks = ({email,setIsSubmitted}) => {
  return (
    <div className='bg-white w-3/12 h-7/12 rounded-3xl shadow-lg p-8 grid '>
        <img src={SuccesessIcon} className='w-10' />
      <h1 className='font-bold text-3xl'>Thanks for subscribing!</h1>

        <p className='text-[10px]'>A confirmation email has been sent to <strong> {email}</strong>. 
        Please open it and click the button inside to confirm your subscription.</p>

        <button className='text-white bg-linear-to-r from-red-600 to-orange-400 rounded-md cursor-pointer hover:shadow-md shadow-amber-500/70 transition-all duration-200 mt-2 hover:bg-linear-to-r hover:from-red-400 hover:to-orange-300' onClick={()=>{setIsSubmitted(false)}}>Dismiss message</button>
    </div>
  )
}

export default Thanks
