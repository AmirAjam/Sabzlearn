import React from 'react'

const CategoryTitle = ({ title }) => {
  return (
    <div className='sm:flex gap-3 items-center'>
      <div className='size-4 bg-amber-300 rounded-sm hidden sm:block'></div>
      <h2 className='text-2xl text-center mt-10 sm:mt-0 font-Vazirmatn-Bold lg:text-3xl'>{title}</h2>
    </div>
  )
}

export default CategoryTitle