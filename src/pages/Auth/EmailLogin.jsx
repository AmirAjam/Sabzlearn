import React from 'react'

const EmailLogin = () => {
    return (
        <main className='flex flex-col justify-center items-center h-[100vh]'>
            <AuthBox title="عضویت"
                subTitle="قبلا ثبت نام کرده اید؟"
                AuthLink={<Link to="/login" className='text-primary font-Vazirmatn-Bold'>وارد شوید</Link>}>
                <AuthInput placeHolder="نام کاربری" icon="User" />
                <AuthInput placeHolder="شماره موبایل" icon="Phone" />
                <AuthInput placeHolder="آدرس ایمیل" icon="Email" />
                <AuthInput placeHolder="رمز عبور" icon="Lock" />
                <div className='mt-5'>
                    <PrimaryButton text="ادامه" />
                </div>
            </AuthBox>
        </main>
    )
}

export default EmailLogin