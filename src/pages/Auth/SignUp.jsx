import React from 'react'

const SignUp = () => {
  return (
    <main className='flex flex-col justify-center items-center h-[100vh]'>
      <AuthBox title="عضویت"
        subTitle="قبلا ثبت نام کرده اید؟"
        AuthLink={<Link to="/signup" className='text-primary font-Vazirmatn-Bold'>ثبت نام کنید</Link>}>
        <AuthInput />
        <div className='mt-5'>
          <PrimaryButton text="ادامه" />
        </div>
        <Link className='mt-5 block text-gray-500 text-sm'>ورود با ایمیل</Link>
      </AuthBox>
    </main>
  )
}

export default SignUp