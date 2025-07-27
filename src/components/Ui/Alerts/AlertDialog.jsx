import React from 'react'
import PrimaryButton from '../Buttons/PrimaryButton'
import SeconderyButton from '../Buttons/SeconderyButton'
import Cover from '../Cover/Cover'

const AlertDialog = ({ isShowAlert,alertDialogResponse }) => {

    return (
        <>
            <div className={`bg-white dark:bg-darker w-100 z-50 left-1/2 -translate-1/2 top-1/2 p-4 
                rounded-lg ${isShowAlert ? "fixed" : "hidden"}`}>
                <h3 className='font-Vazirmatn-Bold text-xl'>کاملاً مطمئن هستید؟</h3>
                <p className='mt-5 text-gray-400'>این اقدام قابل بازگشت نیست. این کار حساب کاربر را برای همیشه حذف کرده و اطلاعات کاربر را از سرورهای ما پاک می‌کند.</p>
                <div className='flex gap-10 mt-5 px-10'>
                    <PrimaryButton text="تایید" onClick={() => alertDialogResponse(true)} />
                    <SeconderyButton text="لغو" onClick={() => alertDialogResponse(false)}/>
                </div>
            </div>
            <Cover coverStatus={isShowAlert} />
        </>

    )
}

export default AlertDialog