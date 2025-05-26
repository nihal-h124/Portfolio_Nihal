import React from 'react'

const SubProfile = () => {
  return (
    <div className='w-full border-y border-lightGrey text-lightGrey flex justify-around uppercase xl:text-3xl md:text-2xl sm:text-4xl py-8 items-center gap-4'>
        <p className='md:block sm:hidden'>Leidenschaftlich</p>
        <p className='md:block sm:hidden'>Herausforderungen</p>
        {/* <p className='md:block sm:hidden'>Zielorientiert</p> */}
        <p className='md:block sm:hidden'>Teamplayer</p>
        <p className='md:block sm:hidden'>Schnelllerner</p>
    </div>
  )
}

export default SubProfile