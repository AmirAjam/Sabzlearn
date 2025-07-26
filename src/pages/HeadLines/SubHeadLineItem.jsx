import { Link } from "react-router-dom"
import icons from "../../../Icons"

const SubHeadLineItem = () => {
    return (
        <Link className="flex justify-between items-center py-6 border-b border-b-gray-300 dark:border-b-gray-600 hover:text-green-primary 
            group/sub duration-200 last:border-0">
            <div className='flex gap-3 items-center'>
                <span className='flex items-center justify-center rounded-sm w-8 h-6 bg-gray-100 dark:bg-gray-600 text-sm
                 text-gray-600 dark:text-white group-hover/sub:bg-green-primary duration-200'>
                    12
                </span>
                <p className='text-sm sm:text-base w-56'>تحلیل نمودار Productivity / Time</p>
            </div>
            <icons.CirclePlay className="text-xl" />
        </Link>
    )
}

export default SubHeadLineItem