import React from 'react'
import { Link } from 'react-router-dom'
import icons from '../../Icons'
import MobileMenuItem from './MobileMenuItem'

const MobileMenu = ({ isMenuOpen,changeTheme }) => {
    return (
        <div className={`fixed inset-y-0 w-64 z-50 bg-white dark:bg-darker dark:text-white text-gray-900 -right-64 duration-300
            ${isMenuOpen ? "right-0" : "-right-64 "}`} >
            <div className='bg-gray-100 dark:bg-dark p-4 flex justify-between items-center'>
                <div className='flex gap-2.5 items-center'>
                    <Link>
                        <img id='user-image' src="public/images/user/user.jpg" className='size-14 rounded-full' alt="" />
                    </Link>
                    <p className='text-sm'>Amir Ajam</p>
                </div>
                <Link>
                    <icons.ArrowLeft className='text-xl' />
                </Link>
            </div>
            <div className='py-4 px-8 mt-4'>
                <p className='text-primary'>دسترسی سریع</p>
                <ul className='mt-2 text-sm border-b border-gray-300/80 pb-4'>
                    <li>
                        <Link className='flex justify-between py-2 hover:text-primary duration-300 items-center'>
                            <span>دوره های من</span>
                            <icons.ArrowLeft className='text-xl' />
                        </Link>
                    </li>
                    <li>
                        <Link className='flex justify-between py-2 hover:text-primary duration-300 items-center'>
                            <span>تیکت های من</span>
                            <icons.ArrowLeft className='text-xl' />
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='px-8'>
                <p className='text-primary'>دسته بندی ها</p>
                <ul className='mt-2 text-sm border-b border-gray-300/80 pb-4'>
                    <MobileMenuItem />
                    <MobileMenuItem />
                    <MobileMenuItem />
                </ul>
                <div className=''>
                    <div onClick={changeTheme} className='flex mt-5 items-center gap-2 dark:hidden'>
                        <icons.Moon className='text-xl'/>
                        <span>تم تیره</span>
                    </div>
                    <div onClick={changeTheme} className='mt-5 items-center gap-2 hidden dark:flex'>
                        <icons.Sunny className='text-2xl'/>
                        <span>تم روشن</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu