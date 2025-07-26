import AuthBox from '../../components/Auth/AuthBox'
import AuthInput from '../../components/Auth/AuthInput'
import { Link } from 'react-router-dom'
import mobileSchema from '../../schemas/mobileSchema';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PrimaryAlert from '../../components/Ui/Alerts/PrimaryAlert';

const Login = () => {
    const [alertText, setAlertText] = useState("")
    const [alertTrigger, setAlertTrigger] = useState(0)
    const [alertDanger, setAlertDanger] = useState(true)

    const { control, handleSubmit } = useForm({
        resolver: yupResolver(mobileSchema)
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
        <main className='flex flex-col justify-center items-center h-[100vh]'>
            <AuthBox title="ورود با موبایل"
                subTitle="حساب کاربری ندارید؟"
                AuthLink={<Link to="/signup" className='text-green-primary font-Vazirmatn-Bold'>ثبت نام کنید</Link>}
                AnotherLogin={<Link to="/login/email" className='mt-5 block text-gray-500 text-sm'>ورود با ایمیل</Link>}
                onSubmit={handleSubmit(onSubmit,onError)}
            >
                <Controller
                    name="phone"
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
            {<PrimaryAlert danger={alertDanger} text={alertText} trigger={alertTrigger} />}
        </main>
    )
}

export default Login