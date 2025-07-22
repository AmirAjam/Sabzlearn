import React from 'react'
import AuthBox from './AuthBox'
import AuthInput from './AuthInput'
import PrimaryButton from '../../components/Ui/Buttons/PrimaryButton'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <main className='flex flex-col justify-center items-center h-[100vh]'>
            <AuthBox title="ورود با موبایل"
                subTitle="حساب کاربری ندارید؟"
                AuthLink={<Link to="/signup" className='text-primary font-Vazirmatn-Bold'>ثبت نام کنید</Link>}>
                <AuthInput placeHolder="شماره موبایل" icon="Phone"/>

                <div className='mt-5'>
                    <PrimaryButton text="ادامه" />
                </div>
                <Link className='mt-5 block text-gray-500 text-sm'>ورود با ایمیل</Link>
            </AuthBox>
        </main>
    )
}

export default Login