import React from 'react'
import ContactSocialSingle from './ContactSocialSingle'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <ContactSocialSingle
         link='https://github.com/nihal-h124?tab=repositories' 
         target='_blank' 
         Icon={FaGithub} />

        <ContactSocialSingle 
         link='https://www.linkedin.com/in/nihal-h/' 
         target='_blank' 
         Icon={FaLinkedin} />
    </div>
  )
}

export default ContactSocial