import AuthBox from '../../components/Auth/AuthBox'
import AuthInput from '../../components/Auth/AuthInput'
import { Link } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form';
import PrimaryAlert from '../../components/Ui/Alerts/PrimaryAlert';

const Login = () => {
    const { control, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <main className='flex flex-col justify-center items-center h-[100vh]'>
            <AuthBox title="ورود با موبایل"
                subTitle="حساب کاربری ندارید؟"
                AuthLink={<Link to="/signup" className='text-primary font-Vazirmatn-Bold'>ثبت نام کنید</Link>}
                AnotherLogin={<Link to="/login/email" className='mt-5 block text-gray-500 text-sm'>ورود با ایمیل</Link>}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field }
                    ) => (
                        <AuthInput
                            placeHolder="شماره موبایل"
                            icon="Phone"
                            {...field}
                        />
                    )}
                />
            </AuthBox>
            <PrimaryAlert danger={true} text={"لطفا یک شماره موبایل معتبر وارد کنید."}/>
        </main>
    )
}

export default Login