import React from 'react'
import { useState } from 'react'
import Form from './components/Form'
import Thanks from './components/Thanks'

const App = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted]  = useState(false)


  return (
    <div className='grid place-items-center h-screen w-screen  '>
      {isSubmitted ? <Thanks email={email} setIsSubmitted={setIsSubmitted}/> : <Form setEmail={setEmail} setIsSubmitted={setIsSubmitted}/>}
    </div>
  )
}

export default App
