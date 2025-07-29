import { addCategory, deleteCategory, getCategories } from '@/api/categoryApi'
import AddNewItem from '@/components/Admin/AddNewItem/AddNewItem'

import AddNewUser from '@/components/Admin/AddNewItem/AddNewItem'
import AddNewItemInput from '@/components/Admin/AddNewItem/AddNewItemInput'
import AdminButton from '@/components/Admin/Ui/AdminButton'
import AdminTitle from '@/components/Admin/Ui/AdminTitle'
import AlertDialog from '@/components/Ui/Alerts/AlertDialog'
import PrimaryAlert from '@/components/Ui/Alerts/PrimaryAlert'
import SeconderyButton from '@/components/Ui/Buttons/SeconderyButton'
import Cover from '@/components/Ui/Cover/Cover'

import CustomDialog from '@/components/Ui/Alerts/CustomDialog'

import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const AdminCategory = () => {
    const [categories, setCategories] = useState(null)
    const [isShowCover, setIsShowCover] = useState(false)
    const [isShowDialogAlert, setIsShowDialogAlert] = useState(false)
    const [categoryId, setCategoryId] = useState(null)
    const [alertDanger, setAlertDanger] = useState(false)
    const [alertText, setAlertText] = useState(null)
    const [alertTrigger, setAlertTrigger] = useState(0)
    const [isShowAddUser, setIsShowAddUser] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: '',
            name: '',
        },
    })

    const alertDialogResponse = (res) => {
        res ? deleteCategoryHandler() : showAlertDiaolog()
    }

    const showAlertDiaolog = (id) => {
        setIsShowDialogAlert((prev) => !prev)
        setIsShowCover((prev) => !prev)
        setCategoryId(id)
    }

    const deleteCategoryHandler = () => {
        deleteCategory(categoryId).then((res) => {
            if (res.status === 200) {
                refreshCategories()
                showSuccessAlert('دسته بندی با موفقیت حذف شد')
            }
        })
        showAlertDiaolog(null)
    }

    const showSuccessAlert = (text) => {
        setAlertDanger(false)
        setAlertText(text)
        setAlertTrigger((prev) => prev + 1)
    }

    const onSubmit = async (data) => {
        const res = await addCategory(data)
        if (res.status === 201) {
            refreshCategories()
            setAlertText('دسته‌بندی با موفقیت افزوده شد.')
            setAlertDanger(false)
            setIsShowAddUser(false)
            setIsShowCover(false)
            reset()
        } else {
            setAlertText('خطا در ثبت دسته‌بندی.')
            setAlertDanger(true)
        }
        setAlertTrigger((prev) => prev + 1)
    }

    const onError = (errors) => {
        const firstError = Object.values(errors)[0]?.message
        if (firstError) {
            setAlertText(firstError)
            setAlertDanger(true)
            setAlertTrigger((prev) => prev + 1)
        }
    }

    const refreshCategories = () => {
        getCategories().then(res => setCategories(res.data))
    }

    useEffect(() => {
        refreshCategories()
    }, [])

    return (
        <main className='mt-10'>
            <div className='container'>
                <AdminTitle title='دسته بندی' />
                <div className='bg-darker mt-8 px-5 py-10 pb-5 mb-10 rounded-lg'>
                    <div className='sm:flex justify-between items-center pb-12 border-b border-gray-500'>
                        <input
                            type='text'
                            placeholder='جستجو ...'
                            className='border-gray-500 border outline-0 py-1.5 px-4 rounded-sm focus:border-white'
                        />
                        <div className='w-48 mt-5 sm:mt-0'>
                            <SeconderyButton
                                icon='Plus'
                                text='افزودن دسته بندی'
                                onClick={() => {
                                    setIsShowAddUser((prev) => !prev)
                                    setIsShowCover(true)
                                }}
                            />
                        </div>
                    </div>

                    <table className='w-full border-spacing-y-4 mt-8 text-right  border-collapse'>
                        <thead>
                            <tr className='border-b border-gray-500 pb-10 text-center'>
                                <th className='w-3/10 font-Vazirmatn-Bold text-right py-6'>اسم</th>
                                <th className='hidden sm:table-cell w-5/20 font-Vazirmatn-Bold text-right'>اسم کوتاه</th>
                                <th className='hidden xl:table-cell w-5/20 font-Vazirmatn-Bold text-right'>وضعیت</th>
                                <th className='hidden sm:table-cell w-4/10 font-Vazirmatn-Bold text-right'>عملیات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories?.map((category) => {
                                return (
                                    <tr
                                        key={category._id}
                                        className='bg-darker text-sm rounded-md border-b border-gray-500 last:border-none'
                                    >
                                        <td className='py-6 flex gap-5 items-center'>
                                            <p className='text-lg'>{category.title}</p>
                                        </td>

                                        <td className='hidden sm:table-cell'>
                                            <p className='text-lg'>{category.name}</p>
                                        </td>

                                        <td className='hidden lg:table-cell py-4 text-green-500'>
                                            <span className='bg-green-500/10 py-1 px-4 rounded-sm'>فعال</span>
                                        </td>

                                        <td className='block sm:table-cell py-4'>
                                            <div className='flex gap-5 text-gray-500'>
                                                {/* <AdminButton text='ویرایش' danger={false} /> */}
                                                <CustomDialog categoryId={category._id}
                                                    refreshCategories={refreshCategories}
                                                    showSuccessAlert={showSuccessAlert} />
                                                <AdminButton
                                                    text='حذف'
                                                    danger={true}
                                                    onClick={() => showAlertDiaolog(category._id)}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <AlertDialog isShowAlert={isShowDialogAlert} alertDialogResponse={alertDialogResponse} />
            {isShowAddUser ?
                <Cover onClick={() => {
                    setIsShowCover(false)
                    setIsShowAddUser(false)
                }} coverStatus={isShowCover} />
                :
                <Cover coverStatus={isShowCover} />}

            <PrimaryAlert danger={alertDanger} text={alertText} trigger={alertTrigger} />

            <AddNewItem
                isShowAddUser={isShowAddUser}
                title='اضافه کردن دسته بندی جدید'
                onSubmit={handleSubmit(onSubmit, onError)}
            >
                <AddNewItemInput
                    placeHolder='اسم دسته بندی'
                    {...register('title', {
                        required: 'اسم دسته بندی الزامی است',
                        minLength: {
                            value: 3,
                            message: 'حداقل باید ۳ کاراکتر باشد',
                        },
                    })}
                />

                <AddNewItemInput
                    placeHolder='اسم کوتاه دسته بندی'
                    {...register('name', {
                        required: 'اسم کوتاه الزامی است',
                    })}
                />
            </AddNewItem>

            <AddNewUser />
        </main>
    )
}

export default AdminCategory
