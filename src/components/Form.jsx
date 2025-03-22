import React, { useState } from 'react'
import img from '../assets/illustration-sign-up-desktop.svg'
import MobileImg from '../assets/illustration-sign-up-mobile.svg'
import CheckIcon from '../assets/icon-success.svg'

const Form = ({setEmail,setIsSubmitted}) => {
  const [emailInput, setEmailInput] = useState('')
  const [isValid, setIsValid] = useState(true)

  const handleSubmit = () => {
    if (emailInput.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setEmail(emailInput);
      setIsSubmitted(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className='md:flex md:w-3/5 bg-white md:p-4 md:rounded-3xl  shadow-lg md:h-4/5 max-md:grid max-md:justify-center gap-4 md:flex-row-reverse'>
      <div className='md:w-1/2 flex max-md:self-start relative'>
      <img src={MobileImg} alt="illustration" className="w-full md:hidden" />
      <img src={img} alt="illustration" className="hidden md:block w-full h-[390px] absolute left-7" />
      </div>
      <div className='md:w-1/2 grid  justify-center pl-8 h-full content-center gap-3 place-content-center'>
      <p className='text-black font-semibold md:text-[40px] max-md:text-3xl'>Stay updated!</p>
      <p className='text-gray-500 text-xs'>Join 60,000+ product managers receiving monthly updates on:</p>
        <div className='flex items-center text-gray-500 text-xs gap-3'>
        <img src={CheckIcon} className='h-4'/>
        <p>Product discovery and building what matters</p>
        </div>
        <div className='flex items-center text-gray-500 text-xs gap-3'>
        <img src={CheckIcon} className='h-4' />
        <p> Measuring to ensure updates are a success</p>
        </div>
        <div className='flex items-center text-gray-500 text-xs gap-3'>
            <img src={CheckIcon} className='h-4'/>
            <p>And much more!</p>
        </div>

        <div className='flex justify-between'>
        <p className='text-black text-xs'>Email address</p>
        {!isValid && <p className="text-red-500 text-xs mt-1 ">Valid email required</p>}
        </div>
        <input id='email' value={emailInput} type='email' className='md:w-full max-md:w-11/12 p-2 text-sm rounded-lg border border-gray-300 text-gray-300 pl-5 invalid:not-placeholder-shown:border-red-500 invalid:not-placeholder-shown:text-gray-500 focus:ring-0 focus:outline-none invalid:bg-red-100' placeholder='email@company.com' onChange={(e) => {
            setEmailInput(e.target.value);
            setIsValid(true); // Reset error on change
          }}/>
        
        <button className='md:w-full max-md:w-11/12 bg-black text-white p-2 px-3 rounded-lg mt-2 text-[14px] cursor-pointer max-md:mb-3' onClick={handleSubmit}>Subscribe to monthly newsletter</button>

      </div>

      
    </div>
  )
}

export default Form
