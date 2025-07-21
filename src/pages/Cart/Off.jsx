import React from 'react'

const Off = () => {
    return (
        <section>
            <div className="container bg-white dark:bg-darker mt-8 rounded-lg py-5">
                <p className='pb-4 border-gray-600 border-b text-lg font-medium text-gray-400'>کد تخفیف دارید؟</p>
                <div className='mt-5 bg-dark py-3 rounded-lg flex justify-between items-center px-2'>
                    <input type="text" placeholder='کد تخفیف را وارد کنید' className='w-full border-none outline-0 pl-5'/>
                    <button className='bg-sky-500 py-1 px-3 rounded-lg cursor-pointer hover:bg-sky-600 duration-200'>اعمال</button>
                </div>
            </div>
        </section>
    )
}

export default Off