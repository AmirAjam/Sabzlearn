import React from 'react'
import { Link } from 'react-router-dom'
import icons from '../../icons'

const CourseItem = ({ course }) => {
    const finalPrice = (100 - course.discount) * course.price / 100
    return (
        <div className='rounded-xl bg-white dark:bg-darker pb-5 shadow-sm h-full'>
            <Link className='rounded-xl overflow-hidden h-42 block'>
                <img src="/public/images/courses/1.webp" alt="" className='rounded-xl size-full object-cover' />
            </Link>
            <div className='px-4.5'>
                <div className='h-24 mb-8'>
                    <Link className='mt-5 font-Vazirmatn-Bold line-clamp-2'>{course.name}</Link>
                    <p className='mt-5 line-clamp-2 text-gray-700 dark:text-gray-400 text-sm'>
                        {course.description}
                    </p>
                </div>
                <div className='flex justify-between items-center pb-4 border-b-1 border-b-neutral-200/70 dark:border-b-white/10'>
                    <Link className='w-fit flex items-center gap-1 text-gray-700 dark:text-gray-400 duration-200
                 hover:text-primary!'>
                        <icons.User className='text-xl' />
                        <span className='text-sm'>{course.creator}</span>
                    </Link>
                    <div className='text-amber-400 flex items-center gap-1'>
                        <span className='mt-0.5'>5.0</span>
                        <icons.FullStar className='text-xl' />
                    </div>
                </div>
                <div className={` text-gray-700 dark:text-gray-400 flex items-center justify-between 
                    ${course.discount ? "mt-4.5" : "mt-7"}`} >
                    <div className='flex items-center gap-1'>
                        <icons.Users className='text-xl' />
                        <span className='mt-0.5'>{course.registers}</span>
                    </div>
                    {course.discount ?
                        <div className='flex items-center gap-4'>
                            <div className='p-1.5 bg-primary rounded-sm flex items-center justify-center'>
                                <span className='text-sm text-white'>%{course.discount}</span>
                            </div>
                            <div>
                                <p className='text-sm line-through text-gray-500'>{course.price.toLocaleString()}</p>
                                <div className='font-Vazirmatn-Medium text-primary text-lg'>
                                    {finalPrice ?
                                        <>
                                            <span>{finalPrice.toLocaleString()}</span>
                                            <span className='mr-2'>تومان</span>
                                        </>
                                        :
                                        <span className='text-lg font-Vazirmatn-Bold'>رایگان!</span>
                                    }
                                </div>
                            </div>

                        </div>
                        :
                        <div className='font-Vazirmatn-Medium text-primary text-lg '>
                            <span>{course.price.toLocaleString()}</span>
                            <span className='mr-2'>تومان</span>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default CourseItem