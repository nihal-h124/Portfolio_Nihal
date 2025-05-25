import React from 'react'
import ContactLeft from './ContactLeft'
import ContactRight from './ContactRight'

const ContactMain = () => {
  return (
    <div id='contact' className='max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4'>
        <h2 className='text-6xl text-cyan mb-10 text-center'>Kontakt</h2>
        <div className='flex justify-between gap-24 bg-brown p-8 rounded-2xl lg:flex-row sm:flex-col'>
            <ContactLeft/>
            <ContactRight/>
        </div>
    </div>
  )
}

export default ContactMain