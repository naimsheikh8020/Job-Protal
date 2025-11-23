import React, { useState } from 'react'

const RecruiterLogin = () => {
    const [state, setState] = useState('Login')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState('')
    const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false) 
  return (
    <div>RecruiterLogin</div>
  )
}

export default RecruiterLogin