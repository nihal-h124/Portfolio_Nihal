import React from 'react'
import ContactSocialSingle from './ContactSocialSingle'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <ContactSocialSingle link='#' Icon={FaGithub} />
        <ContactSocialSingle link='#' Icon={FaLinkedin} />
    </div>
  )
}

export default ContactSocial