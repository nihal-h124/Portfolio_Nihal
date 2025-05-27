import React from 'react'
import { PiArrowCircleUpRightFill } from "react-icons/pi";

const links = [
  { link: "Kontakt", section: "contact" }
];

const NavbarBtn = () => {
  return (
    <button onClick={() => {
      const section = links.find(link => link.link === "Kontakt");
      if (section) {
        const element = document.getElementById(section.section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }} className='px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow'>
     Hire Me
     <div className='sm:hidden md:block'>
        <PiArrowCircleUpRightFill />
     </div>
   
    </button>
  )
}

export default NavbarBtn
