import React, { useState } from 'react'
import AddNewUserInput from './AddNewUserInput'
import PrimaryButton from '@/components/Ui/Buttons/PrimaryButton';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import signupSchema from '@/schemas/signupSchema';
import { registerUser } from '@/api/authApi';
import PrimaryAlert from '@/components/Ui/Alerts/PrimaryAlert';


const AddNewUser = ({ isShowAddUser,close }) => {
    const [alertText, setAlertText] = useState("")
    const [alertTrigger, setAlertTrigger] = useState(0)
    const [alertDanger, setAlertDanger] = useState(true)


    const { control, handleSubmit } = useForm({
        resolver: yupResolver(signupSchema)
    });

    const onSubmit = async (data) => {
        console.log("Submit =>>>>>>>>>")
        const userData = {
            username: data.username,
            email: data.email,
            password: data.password,
            confirmPassword: data.password,
            name: data.username,
            phone: data.phone
        }
        const responseCode = await registerUser(userData)
        if (responseCode === 201) {
            setAlertDanger(false)
            setAlertText("ثبت نام با موفقیت انجام شد.")
            close()
        }
        else if (responseCode === 409) {
            setAlertText("نام کاربری یا ایمیل تکراری می باشد")
        }
        else {
            setAlertText("خطایی در ارتباط با سرور رخ داد.لطفا بعدا تلاش کنید")
        }
        setAlertTrigger(prev => prev + 1)
    }

    const onError = (formErrors) => {
        const firstError = Object.values(formErrors)[0]?.message;
        if (firstError) {
            setAlertText(firstError)
            setAlertTrigger(prev => prev + 1)
        }
    };

    return (
        <>
            <div className={`fixed p-5 w-84 bg-darker inset-y-0 z-50 duration-200 ${isShowAddUser ? "left-0" : "-left-96"}`}>
                <h3 className='text-lg font-Vazirmatn-Bold'>اضافه کردن کاربر</h3>
                <form className='mt-8' onSubmit={handleSubmit(onSubmit, onError)}>
                    <Controller
                        name="username"
                        control={control}
                        defaultValue=""
                        render={({ field }
                        ) => (
                            <AddNewUserInput
                                placeHolder="نام کاربری"
                                {...field}
                            />
                        )}
                    />

                    <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        render={({ field }
                        ) => (
                            <AddNewUserInput
                                placeHolder="شماره موبایل "
                                {...field}
                            />
                        )}
                    />

                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }
                        ) => (
                            <AddNewUserInput
                                placeHolder="ایمیل"
                                {...field}
                            />
                        )}
                    />

                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field }
                        ) => (
                            <AddNewUserInput
                                placeHolder="رمز عبور"
                                {...field}
                            />
                        )}
                    />
                    <div className='mt-16'>
                        <PrimaryButton text="تایید" submit={true} />
                    </div>
                </form>
                <PrimaryAlert danger={alertDanger} text={alertText} trigger={alertTrigger} />
            </div>

        </>
    )
}

export default AddNewUser