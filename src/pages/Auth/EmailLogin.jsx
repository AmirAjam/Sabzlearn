import AuthBox from '../../components/Auth/AuthBox'
import AuthInput from '../../components/Auth/AuthInput'
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom'

const EmailLogin = () => {
    const { control, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <main className='flex flex-col justify-center items-center h-[100vh]'>
            <AuthBox title="ورود با موبایل"
                subTitle="حساب کاربری ندارید؟"
                AuthLink={<Link to="/signup" className='text-primary font-Vazirmatn-Bold'>ثبت نام کنید</Link>}
                AnotherLogin={
                    <div className='flex justify-between px-1'>
                        <Link to="/login" className='mt-5 block text-gray-500 text-sm'>ورود با موبایل</Link>
                        <Link to="/login/lost-password" className='mt-5 block text-gray-500 text-sm'>فراموشی رمز عبور</Link>
                    </div>}
                onSubmit={handleSubmit(onSubmit)}
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
    )
}

export default EmailLogin