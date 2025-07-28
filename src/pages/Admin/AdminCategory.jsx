import { getCategories } from '@/api/categoryApi'
import AddNewUser from '@/components/Admin/AddNewUser/AddNewItem'
import AdminButton from '@/components/Admin/Ui/AdminButton'
import AdminTitle from '@/components/Admin/Ui/AdminTitle'
import SeconderyButton from '@/components/Ui/Buttons/SeconderyButton'
import { icons } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const AdminCategory = () => {
    const [categories, setCategories] = useState(null)

    useEffect(() => {
        getCategories()
            .then((res) => setCategories(res.data))
    })
    return (
        <main className='mt-10'>
            <div className="container">
                <AdminTitle title="دسته بندی" />
                <div className="bg-darker mt-8 px-5 py-10 rounded-lg">
                    <div className="sm:flex justify-between items-center pb-12 border-b border-gray-500">
                        <input type="text" placeholder="جستجو ..." className="border-gray-500 border
                        outline-0 py-1.5 px-4 rounded-sm focus:border-white"/>
                        <div className="w-48 mt-5 sm:mt-0">
                            <SeconderyButton icon="Plus" text="افزودن دسته بندی"
                                onClick={() => setIsShowAddUser(prev => !prev)} />
                        </div>
                    </div>

                    <table className="w-full border-spacing-y-4 mt-8 text-right  border-collapse">
                        <thead>
                            <tr className="border-b border-gray-500 pb-10 text-center">
                                <th className="w-3/10 font-Vazirmatn-Bold text-right py-6">اسم</th>
                                <th className="hidden xl:table-cell w-5/20 font-Vazirmatn-Bold text-right">اسم کوتاه</th>
                                <th className="hidden lg:table-cell w-5/20 font-Vazirmatn-Bold text-right">وضعیت</th>
                                <th className="hidden sm:table-cell w-4/10 font-Vazirmatn-Bold text-right">عملیات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories?.map(category => {
                                return (
                                    <tr key={category._id} className="bg-darker text-sm rounded-md border-b border-gray-500">
                                        <td className="py-6 flex gap-5 items-center">
                                            <p className='text-lg'>{category.title}</p>
                                        </td>

                                        <td className="hidden xl:table-cell">
                                            <p className='text-lg'>{category.name}</p>
                                        </td>

                                        <td className="hidden lg:table-cell py-4 text-green-500">
                                            <span className="bg-green-500/10 py-1 px-4 rounded-sm">فعال</span>
                                        </td>

                                        <td className="block sm:table-cell py-4">
                                            <div className="flex gap-5 text-gray-500">
                                                <AdminButton text="ویرایش" danger={false}/>
                                                <AdminButton text="حذف" danger={true}/>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                </div>
            </div>
            {/* <AlertDialog isShowAlert={isShowAlert} alertDialogResponse={alertDialogResponse} />
            <PrimaryAlert danger={alertDanger} text={alertText} trigger={alertTrigger} />
            <AddNewUser isShowAddUser={isShowAddUser} close={() => setIsShowAddUser(false)} />
            <Cover onClick={() => setIsShowAddUser(false)} coverStatus={isShowAddUser} /> */}
            <AddNewUser />
        </main>
    )
}

export default AdminCategory