import React from 'react'
import AuthBox from './AuthBox'
import AuthInput from './AuthInput'
import PrimaryButton from '../../components/Ui/Buttons/PrimaryButton'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <main className='flex flex-col justify-center items-center h-[100vh]'>
            <AuthBox title="بازیابی رمز عبور"
                subTitle=""
                AuthLink="" >
                <AuthInput placeHolder="شماره موبایل" icon="Phone" />
                <div className='mt-5'>
                    <PrimaryButton text="ادامه" />
                </div>
            </AuthBox>
        </main>
    )
}

export default Login