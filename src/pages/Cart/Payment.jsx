import PrimaryButton from '../../components/Ui/Buttons/PrimaryButton'
import icons from '../../Icons'


const Payment = () => {
    return (
        <section className='mt-8 lg:mt-0'>
            <div className='flex items-center gap-3 bg-green-primary p-3 rounded-t-lg'>
                <icons.Card className='text-4xl' />
                <h2>سبد خرید</h2>
            </div>
            <div className='p-3 bg-darker rounded-b-lg'>
                <div className='flex justify-between items-center font-Vazirmatn-Bold mt-2'>
                    <p>مبلغ کل</p>
                    <p>4,900,000تومان</p>
                </div>
                <div className='flex justify-between items-center font-Vazirmatn-Bold mt-5 text-red-500/70'>
                    <p>تخفیف</p>
                    <p><span>(70%)</span> 3,430,000تومان</p>
                </div>
                <div className='flex justify-between items-center font-Vazirmatn-Bold mt-5 pb-6
                    border-b border-gray-600'>
                    <p>موجودی کیف پول</p>
                    <p>0 تومان</p>
                </div>
                <div className='flex justify-between items-center font-Vazirmatn-Bold mt-5'>
                    <p>مجموع:</p>
                    <p className='font-bold text-lg'> 1,470,000 تومان</p>
                </div>
                <div className='mt-7 flex items-center gap-2 cursor-pointer group active'>
                    <span type="checkbox" className='size-4.5 bg-dark rounded-sm group-[.active]:bg-sky-500'></span>
                    <label className='text-gray-500 text-sm'>قوانین را مطالعه نموده ام.</label>
                </div>
                <div className='mt-8'>
                    <PrimaryButton disabled={true} text="تکمیل خرید" />
                </div>
            </div>
        </section>
    )
}

export default Payment