import { Link } from 'react-router-dom'


const MobileSubMenuItem = ({SubMenuItem}) => {
    return (
        <li className='mt-2 first:mt-0'>
            <Link to={`/course/${SubMenuItem.href}`}  className='py-1 block w-fit'>{SubMenuItem.title}</Link>
        </li>
    )
}

export default MobileSubMenuItem