import AddNewItemInput from '@/components/Admin/AddNewItem/AddNewItemInput'
import AdminTitle from '@/components/Admin/Ui/AdminTitle'
import Selectbox from '@/components/Admin/Ui/Selectbox'
import PrimaryButton from '@/components/Ui/Buttons/PrimaryButton'
import Editor from '@/components/Ui/Editor/Editor'
import React from 'react'

const AdminAddArticle = () => {
    const courseStatusSelectbox = [
        { _id: 1, title: "منتشر شده", name: "published" },
        { _id: 2, title: "پیش نویس", name: "draft" }
    ]
    return (
        <main className='pb-12'>
            <div className="container">
                <div className='flex flex-wrap gap-5 justify-between items-center'>
                    <AdminTitle title="اضافه کردن دوره" />
                    <div className='w-32 mt-10'>
                        <PrimaryButton text="انتشار مقاله" />
                    </div>
                </div>

                <div className='mt-12 flex flex-wrap justify-between gap-20 md:gap-0'>
                    <div className='md:w-60/100 w-full bg-darker px-4 py-2 rounded-lg'>
                        <h3 className='text-xl'>اطلاعات محصول</h3>

                        <div className='mt-12'>
                            <label htmlFor="count" className='mb-3.5 block'>عکس اصلی</label>
                            <div className='h-52 border-2 border-dashed border-gray-500 rounded-lg flex justify-center items-center'>
                                <div className='w-32'>
                                    <PrimaryButton text="انتخاب از فایل ها" />
                                </div>
                            </div>
                        </div>
                        <div className='mt-20 mb-10'>
                            <Editor />
                        </div>
                    </div>



                    <div className='md:w-35/100 w-full bg-darker px-4 pt-3 pb-8 rounded-lg h-fit'>
                        <h3 className='text-xl'>اطلاعات مقاله</h3>
                        <div>
                            <AddNewItemInput name="title" placeHolder="عنوان مقاله" />
                        </div>

                        <div className='w-full mt-12'>
                            <AddNewItemInput name="description" placeHolder="توضیحات مقاله" />
                        </div>

                        <div className='w-full mt-12'>
                            <AddNewItemInput name="link" placeHolder="لینک کوتاه دوره" />
                        </div>

                        <div className='mt-12'>
                            <label htmlFor="code" className='mb-3.5 block'>وضعیت</label>
                            <Selectbox options={courseStatusSelectbox} defaultValue={"draft"} />
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default AdminAddArticle