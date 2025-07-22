import AuthBox from './AuthBox'
import AuthInput from './AuthInput'
import PrimaryButton from '../../components/Ui/Buttons/PrimaryButton'
import { Link } from 'react-router-dom'

const EmailLogin = () => {
    return (
        <main className='flex flex-col justify-center items-center h-[100vh]'>
            <AuthBox title="ورود با موبایل"
                subTitle="حساب کاربری ندارید؟"
                AuthLink={<Link to="/signup" className='text-primary font-Vazirmatn-Bold'>ثبت نام کنید</Link>}>
                <AuthInput placeHolder="آدرس ایمیل" icon="Email" />
                <AuthInput placeHolder="رمز عبور" icon="Lock" />
                <div className='mt-5'>
                    <PrimaryButton text="ادامه" />
                </div>
                <div className='flex justify-between px-1'>
                    <Link to="/login" className='mt-5 block text-gray-500 text-sm'>ورود با موبایل</Link>
                    <Link to="/login/lost-password" className='mt-5 block text-gray-500 text-sm'>فراموشی رمز عبور</Link>
                </div>

            </AuthBox>
        </main>
    )
}

export default EmailLogin