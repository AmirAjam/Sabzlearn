import { icons } from "lucide-react"
import AdminTitle from "../../components/Admin/Ui/AdminTitle"
import Selectbox from "../../components/Admin/Ui/Selectbox"
import SeconderyButton from "@/components/Ui/Buttons/SeconderyButton"
import { useEffect, useState } from "react"
import { getAllUsers } from "@/api/usersApi"
import AlertDialog from "@/components/Ui/Alerts/AlertDialog"
import Cover from "@/components/Ui/Cover/Cover"

const Users = () => {
    const [users, setUsers] = useState(null)
    const [isShowAlert, setIsShowAlert] = useState(false)

    const roleSelectbox = [
        { id: 1, text: "همه", value: "ALL" },
        { id: 2, text: "ادمین", value: "ADMIN" },
        { id: 3, text: "کاربر", value: "USER" },
        { id: 4, text: "مدرس", value: "TEACHER" },
    ]

    const userStatusSelectbox = [
        { id: 1, text: "همه", value: "all" },
        { id: 2, text: "فعال", value: "active" },
        { id: 3, text: "غیرفعال", value: "inactive" },
    ]

    const alertDialogResponse = (res) => {
        console.log(res)
    }

    const showAlertDialog = (res, userId) => {
        setIsShowAlert(true)
        if (res !== null) {
            // res ? deleteUser(userIdTemp) : setIsShowAlert(false)
        }
        else {
            console.log("userId : " + userId)
        }
    }

    const deleteUser = (userId) => {
        console.log(userId)
        setIsShowAlert(false)
    }
    useEffect(() => {
        getAllUsers()
            .then(res => setUsers(res.data))
    }, [])


    return (
        <main className='mt-10'>
            <div className="container">
                <AdminTitle title="لیست کاربران" />
                <div className="bg-darker mt-16 px-5 py-10 rounded-lg">
                    <div className="flex gap-20 items-center pb-12 border-b border-gray-500">
                        <div className="w-60">
                            <Selectbox title=" انتخاب نقش " options={roleSelectbox} />
                        </div>
                        <div className="w-60">
                            <Selectbox title=" وضعیت " options={userStatusSelectbox} />
                        </div>
                    </div>

                    <div className="mt-12 flex justify-between items-center pb-12 border-b border-gray-500">
                        <input type="text" placeholder="جستجو ..." className="border-gray-500 border
                        outline-0 py-1.5 px-4 rounded-sm focus:border-white"/>
                        <div className="w-36">
                            <SeconderyButton icon="Plus" text="افزودن کاربر" />
                        </div>
                    </div>

                    <table className="w-full border-spacing-y-4 mt-8 text-right  border-collapse">
                        <thead>
                            <tr className="border-b border-gray-500 pb-10 text-center">
                                <th className="w-6/20 font-Vazirmatn-Bold text-right py-6">کاربر</th>
                                <th className="w-3/20 font-Vazirmatn-Bold text-right">تلفن</th>
                                <th className="w-3/10 font-Vazirmatn-Bold text-right">نقش</th>
                                <th className="w-3/20 font-Vazirmatn-Bold text-right">وضعیت</th>
                                <th className="w-4/20 font-Vazirmatn-Bold text-right">عملیات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.map(user => {
                                return (
                                    <tr key={user._id} className="bg-darker text-sm rounded-md border-b border-gray-500">
                                        <td className="flex gap-5 items-center py-6">
                                            <div>
                                                <img src="/public/images/user/user.jpg" alt="" className="size-12 rounded-full" />
                                            </div>
                                            <div>
                                                <p>{user.username}</p>
                                                <p className="mt-2">{user.email}</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="">{user.phone}</p>
                                        </td>
                                        <td className="py-4">
                                            <div className="w-2/3">
                                                <Selectbox options={roleSelectbox.slice(1)} defaultValue={user.role} />
                                            </div>
                                        </td>
                                        <td className="py-4 text-green-500">
                                            <span className="bg-green-500/10 py-1 px-4 rounded-sm">فعال</span>
                                        </td>
                                        <td className="py-4">
                                            <div className="flex gap-5 text-gray-500">
                                                <button className="cursor-pointer hover:text-red-500/80 duration-200">
                                                    <icons.Ban />
                                                </button>
                                                <button onClick={() => showAlertDialog(null, user._id)}
                                                    className="cursor-pointer hover:text-red-500/80 duration-200">
                                                    <icons.Trash />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                </div>
            </div>
            <AlertDialog isShowAlert={isShowAlert} alertDialogResponse={alertDialogResponse} />
        </main>
    )
}

export default Users