import React, { useState } from 'react'

const CategoryFilterItem = ({ text }) => {
    const [activeFilter, setActiveFilter] = useState(false)
    return (
        <div onClick={() => setActiveFilter(prev => !prev)} className='flex justify-between py-7 first:pt-0 border-b 
        dark:border-gray-700 border-gray-300/80 cursor-pointer select-none lg:bg-white dark:lg:bg-darker 
        lg:pb-0 lg:py-5! lg:px-5 lg:border-0 lg:rounded-lg lg:mb-8 '>

            <p className='text-lg font-Vazirmatn-Bold lg:text-base'>{text}</p>
            <div className={`w-14 h-6.5 rounded-full relative ${activeFilter ? "bg-sky-500/80" : "bg-gray-200 dark:bg-dark"}`}>
                <span className={`absolute size-4 bg-white dark:bg-darker my-auto inset-y-0 block rounded-full duration-300
                    ${activeFilter ? "right-9" : "right-1"}`}></span>
            </div>
        </div>
    )
}

export default CategoryFilterItem