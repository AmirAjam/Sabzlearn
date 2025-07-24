import AuthBox from '../../components/Auth/AuthBox'
import AuthInput from '../../components/Auth/AuthInput'
import { Link } from 'react-router-dom'
import loginSchema from '../../schemas/loginSchema';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PrimaryAlert from '../../components/Ui/Alerts/PrimaryAlert';

const EmailLogin = () => {
    const [alertText, setAlertText] = useState("")
    const [alertTrigger, setAlertTrigger] = useState(0)
    const [alertDanger, setAlertDanger] = useState(true)

    const { control, handleSubmit } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const onSubmit = (data) => {
        setAlertTrigger(prev => prev + 1)
        setAlertDanger(false)
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
            <main className='flex flex-col justify-center items-center h-[100vh]'>
                <AuthBox title="ورود با موبایل"
                    subTitle="حساب کاربری ندارید؟"
                    AuthLink={<Link to="/signup" className='text-primary font-Vazirmatn-Bold'>ثبت نام کنید</Link>}
                    AnotherLogin={
                        <div className='flex justify-between px-1'>
                            <Link to="/login" className='mt-5 block text-gray-500 text-sm'>ورود با موبایل</Link>
                            <Link to="/login/lost-password" className='mt-5 block text-gray-500 text-sm'>فراموشی رمز عبور</Link>
                        </div>}
                    onSubmit={handleSubmit(onSubmit, onError)}
                >
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }
                        ) => (
                            <AuthInput
                                placeHolder="آدرس ایمیل"
                                icon="Email"
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
                            <AuthInput
                                placeHolder="رمز عبور"
                                icon="Lock"
                                {...field}
                            />
                        )}
                    />
                </AuthBox>
            </main>
            {<PrimaryAlert danger={alertDanger} text={alertText} trigger={alertTrigger} />}
        </>
    )
}

export default EmailLogin