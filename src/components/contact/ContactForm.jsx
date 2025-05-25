import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useState } from 'react'

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    // const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    const form = useRef();

     const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_j1pn8sf', 'template_z0t3j4f', form.current, {
        publicKey: 'wJflEgdkDLJe8INYt',
      })
      .then(
        () => {
          setName('')
          setEmail('')
          setMessage('')
          setSuccess('Message sent successfully!', setTimeout(() => {
            setSuccess('')
          }, 5000))
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <p className='text-orange'>{success}</p>
      <form className='flex flex-col gap-4 text-white' ref={form} onSubmit={sendEmail}>
        <input
          name="from_name"
          type="text"
          placeholder="Ihr Name"
          required className='h-10 rounded-lg bg-lightBrown px-2'
          value={name}
          onChange={handleName}
        />
        <input
            name="from_email"
            type="email" 
            placeholder="Ihre E-Mail" 
            required className='h-10 rounded-lg bg-lightBrown px-2'
            value={email}
            onChange={handleEmail}
            />
            <textarea 
            name="message"
            type="text" 
            placeholder="Ihre Nachricht" 
            rows='9' 
            cols='40' 
            required className='rounded-lg bg-lightBrown p-2'
            value={message}
            onChange={handleMessage}
            />
            <button 
            type="submit" 
            className='w-full rounded-lg border border-cyan text-white font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500'
            >
                Schicken
            </button>
        </form>
    </div>
  )
}

export default ContactForm