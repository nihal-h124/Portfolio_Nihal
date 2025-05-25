/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../motion/variants'

const ExperienceSingle = ({experience}) => {
  return (
    <motion.div
      variants={fadeIn('right', 0.8)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.7 }}
      className='md:h-[580px] md:w-[340px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4'>
        <p className='font-bold text-cyan'>{experience.title}</p>
        <p className='text-orange'>{experience.company}</p>
        <p className='text-lightGrey'>{experience.duration}</p>
        <ul className='list-disc mt-4 pl-4 text-white'>
            {experience.description.map((desc, index) => (
                <li key={index}>{desc}</li>
            ))}
        </ul>
    </motion.div>
  )
}

export default ExperienceSingle