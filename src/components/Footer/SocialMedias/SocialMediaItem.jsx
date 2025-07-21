import React from 'react'
import { Link } from 'react-router-dom'
import icons from '../../../icons'


const SocialMediaItem = ({ socialIcon }) => {
    const Icon = icons[socialIcon]
    return (
        <Link className='p-2 group text-gray-500 bg-neutral-300 dark:bg-neutral-100 rounded-full dark:text-darker
         hover:bg-sky-500! duration-150'>
            <Icon className='text-xl' />
        </Link>
    )
}

export default SocialMediaItem