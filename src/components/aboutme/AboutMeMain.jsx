/* eslint-disable no-unused-vars */
import React from 'react'
import AboutMeText from './AboutMeText'
import AboutMePic from './AboutMePic'
import { motion } from 'framer-motion'
import { fadeIn } from '../../motion/variants'

const AboutMeMain = () => {
  return (
    <div 
    id='about' 
    className='flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center'
    >
        <motion.div
          variants={fadeIn('right', 0.8)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.7 }}
        >
            <AboutMeText/>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.8)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.7 }}
        >
             <AboutMePic/>
        </motion.div>
    </div>
  )
}

export default AboutMeMain