import AuthBox from '../../components/Auth/AuthBox'
import AuthInput from '../../components/Auth/AuthInput'
import { useForm, Controller } from 'react-hook-form';

const Login = () => {
    const { control, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <main className='flex flex-col justify-center items-center h-[100vh]'>
            <AuthBox title="بازیابی رمز عبور"
                subTitle=""
                AuthLink="" 
                onSubmit={handleSubmit(onSubmit)}>
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
        </main>
    )
}

export default Login