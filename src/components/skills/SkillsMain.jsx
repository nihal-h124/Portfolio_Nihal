/* eslint-disable no-unused-vars */
import React from 'react'
import SkillsText from './SkillsText'
import SkillsAll from './SkillsAll'
import SkillsAllSm from './SkillsAllSm'
import { motion } from 'framer-motion'
import { fadeIn } from '../../motion/variants'

const SkillsMain = () => {
  return (
    <div id='skills'>
        <div className='max-width-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden'>
          <motion.div
            variants={fadeIn('down', 0.8)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.7 }}>
            </motion.div>
          <SkillsText/>        
          <div className='bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden'>
            <SkillsAll/>
          </div>         
          <div className='sm:block lg:hidden'>
            <SkillsAllSm/>
          </div> 
        </div>
    </div>
  )
}

export default SkillsMain