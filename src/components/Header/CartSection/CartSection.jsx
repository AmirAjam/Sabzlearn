import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import PrimaryButton from '../../Ui/Buttons/PrimaryButton'


const CartSection = ({ isCartOpen }) => {
    return (
        <div className={`absolute left-0 top-full pt-10 z-50 ${!isCartOpen && "hidden"} text-gray-800 dark:text-white`}>
            <div className=' bg-white dark:bg-darker w-80 sm:w-94 rounded-lg'>
                <div className='flex dark:bg-sky-500/20 bg-sky-200/70 justify-between p-4 rounded-t-lg'>
                    <p className='text-sky-500 font-Vazirmatn-Bold'>سبد خرید من</p>
                    <span className='font-Vazirmatn-Bold text-gray-400'>5 دوره</span>
                </div>
                <div className='pl-3.5 pt-4'>
                    <div id='cart-wrapper' className='max-h-64 overflow-y-scroll custom-scrollbar'>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>
                </div>
                <div className='p-4 pt-0 mt-5'>
                    <div className='flex justify-between border-t border-gray-300 dark:border-gray-700 pt-5'>
                        <p className='text-gray-600 dark:text-gray-400 '>مبلغ قابل پرداخت:</p>
                        <p className='font-bold text-lg'>5,496,000 تومان</p>
                    </div>
                    <Link to="/cart" className="mt-5 block cursor-pointer">
                        <PrimaryButton text="مشاهده سبد خرید" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartSection