import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceLeft = () => {
  return (
    <div className='flex flex-col gap-7 w-[280px]'>
        <p className='text-orange font-bold uppercase text-3xl font-special text-center'>Seit 2022</p>
        <div className='flex justify-center items-center gap-4 w-[300px]'>
            <ExperienceInfo number='2½' text='Jahre'/>
            <p className='font-bold text-6xl text-lightBrown'>-</p>
            <ExperienceInfo number='6' text='Projekte'/>
        </div>
        <p className='text-center text-white'>Mit 2½ Jahren Erfahrung in der Gestaltung und Entwicklung interaktiver Webseiten mit modernen Frameworks wie React und Vue</p>
        <ExperienceInfo/>   
    </div>
  )
}

export default ExperienceLeft