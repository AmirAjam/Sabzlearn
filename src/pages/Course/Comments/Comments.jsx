import React from 'react'
import PrimaryButton from '../../../components/Ui/Buttons/PrimaryButton'
import CommentItem from './CommentItem'
import SeconderyButton from '../../../components/Ui/Buttons/SeconderyButton'

const Comments = () => {
    return (
        <section>
            <div className="container bg-white dark:bg-darker mt-8 py-5 rounded-lg relative">
                <div className='flex justify-between items-center'>
                    <h2 className='font-Vazirmatn-Bold text-xl'>نظرات</h2>
                    <span className='-right-2 block absolute h-10 w-2 bg-red-500 top-5 rounded-xs'></span>
                    <div className='w-32 text-sm'>
                        <PrimaryButton text="ایجاد نظر جدید" icon="Comment" />
                    </div>
                </div>
                <div className='mt-8 text-sm p-3 bg-green-50 text-green-500 dark:bg-green-800/30 rounded-lg 
                    dark:text-green-600'>
                    <p>دانشجوی عزیز؛ سوالات مرتبط به پشتیبانی دوره در قسمت نظرات تایید نخواهد شد، لطفا در بخش مشاهده آنلاین هر ویدیو سوالات خود را مطرح کنید.</p>
                </div>
                <div className='py-5'>
                    <CommentItem />
                    <CommentItem />
                    <CommentItem />
                </div>
                <div className='w-fit mx-auto'>
                    <SeconderyButton text="مشاهده بیشتر" icon="ArrowDown"/>
                </div>
            </div>
        </section>
    )
}

export default Comments