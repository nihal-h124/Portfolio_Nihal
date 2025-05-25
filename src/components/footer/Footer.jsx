import React from 'react'

const links = [
  { link: "Über mich", section: "about" },
  { link: "Fähigkeiten", section: "skills" },
  { link: "Erfahrung", section: "experience" },
  { link: "Projekte", section: "projects" },
  { link: "Kontakt", section: "contact" },
];

const Footer = () => {
  return (
    <div className='px-4'>
        <div className='w-auto h-[1px] bg-lightGrey mt-24 p-1'>
            <div className='md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto'>
                <p className='text-grey text-3xl'>Nihal Hegde</p>
                <ul className='flex gap-4 text-lightGrey text-xl'>
                    {links.map((item, index) => (
                        <li key={index}>
                            <a href='#'className='cursor-pointer text-lightGrey hover:text-white transition-all duration-500'
                            >{item.link}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <p className='max-w-[1200px] mx-auto text-right mt-12 mb-12 text-sm text-lightBrown'>©2025. All rights reserved.</p>
    </div>
  )
}

export default Footer