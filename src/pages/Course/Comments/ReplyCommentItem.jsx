import React from 'react'

const ReplyCommentItem = () => {
    return (
        <div className='bg-gray-300/80 dark:bg-darker p-3 rounded-lg mt-5'>
            <div className="flex justify-between items-center border-b border-gray-300/60 dark:border-gray-700  pb-5">
                <div className='flex gap-2 text-center'>
                    <span className='font-extralight'>تارا حیدری</span>
                    <span className='block w-1 h-5 bg-gray-700 dark:bg-white mt-px rounded-full'></span>
                    <span className='font-Vazirmatn-Bold'>کاربر</span>
                </div>
                <div>
                    <span className='text-gray-400 text-sm mt-3 block'>1403/12/30</span>
                </div>
            </div>
            <p className="mt-5 text-sm/6 ">سلام خسته نباشید من اصلا js تاحالا کار نکردم ولی می خواستم کتاب clean code بخونم چون انگلیسی بود سخت برام الان این دوره برای منم مناسب ؟</p>
        </div>
    )
}

export default ReplyCommentItem