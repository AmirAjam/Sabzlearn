import { Link } from 'react-router-dom'
import icons from '../../../icons'

const AllItem = ({ title }) => {
    return (
        <div className='flex justify-end text-gray-700 dark:text-gray-400'>
            <Link className='flex gap-1 items-center w-fit mt-8 hover:text-green-primary duration-200'>
                <span>همه {title}</span>
                <icons.ArrowUpLeft className='text-lg' />
            </Link>
        </div>
    )
}

export default AllItem