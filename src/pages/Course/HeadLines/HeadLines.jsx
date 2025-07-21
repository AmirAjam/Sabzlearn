import React from 'react'
import HeadlineItem from './HeadlineItem'

const HeadLines = () => {
    return (
        <section>
            <div className="container bg-white dark:bg-darker mt-8 py-5 rounded-lg relative">
                <h2 className='font-Vazirmatn-Bold text-xl'>سرفصل ها</h2>
                <span className='-right-2 block absolute h-10 w-2 bg-sky-400 top-3 rounded-xs'></span>
                <div className='py-5'>
                    <HeadlineItem />
                    <HeadlineItem />
                    <HeadlineItem />
                </div>
            </div>
        </section>
    )
}

export default HeadLines