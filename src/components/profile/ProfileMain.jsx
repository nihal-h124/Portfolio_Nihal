import React from 'react'
import ProfileText from './ProfileText'
import ProfilePic from './ProfilePic'

const ProfileMain = () => {
  return (
    <div className='pt-40 pb-16'>
      <div className='flex md:flex-row sm:flex-col max-w-[1200px] mx-auto my-8 justify-between items-center relative px-4'>
        <ProfileText />
        <ProfilePic />
      </div>
        
    </div>
  )
}

export default ProfileMain
