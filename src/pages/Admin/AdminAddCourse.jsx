import { getCategories } from '@/api/categoryApi'
import AddNewItemInput from '@/components/Admin/AddNewItem/AddNewItemInput'
import AdminTitle from '@/components/Admin/Ui/AdminTitle'
import Selectbox from '@/components/Admin/Ui/Selectbox'
import PrimaryButton from '@/components/Ui/Buttons/PrimaryButton'
import { useEffect, useState } from 'react'

const AdminAddCourse = () => {

    const [categories, setCategories] = useState(null)

    const courseStatusSelectbox = [
        { _id: 2, title: "فعال", name: "active" },
        { _id: 3, title: "غیرفعال", name: "inactive" }
    ]

    useEffect(() => {
        getCategories()
            .then(res => setCategories(res.data))
    })

    return (
        <main className=''>
            <div className="container">
                <div className='flex flex-wrap gap-5 justify-between items-center'>
                    <AdminTitle title="اضافه کردن دوره" />
                    <div className='w-32 mt-10'>
                        <PrimaryButton text="انتشار دوره" />
                    </div>
                </div>

                <div className='mt-12 flex flex-wrap justify-between gap-20 md:gap-0'>
                    <div className='md:w-60/100 w-full bg-darker p-4 rounded-lg'>
                        <h3 className='text-xl'>اطلاعات محصول</h3>
                        <div className='mt-1'>
                            <div>
                                <AddNewItemInput name="title" placeHolder="عنوان دوره" />
                            </div>
                        </div>
                        <div className='mt-4 flex flex-wrap justify-between gap-8'>
                            <div className='mt-1 w-45/100'>
                                <div className=''>
                                    <AddNewItemInput name="description" placeHolder="توضیحات دوره" />
                                </div>
                            </div>
                            <div className='mt-1 w-45/100'>
                                <div className=''>
                                    <AddNewItemInput name="link" placeHolder="لینک کوتاه دوره" />
                                </div>
                            </div>
                        </div>

                        <div className='mt-12 flex justify-between gap-18'>
                            <div className='w-1/3'>
                                <label htmlFor="code" className='mb-3.5 block'>وضعیت</label>
                                <Selectbox options={courseStatusSelectbox} defaultValue={"inactive"} />
                            </div>
                            <div className='w-2/3'>
                                <label htmlFor="count" className='mb-3.5 block'>دسته بندی</label>
                                <div className='w-full'>
                                    {categories &&
                                        <Selectbox options={categories} defaultValue={categories[0].name} />
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='mt-12'>
                            <label htmlFor="count" className='mb-3.5 block'>عکس اصلی</label>
                            <div className='h-72 border-2 border-dashed border-gray-500 rounded-lg flex justify-center items-center'>
                                <div className='w-32'>
                                    <PrimaryButton text="انتخاب از فایل ها" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='md:w-35/100 w-full bg-darker p-4 rounded-lg h-fit'>
                        <h3 className='text-xl'>قیمت گذاری</h3>
                        <div className='mt-10'>
                            <label htmlFor="title" className='mb-3.5 block'>قیمت پایه</label>
                            <AddNewItemInput name="title" placeholder="قیمت محصول" />
                        </div>
                        <div className='mt-10'>
                            <label htmlFor="title" className='mb-3.5 block'>تخفیف (اختیاری)</label>
                            <AddNewItemInput name="title" placeholder="تخفیف محصول" />
                        </div>
                        <div className='mt-16 flex justify-between items-center'>
                            <p htmlFor="after-discount" className=''> قیمت نهایی : </p>
                            <p className='text-xl font-Vazirmatn-Bold'>۱۰,۰۰۰,۰۰۰</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AdminAddCourse