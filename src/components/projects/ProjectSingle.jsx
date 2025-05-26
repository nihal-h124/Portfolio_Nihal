/* eslint-disable no-unused-vars */
import React from 'react'
import { BsArrowDownRightCircleFill } from "react-icons/bs";
import { motion } from 'framer-motion';
import { fadeIn } from '../../motion/variants';

const ProjectSingle = ({title, year, align, image, link, source}) => {
  return (
    <motion.div
      variants={fadeIn('up', 0.8)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.7 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} justify-end`}>
        <div>
            <h2 className='md:text-3xl sm:text-2xl text-orange'>{title}</h2>
            <h2 className= {`text-xl font-thin text-white font-special sm-text-center ${align === 'left' ? 'md:text-right' : 'md:text-left'}`}>{year}</h2>
            <a href={link} target='_blank' className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${align === 'left' ? 'md:justify-self-end' : 'md:justify-self-start'}`}>
                Ansehen <BsArrowDownRightCircleFill /> 
            </a>
        </div>
        <div className='max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white'>      
            <div className='w-full h-full opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden'> </div>
            <img src={image} alt='Project image' className='w-full h-full'/> 
        </div>
    </motion.div>
  )
}

export default ProjectSingle