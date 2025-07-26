import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import AdminHeader from '../../components/Admin/AdminHeader'
import AdminDesktopNavbar from '../../components/Admin/NavBars/AdminDesktopNavbar'

const AdminPanel = () => {
    return (
        <>
            <div className='lg:float-end lg:w-80/100'>
                <div className='container'>
                    <AdminHeader />
                    {/* <div>AdminPanel</div> */}
                    <Outlet />
                </div>
                <AdminDesktopNavbar />
            </div>
        </>
    )
}

export default AdminPanel