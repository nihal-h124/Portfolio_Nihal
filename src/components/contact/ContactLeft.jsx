import React from 'react'
import ContactForm from './ContactForm'

const ContactLeft = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
        <div>
            <h2 className='text-orange text-3xl mb-4'>Lass uns in Kontakt treten!</h2>
            <p className='text-white'>Füllen Sie einfach das Formular unten aus und ich werde mich so schnell wie möglich bei Ihnen melden.</p>
        </div>
        <ContactForm/>
    </div>
  )
}

export default ContactLeft