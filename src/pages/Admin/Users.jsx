import { icons } from "lucide-react"
import AdminTitle from "../../components/Admin/Ui/AdminTitle"
import Selectbox from "../../components/Admin/Ui/Selectbox"
import SeconderyButton from "@/components/Ui/Buttons/SeconderyButton"
import { useEffect, useState } from "react"
import { registerUser } from "@/api/authApi"
import { changeUserRole, deleteUser, getAllUsers } from "@/api/usersApi"

import AlertDialog from "@/components/Ui/Alerts/AlertDialog"
import PrimaryAlert from "@/components/Ui/Alerts/PrimaryAlert"
import AddNewItem from "@/components/Admin/AddNewItem/AddNewItem"
import Cover from "@/components/Ui/Cover/Cover"
import AddNewItemInput from "@/components/Admin/AddNewItem/AddNewItemInput"
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import signupSchema from "@/schemas/signupSchema"

const Users = () => {
    const [users, setUsers] = useState(null)
    const [isShowAlert, setIsShowAlert] = useState(false)
    const [userId, setUserId] = useState(null)

    const [alertDanger, setAlertDanger] = useState(false)
    const [alertText, setAlertText] = useState(null)
    const [alertTrigger, setAlertTrigger] = useState(0)

    const [isShowAddUser, setIsShowAddUser] = useState(false)

    const { control, handleSubmit, reset } = useForm({
        resolver: yupResolver(signupSchema),
        defaultValues: {
            username: "",
            phone: "",
            email: "",
            password: ""
        }
    })

    const roleSelectbox = [
        { id: 1, text: "همه", value: "ALL" },
        { id: 2, text: "ادمین", value: "ADMIN" },
        { id: 3, text: "کاربر", value: "USER" },
        { id: 4, text: "مدرس", value: "TEACHER" }
    ]

    const userStatusSelectbox = [
        { id: 1, text: "همه", value: "all" },
        { id: 2, text: "فعال", value: "active" },
        { id: 3, text: "غیرفعال", value: "inactive" }
    ]

    const alertDialogResponse = res => {
        res ? handleDeleteUser() : setIsShowAlert(false)
    }

    const showAlertDialog = id => {
        setUserId(id)
        setIsShowAlert(true)
    }

    const handleDeleteUser = () => {
        deleteUser(userId).then(res => {
            if (res.status === 200) {
                setAlertText("کاربر با موفقیت از دیتابیس حذف شد.")
                setAlertDanger(false)
            } else {
                setAlertText("متاسفانه مشکلی در سرور به وجود آمده.")
                setAlertDanger(true)
            }
            setAlertTrigger(prev => prev + 1)
            setIsShowAlert(false)
            setUserId(null)
        })
    }

    const handleChangeUserRole = (id, role) => {
        changeUserRole(id, role).then(res => {
            if (res.status === 200) {
                setAlertText("نقش کاربر با موفقیت تغییر کرد.")
                setAlertDanger(false)
            } else {
                setAlertText("متاسفانه مشکلی در سرور به وجود آمده.")
                setAlertDanger(true)
            }
            setAlertTrigger(prev => prev + 1)
        })
    }

    const onSubmit = async data => {
        const userData = {
            username: data.username,
            email: data.email,
            password: data.password,
            confirmPassword: data.password,
            name: data.username,
            phone: data.phone
        }

        const res = await registerUser(userData)
        if (res === 201) {
            setAlertText("کاربر با موفقیت ثبت شد.")
            setAlertDanger(false)
            setIsShowAddUser(false)
            reset()
        } else if (res === 409) {
            setAlertText("نام کاربری یا ایمیل تکراری است.")
            setAlertDanger(true)
        } else {
            setAlertText("خطا در ثبت کاربر. لطفا مجدد تلاش کنید.")
            setAlertDanger(true)
        }

        setAlertTrigger(prev => prev + 1)
    }

    const onError = errors => {
        const firstError = Object.values(errors)[0]?.message
        if (firstError) {
            setAlertText(firstError)
            setAlertDanger(true)
            setAlertTrigger(prev => prev + 1)
        }
    }

    useEffect(() => {
        getAllUsers().then(res => setUsers(res.data))
    }, [userId, isShowAddUser])

    return (
        <main className='mt-10'>
            <div className="container">
                <AdminTitle title="لیست کاربران" />
                <div className="bg-darker mt-8 px-5 py-10 rounded-lg">
                    <div className="sm:flex gap-20 items-center pb-12 border-b border-gray-500">
                        <div className="sm:w-60">
                            <Selectbox title=" انتخاب نقش " options={roleSelectbox} />
                        </div>
                        <div className="sm:w-60 mt-5 sm:mt-0">
                            <Selectbox title=" وضعیت " options={userStatusSelectbox} />
                        </div>
                    </div>

                    <div className="mt-12 sm:flex justify-between items-center pb-12 border-b border-gray-500">
                        <input type="text" placeholder="جستجو ..." className="border-gray-500 border outline-0 py-1.5 px-4 rounded-sm focus:border-white" />
                        <div className="w-36 mt-5 sm:mt-0">
                            <SeconderyButton icon="Plus" text="افزودن کاربر" onClick={() => setIsShowAddUser(true)} />
                        </div>
                    </div>

                    <table className="w-full border-spacing-y-4 mt-8 text-right border-collapse">
                        <thead>
                            <tr className="border-b border-gray-500 pb-10 text-center">
                                <th className="w-6/20 font-Vazirmatn-Bold text-right py-6">کاربر</th>
                                <th className="hidden xl:table-cell w-3/20 font-Vazirmatn-Bold text-right">تلفن</th>
                                <th className="hidden sm:table-cell w-3/10 font-Vazirmatn-Bold text-right">نقش</th>
                                <th className="hidden lg:table-cell w-3/20 font-Vazirmatn-Bold text-right">وضعیت</th>
                                <th className="hidden sm:table-cell w-4/20 font-Vazirmatn-Bold text-right">عملیات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.map(user => (
                                <tr key={user._id} className="bg-darker text-sm rounded-md border-b border-gray-500">
                                    <td className="py-6 flex gap-5 items-center">
                                        <img src="/public/images/user/user.jpg" alt="" className="size-12 rounded-full" />
                                        <div>
                                            <p>{user.username}</p>
                                            <p className="mt-2">{user.email}</p>
                                        </div>
                                    </td>

                                    <td className="hidden xl:table-cell">
                                        <p>{user.phone}</p>
                                    </td>

                                    <td className="block py-4 sm:table-cell">
                                        <div className="w-2/3">
                                            <Selectbox changeUserRole={handleChangeUserRole} userId={user._id} options={roleSelectbox.slice(1)} defaultValue={user.role} />
                                        </div>
                                    </td>

                                    <td className="hidden lg:table-cell py-4 text-green-500">
                                        <span className="bg-green-500/10 py-1 px-4 rounded-sm">فعال</span>
                                    </td>

                                    <td className="block sm:table-cell py-4">
                                        <div className="flex gap-5 text-gray-500">
                                            <button className="cursor-pointer hover:text-red-500/80 duration-200">
                                                <icons.Ban />
                                            </button>
                                            <button onClick={() => showAlertDialog(user._id)} className="cursor-pointer hover:text-red-500/80 duration-200">
                                                <icons.Trash />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <AlertDialog isShowAlert={isShowAlert} alertDialogResponse={alertDialogResponse} />
            <PrimaryAlert danger={alertDanger} text={alertText} trigger={alertTrigger} />
            <AddNewItem
                isShowAddUser={isShowAddUser}
                title="اضافه کردن کاربر"
                onSubmit={handleSubmit(onSubmit, onError)}
            >

                <Controller name="username" control={control} render={({ field }) =>
                    <AddNewItemInput placeHolder="نام کاربری" {...field} />} />

                <Controller name="phone" control={control} render={({ field }) => 
                    <AddNewItemInput placeHolder="شماره موبایل" {...field} />} />

                <Controller name="email" control={control} render={({ field }) => 
                    <AddNewItemInput placeHolder="ایمیل" {...field} />} />

                <Controller name="password" control={control} render={({ field }) => 
                    <AddNewItemInput placeHolder="رمز عبور" {...field} />} />

            </AddNewItem>
            
            <Cover onClick={() => setIsShowAddUser(false)} coverStatus={isShowAddUser} />
        </main>
    )
}

export default Users
