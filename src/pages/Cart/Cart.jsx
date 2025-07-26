import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import icons from '../../Icons'
import CartItem from './CartItem'
import Payment from './Payment'
import Off from './Off'

const Cart = () => {
    return (
        <>
            <Header />
            <main className='py-16'>
                <div className="container lg:flex justify-between gap-10">
                    <div className='lg:w-2/3'>
                        <div className='flex items-center gap-3 bg-green-primary p-3 rounded-t-lg'>
                            <icons.ShoppingBasket className='text-4xl' />
                            <h2>سبد خرید</h2>
                        </div>
                        <div className='p-5 bg-darker rounded-b-lg '>
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                        </div>
                    </div>
                    <div className='lg:w-1/3'>
                        <Payment />
                        <Off />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Cart