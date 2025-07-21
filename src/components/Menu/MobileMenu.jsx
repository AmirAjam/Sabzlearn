import React from 'react'
import { Link } from 'react-router-dom'
import icons from '../../Icons'
import MobileMenuItem from './MobileMenuItem'

const MobileMenu = ({ isMenuOpen, changeTheme }) => {
    const menu = [
        {
            id: 1,
            name: "فرانت‌اند",
            link: "front-end",
            subMenu: [
                { subId: 111, name: "آموزش HTML", link: "html-tutorial" },
                { subId: 222, name: "آموزش CSS", link: "css-tutorial" },
                { subId: 3333, name: "آموزش FlexBox", link: "flexbox" },
                { subId: 4555, name: "آموزش CSS Grid", link: "css-grid" },
                { subId: 52232, name: "آموزش Tailwind", link: "tailwind" },
                { subId: 6111, name: "پروژه‌های جاوااسکریپت", link: "js-projects" },
            ]
        },
        {
            id: 2,
            name: "پایتون",
            link: "python",
            subMenu: [
                { subId: 7, name: "آموزش پایتون", link: "python-tutorial" },
                { subId: 8, name: "داده‌کاوی با پایتون", link: "python-data" },
                { subId: 9, name: "آموزش جنگو", link: "django" },
            ]
        },
        {
            id: 3,
            name: "جاوااسکریپت",
            link: "javascript",
            subMenu: [
                { subId: 10, name: "آموزش JS مقدماتی تا پیشرفته", link: "javascript-tutorial" },
                { subId: 12, name: "بازی‌سازی با JS", link: "js-game-dev" },
                { subId: 13, name: "Clean Code در JS", link: "clean-code-js" },
            ]
        },
        {
            id: 4,
            name: "ری‌اکت",
            link: "react",
            subMenu: [
                { subId: 14, name: "React پروژه‌محور", link: "react-project" },
                { subId: 15, name: "کامپوننت‌های حرفه‌ای", link: "react-components" },
            ]
        },
        {
            id: 5,
            name: "نودجی‌اس",
            link: "nodejs",
            subMenu: [
                { subId: 16, name: "آموزش NodeJS", link: "node-tutorial" },
                { subId: 27, name: "پروژه فول‌استک", link: "node-fullstack" },
            ]
        },
        {
            id: 6,
            name: "وردپرس",
            link: "wordpress",
            subMenu: [
                { subId: 122, name: "آموزش وردپرس", link: "wp-tutorial" },
            ]
        },
        {
            id: 7,
            name: "گیت و گیت‌هاب",
            link: "git",
            subMenu: [
                { subId: 1211, name: "آموزش Git", link: "git-course" },
            ]
        },
        {
            id: 8,
            name: "دوره‌های رایگان",
            link: "free",
            subMenu: [
                { subId: 333, name: "HTML + CSS رایگان", link: "html-css-free" },
                { subId: 29, name: "دوره NPM", link: "npm" },
                { subId: 300, name: "ESLint", link: "eslint" },
            ]
        }
    ]
    return (
        <div className={`fixed inset-y-0 w-64 z-50 bg-white dark:bg-darker dark:text-white text-gray-900 -right-64 duration-300
            ${isMenuOpen ? "right-0" : "-right-64 "}`} >
            <div className='bg-gray-100 dark:bg-dark p-4 flex justify-between items-center'>
                <div className='flex gap-2.5 items-center'>
                    <Link>
                        <img id='user-image' src="/public/images/user/user.jpg" className='size-14 rounded-full' alt="" />
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
                    {menu.map(item => <MobileMenuItem menuItem={item} key={item.id}/>)}
                </ul>
                <div className=''>
                    <div onClick={changeTheme} className='flex mt-5 items-center gap-2 dark:hidden'>
                        <icons.Moon className='text-xl' />
                        <span>تم تیره</span>
                    </div>
                    <div onClick={changeTheme} className='mt-5 items-center gap-2 hidden dark:flex'>
                        <icons.Sunny className='text-2xl' />
                        <span>تم روشن</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu