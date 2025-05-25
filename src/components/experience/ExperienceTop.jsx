import React from 'react'
import ExperienceLeft from './ExperienceLeft'
import ExperienceMiddle from './ExperienceMiddle'
import ExperienceRight from './ExperienceRight'

const ExperienceTop = () => {
  return (
    <div className='flex lg:flex-row sm:flex-col gap-4 items-center justify-center'>
        <ExperienceLeft/>
        <ExperienceMiddle/>
        <ExperienceRight/>
    </div>
  )
}

export default ExperienceTop