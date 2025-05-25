import React from 'react'
import ContactInfo from './ContactInfo'
import ContactSocial from './ContactSocial'

const ContactRight = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-12'>
        <img src='../images/email-1.jpg' alt='email' className='max-w-[400px]' />
        <ContactInfo/>  
        <ContactSocial/>
    </div>
  )
}

export default ContactRight