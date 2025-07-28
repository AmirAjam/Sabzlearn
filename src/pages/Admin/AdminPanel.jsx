import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import AdminHeader from '../../components/Admin/AdminHeader'
import AdminDesktopNavbar from '../../components/Admin/NavBars/AdminDesktopNavbar'
import AdminNavbarMobile from '@/components/Admin/Navbars/AdminNavbarMobile'
import Cover from '@/components/Ui/Cover/Cover'

const AdminPanel = () => {
    const [isOpenMobileNav , setIsOpenMobileNav] = useState(false)
    return (
        <>
            <div className='lg:float-end lg:w-80/100'>
                <div className='container'>
                    <AdminHeader openMobileNav={() => setIsOpenMobileNav(true)}/>
                    {/* <div>AdminPanel</div> */}
                    <Outlet />
                </div>
                <AdminDesktopNavbar />
                <AdminNavbarMobile isOpen={isOpenMobileNav} closeNav={() => setIsOpenMobileNav(false)}/>
                <Cover onClick={() => setIsOpenMobileNav(false)} coverStatus={isOpenMobileNav}/> 
            </div>
        </>
    )
}

export default AdminPanel