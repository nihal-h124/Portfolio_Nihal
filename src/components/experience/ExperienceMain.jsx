/* eslint-disable no-unused-vars */
import React from 'react'
import ExperienceText from './ExperienceText'
import ExperienceTop from './ExperienceTop'
import ExperienceAll from './ExperienceAll'
import { motion } from 'framer-motion'
import { fadeIn } from '../../motion/variants'

const ExperienceMain = () => {
  return (
    <div id='experience' className='max-w-[1200px] mx-auto px-4'>
      <motion.div
        variants={fadeIn('down', 0.8)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.7 }}
      >
        <ExperienceText/>
      </motion.div>

      <motion.div
        variants={fadeIn('down', 0.8)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.7 }}
      >
        <ExperienceTop/>
      </motion.div> 

        <div className='w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden'></div>
        <ExperienceAll/>
    </div>
  )
}

export default ExperienceMain