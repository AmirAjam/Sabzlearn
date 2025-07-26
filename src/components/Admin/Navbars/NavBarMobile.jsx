import React from 'react'
import { NavLink } from 'react-router-dom';

import { Icons } from '../icons/Icons';

const NavBarMobile = ({ isOpen, closeNav }) => {
    return (
        <div className={`lg:hidden fixed z-30 inset-y-0 bg-[#151831] w-62 py-4 px-5 duration-300 ${isOpen ? "right-0" : "-right-200"}`}>
            <div className='flex justify-between items-center'>
                <div className='w-14 h-16'>
                    <img className='size-full' src="/public/images/logo/panel-logo.png" alt="logo" />
                </div>
                <Icons.Close onClick={closeNav} className='text-3xl' />
            </div>
            <ul className='mt-10 flex flex-col gap-4'>
                <li className=''>
                    <NavLink onClick={closeNav} to="/" className={({ isActive }) =>
                        `flex items-center gap-2 py-2 px-2 rounded-lg ${isActive && "bg-back-element"}`
                    }>
                        <Icons.Dashboard className='text-2xl' />
                        <span className='font-Vazirmatn-Medium'>داشبورد</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={closeNav} to="/product-list" className={({ isActive }) =>
                        `flex items-center gap-2 py-2 px-2 rounded-lg ${isActive && "bg-back-element"}`
                    }>
                        <Icons.Cart className='text-2xl' />
                        <span className='font-Vazirmatn-Medium'>لیست محصولات</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink onClick={closeNav} to="/add-product" className={({ isActive }) =>
                        `flex items-center gap-2 py-2 px-2 rounded-lg ${isActive && "bg-back-element"}`
                    }>
                        <Icons.AddProduct className='text-2xl' />
                        <span className='font-Vazirmatn-Medium'>افزودن محصول</span>
                    </NavLink>

                </li>
                <li>
                    <NavLink onClick={closeNav} to="category" className={({ isActive }) =>
                        `flex items-center gap-2 py-2 px-2 rounded-lg ${isActive && "bg-back-element"}`
                    }>
                        <Icons.Category className='text-2xl' />
                        <span className='font-Vazirmatn-Medium'>دسته‌بندی</span>
                    </NavLink>

                </li>
                <li>
                    <NavLink onClick={closeNav} to="/users" className={({ isActive }) =>
                        `flex items-center gap-2 py-2 px-2 rounded-lg ${isActive && "bg-back-element"}`
                    }>
                        <Icons.Users className='text-2xl' />
                        <span className='font-Vazirmatn-Medium'>کاربران</span>
                    </NavLink>

                </li>
                <li>
                    <NavLink onClick={closeNav} to="/comments" className={({ isActive }) =>
                        `flex items-center gap-2 py-2 px-2 rounded-lg ${isActive && "bg-back-element"}`
                    }>
                        <Icons.Comments className='text-xl' />
                        <span className='font-Vazirmatn-Medium'>کامنت ها</span>
                    </NavLink>

                </li>
            </ul>
        </div >
    )
}

export default NavBarMobile