import { Link } from 'react-router-dom'
import icons from '../../../icons'


const CartItem = () => {
    return (
        <div className='px-4 flex gap-2 items-center py-3 first:pt-0 last:pb-0'>
            <Link>
                <img src="/public/images/courses/1.webp" alt="" className='h-16 rounded-lg' />
            </Link>
            <div className='mr-1'>
                <Link className='line-clamp-2 text-sm'>آموزش جامع api نویسی با PHP</Link>
                <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>1,600,000 تومان</p>
            </div>
            <icons.Trash className='mr-3 text-xl cursor-pointer hover:text-red-500 duration-200 text-gray-400' />
        </div>
    )
}

export default CartItem