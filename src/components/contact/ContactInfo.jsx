import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import ContactSingle from './ContactSingle';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
      <ContactSingle text="nihal.h124@gmail.com" Image={MdOutlineEmail} />
      <ContactSingle text="(+49) 15560 259248" Image={FiPhone} />
      <ContactSingle text="Hamburg, Deutschland" Image={TfiLocationPin} />
    </div>
  )
}

export default ContactInfo