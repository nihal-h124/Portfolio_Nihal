/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../motion/variants'
import { TypeAnimation } from 'react-type-animation'
import myCV from '../../assets/files/Lebenslauf_Nihal.pdf'

const ProfileText = () => {
   return (
      <section>
        <div className='grid grid-cols-1 sm:grid-cols-15'>
          <div className='col-span-14 place-self-center text-center sm:text-left'>
            <h1 className='text-white mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-darkOrange to-cyan'>
                Moin, Ich bin
              </span>
              <br></br>
               <TypeAnimation
                sequence={[
                  'Nihal',
                  2000, 
                  'Frontend Entwickler',
                  2000,
                  'React Entwickler',
                  2000,
                  'VueJS Entwickler',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>

            <motion.p
            variants={fadeIn('up', 0.9)}
            initial='hidden'
            whileInView='show'
            className='lg:text-xl text-lg mt-4 sm:text-lg text-lightGrey'>Ein leidenschaftlicher Webentwickler mit über 3 Jahren relevanter Erfahrung
            </motion.p>
            <div>
              <a href={myCV} download='Lebenslauf_Nihal.pdf' target='_blank'>
                <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 mt-3 bg-orange hover:bg-darkOrange'>
                  Lebenslauf Herunterladen
                </button>
              </a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileText
