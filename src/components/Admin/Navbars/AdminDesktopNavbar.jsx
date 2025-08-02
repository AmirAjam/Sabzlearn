import React from 'react'

import { Link, NavLink } from 'react-router-dom';
import icons from '../../../Icons';

const AdminDesktopNavbar = () => {
    return (
        <nav className={`lg:block lg:fixed right-0 hidden top-0 bottom-0 bg-darker w-1/5 py-4 px-5`}>
            <div className='flex justify-between items-center'>
                <Link to="/" className='px-10 mx-auto'>
                    <img className='size-full' src="/public/images/logo/footer-logo.png" alt="logo" />
                </Link>
            </div>
            <ul className='mt-10 flex flex-col gap-2'>
                <li className='flex items-center gap-4 '>
                    <NavLink
                        to="/p-admin"
                        end
                        className={({ isActive }) =>
                            `w-full flex gap-4 items-center py-3 px-2 hover:bg-dark
                            duration-300 rounded-lg ${isActive ? 'bg-dark' : ''}`
                        }
                    >
                        <icons.Dashboard className='text-2xl' />
                        <span className='font-Vazirmatn-Medium'>داشبورد</span>
                    </NavLink>
                </li>
                <li className='flex items-center gap-4 '>
                    <NavLink
                        to="/p-admin/products"
                        className={({ isActive }) =>
                            `w-full flex gap-4 items-center py-3 px-2 hover:bg-dark
                            duration-300 rounded-lg ${isActive ? 'bg-dark' : ''}`
                        }
                    >
                        <icons.ShoppingBasket className='text-2xl' />
                        <span className='font-Vazirmatn-Medium'>لیست محصولات</span>
                    </NavLink>
                </li>
                <li className='flex items-center gap-4 '>
                    <NavLink
                        to="/p-admin/add-product"
                        className={({ isActive }) =>
                            `w-full flex gap-4 items-center py-3 px-2 hover:bg-dark
                            duration-300 rounded-lg ${isActive ? 'bg-dark' : ''}`
                        }
                    >
                        <icons.AddProduct className='text-2xl' />
                        <span className='font-Vazirmatn-Medium'>افزودن محصول</span>
                    </NavLink>
                </li>
                <li className='flex items-center gap-4 '>
                    <NavLink
                        to="/p-admin/category"
                        className={({ isActive }) =>
                            `w-full flex gap-4 items-center py-3 px-2 hover:bg-dark
                            duration-300 rounded-lg ${isActive ? 'bg-dark' : ''}`
                        }
                    >
                        <icons.Category className='text-2xl' />
                        <span className='font-Vazirmatn-Medium'>دسته‌بندی</span>
                    </NavLink>
                </li>
                <li className='flex items-center gap-4 '>
                    <NavLink
                        to="/p-admin/users"
                        className={({ isActive }) =>
                            `w-full flex gap-4 items-center py-3 px-2 hover:bg-dark
                            duration-300 rounded-lg ${isActive ? 'bg-dark' : ''}`
                        }
                    >
                        <icons.Users className='text-2xl' />
                        <span className='font-Vazirmatn-Medium'>کاربران</span>
                    </NavLink>
                </li>
                <li className='flex items-center gap-4 '>
                    <NavLink
                        to="/p-admin/articles"
                        className={({ isActive }) =>
                            `w-full flex gap-4 items-center py-3 px-2 hover:bg-dark
                            duration-300 rounded-lg ${isActive ? 'bg-dark' : ''}`
                        }
                    >
                        <icons.Articles className='text-2xl' />
                        <span className='font-Vazirmatn-Medium'>مقالات</span>
                    </NavLink>
                </li>
                <li className='flex items-center gap-4 '>
                    <NavLink
                        to="/p-admin/add-article"
                        className={({ isActive }) =>
                            `w-full flex gap-4 items-center py-3 px-2 hover:bg-dark
                            duration-300 rounded-lg ${isActive ? 'bg-dark' : ''}`
                        }
                    >
                        <icons.AddArticle className='text-2xl' />
                        <span className='font-Vazirmatn-Medium'> افزودن مقاله</span>
                    </NavLink>
                </li>
                <li className='flex items-center gap-4 '>
                    <NavLink
                        to="/p-admin/comments"
                        className={({ isActive }) =>
                            `w-full flex gap-4 items-center py-3 px-2 hover:bg-dark
                            duration-300 rounded-lg ${isActive ? 'bg-dark' : ''}`
                        }
                    >
                        <icons.Comment className='text-xl' />
                        <span className='font-Vazirmatn-Medium'>کامنت ها</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default AdminDesktopNavbar