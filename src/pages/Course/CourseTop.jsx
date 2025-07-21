import React from 'react'
import PrimaryButton from '../../components/Ui/Buttons/PrimaryButton'

const CourseTop = () => {
  return (
    <section>
      <div className="container mt-8 p-4 bg-white dark:bg-darker lg:bg-inherit! rounded-lg lg:flex 
      flex-row-reverse items-center justify-center gap-12 lg:px-0">
        <div className='lg:w-1/2'>
          <img src="/public/images/courses/1.webp" alt="" className='rounded-lg' />
        </div>
        <div className='lg:w-1/2'>
          <h1 className='text-xl font-Vazirmatn-Bold mt-5 lg:0 lg:text-2xl'>آموزش ساخت ربات تلگرام با پایتون</h1>
          <p className='sm:text-lg line-clamp-4 sm:line-clamp-3 mt-5 lg:mt-10'>آیا تا به حال به این فکر کرده‌اید که یک دستیار ربات تلگرامی مخصوص خودتان داشته باشید که کارها را خودکار انجام دهد و در وقتتان صرفه‌جویی کند؟ از پاسخگویی به پیام‌ها گرفته تا مدیریت گروه‌ها و اجرای دستورات پیچیده، ربات‌های تلگرامی یک ابزار قدرتمند در دنیای دیجیتال هستند […]</p>
          <div className='mt-5 lg:mt-10 lg:flex justify-between items-center'>
            <p className='text-center mb-5 lg:mb-0 font-Vazirmatn-Bold text-xl lg:w-3/4 '>1,600,000 تومان</p>
            <PrimaryButton text="افزودن به سبد خرید " />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseTop