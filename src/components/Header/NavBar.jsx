import { Link } from "react-router-dom"
import { useState } from "react"
import { useTheme } from "../../Contexts/ThemeContext"


import DesktopMenu from "../Menu/DesktopMenu"
import MobileMenu from "../Menu/MobileMenu"
import CartSection from "./CartSection/cartSection"
import Cover from "../Ui/Cover/Cover"

import icons from "../../Icons"
import Input from "../Ui/Input/Input"

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isCoverOpen, setIsCovertOpen] = useState(false)

    const changeMenuStatus = () => {
        setIsMenuOpen(prev => !prev)
        setIsCovertOpen(true)
    }

    const changeCartStatus = () => {
        setIsCartOpen(prev => !prev)
        setIsCovertOpen(true)
    }

    const coverClickHandler = () => {
        setIsMenuOpen(false)
        setIsCartOpen(false)
        setIsCovertOpen(false)
    }
    const { toggleTheme } = useTheme();


    return (
        <>
            <nav className="flex justify-between items-center text-gray-500 dark:text-white">
                <div className="md:hidden bg-gray-100 dark:bg-dark p-3 rounded-full">
                    <icons.Menu className="text-2xl" onClick={changeMenuStatus} />
                </div>
                <div className="w-16 md:w-full md:flex gap-6">
                    <Link to="/" className="w-16 lg:w-18">
                        <img src="public/images/logo/logo.png" alt="" />
                    </Link>
                    <DesktopMenu />
                </div>
                <div className="md:flex items-center gap-3 lg:gap-6">
                    <div className='bg-white dark:bg-dark p-2 justify-between rounded-full 
                        gap-3 w-38 lg:w-54 md:flex hidden'>
                        <input type="text" placeholder='جستجو دوره...'
                            className='w-full outline-none border-none dark:text-white' />
                        <icons.Search className="text-3xl cursor-pointer" />
                    </div>
                    <div className="hidden bg-gray-100 dark:bg-dark p-3 rounded-full md:block">
                        <icons.Sunny onClick={toggleTheme} className="text-2xl hidden dark:block cursor-pointer" />
                        <icons.Moon onClick={toggleTheme} className="text-2xl dark:hidden cursor-pointer" />
                    </div>
                    <div className="relative bg-gray-100 dark:bg-dark p-2 rounded-full">
                        <icons.ShoppingBasket onClick={changeCartStatus} className="text-3xl cursor-pointer" />
                        <CartSection isCartOpen={isCartOpen} />
                    </div>
                    <div className="bg-gray-100 dark:bg-dark p-3 rounded-full hidden md:block">
                        <icons.User className="text-2xl cursor-pointer" />
                    </div>
                </div>
            </nav>
            <MobileMenu isMenuOpen={isMenuOpen} changeTheme={toggleTheme} />
            <Cover onClick={coverClickHandler} coverStatus={isCoverOpen} />
        </>

    )
}

export default NavBar