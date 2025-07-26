import React from 'react'
import PrimaryButton from '../../components/Ui/Buttons/PrimaryButton'
import calFinalPrice from '../../utility/calFinalPrice'

const CourseTop = ({ name, description, price, discount }) => {
  const finalPrice = calFinalPrice(price, discount)
  return (
    <section>
      <div className="container mt-8 p-4 bg-white dark:bg-darker lg:bg-inherit! rounded-lg lg:flex 
      flex-row-reverse items-center justify-center gap-12 lg:px-0">
        <div className='lg:w-1/2'>
          <img src="/public/images/courses/1.webp" alt="" className='rounded-lg' />
        </div>
        <div className='lg:w-1/2'>
          <h1 className='text-xl font-Vazirmatn-Bold mt-5 lg:0 lg:text-2xl'>{name}</h1>
          <p className='sm:text-lg line-clamp-4 sm:line-clamp-3 mt-5 lg:mt-10'>{description}</p>
          <div className='mt-5 lg:mt-10 lg:flex justify-between items-center'>
            {discount ?
              <div className='lg:w-3/4 flex gap-4 items-center mb-5 lg:mb-0 justify-center'>
                <p className='text-lg dark:text-gray-400 line-through mt-1 lg:mt-0.5'>{price?.toLocaleString()}</p>
                <p className='font-Vazirmatn-Bold text-xl lg:text-right
                 lg:text-2xl'>
                  {finalPrice?finalPrice?.toLocaleString() + "تومان" :"رایگان!"} 
                </p>
              </div>
              :
              <p className='text-center mb-5 lg:mb-0 font-Vazirmatn-Bold text-xl lg:w-3/4 lg:text-right lg:text-2xl'>
                {price?.toLocaleString()} تومان
              </p>
            }
            <div className='sm:w-1/2 mx-auto'>
              <PrimaryButton text="افزودن به سبد خرید " />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseTop