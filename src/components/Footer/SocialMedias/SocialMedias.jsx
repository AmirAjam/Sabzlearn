import React from 'react'
import SocialMediaItem from './SocialMediaItem'


const SocialMedias = () => {
  return (
    <div className='flex gap-2 '>
        <SocialMediaItem socialIcon="Linkedin"/>
        <SocialMediaItem socialIcon="Telegram"/>
        <SocialMediaItem socialIcon="Instagram"/>
    </div>
  )
}

export default SocialMedias