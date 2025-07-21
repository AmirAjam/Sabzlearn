import { Link } from 'react-router-dom'
import { useRef } from 'react'
import MobileSubMenuItem from './MobileSubMenuItem'
import icons from '../../icons'


const MobileMenuItem = ({menuItem}) => {
    const liElm = useRef() 

    const openSubMenu = (parent) => {
        parent.classList.contains("active")?parent.classList.remove('active'):parent.classList.add('active')
    }
    return (
        <li ref={liElm}>
            <div className='flex justify-between py-2 items-center'>
                <Link to={`/category/${menuItem.link}`}>{menuItem.name}</Link>
                <icons.ArrowLeft className='text-xl [.active_&]:-rotate-90' onClick={() => openSubMenu(liElm.current)} />
            </div>
            <ul className='bg-gray-200/60 dark:bg-dark p-2 text-xs rounded-lg [.active_&]:block hidden my-3'>
            {
                menuItem.subMenu.map((subMenu,index) => <MobileSubMenuItem key={Math.random()} SubMenuItem={subMenu}/>)
            }
            </ul>
        </li>
    )
}

export default MobileMenuItem