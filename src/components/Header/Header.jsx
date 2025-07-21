import { Link } from "react-router-dom"
import { useState } from "react"
import { useTheme } from "../../Contexts/ThemeContext"

import NavBar from "./NavBar"

const Header = () => {
    return (
        <header className="py-3 bg-white dark:bg-darker">
            <div className="container">
                <NavBar />
            </div>
        </header>
    )
}

export default Header