import React from 'react'

// eslint-disable-next-line no-unused-vars
const ContactSocialSingle = ({ Icon, link }) => {
  return (
    <div className='text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex justify-between'>
        <a href={link} target='_blank' className='cursor-pointer'>
            <Icon />    
        </a>
    </div>
  )
}

export default ContactSocialSingle