import { Link } from 'react-router-dom'
import icons from '../../Icons'

const CartItem = () => {
    return (
        <div className='mt-10 sm:flex justify-between items-center sm:mt-5 first:mt-0 sm:border-b last:border-0
        last:pb-0 border-gray-600 pb-5'>
            <Link className='rounded-lg relative'>
                <img src="public/images/courses/1.webp" alt="" className='rounded-lg sm:h-24' />
                <icons.Close className='absolute text-xl top-2 right-2 hover:text-red-500 duration-200 sm:hidden' />
            </Link>
            <div>
                <Link className='mt-3 block sm:mt-0 sm:text-sm'>آموزش پروژه محور WebSocket</Link>
                <Link className='text-xs text-gray-500 sm:block hidden mt-2'>محمدامین سعیدی راد</Link>
            </div>
            <div className='flex justify-between items-center mt-3 sm:mt-0'>
                <div className='sm:hidden'>
                    <Link className='text-xs text-gray-500 '>محمدامین سعیدی راد</Link>
                </div>
                <div>
                    <span className='text-gray-400 line-through text-sm'>1,800,000</span>
                    <p className='text-green-primary text-lg font-Vazirmatn-Bold'>540,000 تومان</p>
                </div>
            </div>
            <div className='sm:block hidden'>
                <icons.Trash className='text-base text-gray-500 cursor-pointer hover:text-red-500/80 duration-200' />
            </div>
        </div>
    )
}

export default CartItem