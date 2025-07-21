import icons from '../../Icons'
import { Link } from 'react-router-dom'


const DesktopMenu = () => {
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
        <ul className='items-center gap-6 hidden md:flex'>
            <li className='relative group/sub-menu'>
                <Link>دوره های آموزشی</Link>
                <div className='absolute top-full pt-8 z-20 opacity-0 invisible group-hover/sub-menu:opacity-100
                 group-hover/sub-menu:visible duration-200 '>
                    <div className='bg-white dark:bg-darker text-gray-800 dark:text-white w-48 rounded-lg 
                        hover:rounded-l-none shadow-xl relative'>

                        {menu.map(item => {
                            return (
                                <div className=' group/open'>
                                    <Link to={`/category/${item.link}`} className='flex items-center justify-between p-2  border-l-white
                            hover:bg-sky-500/10 hover:text-sky-500 hover:border-sky-500 hover:border-l-3'>
                                        <p>{item.name}</p>
                                        <icons.ArrowLeft className='text-xl' />
                                    </Link>
                                    <div className='absolute bg-zinc-50 dark:bg-dark text-sm shadow-xl right-full inset-y-0 rounded-l-lg w-60 z-40 hidden 
                                group-hover/open:block pl-2 py-2'>
                                        <ul className='overflow-auto h-full custom-scrollbar'>
                                            {item.subMenu.map(subMenuItem => {
                                                return (
                                                    <li className='p-2 first:pt-0 last:pb-0'>
                                                        <Link to={`/course/${subMenuItem.link}`} >
                                                            {subMenuItem.name}
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </li>
            <li><Link>همه دوره ها</Link></li>
            <li><Link>مقالات</Link></li>
        </ul>
    )
}

export default DesktopMenu