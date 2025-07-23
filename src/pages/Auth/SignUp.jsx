import AuthBox from '../../components/Auth/AuthBox'
import AuthInput from '../../components/Auth/AuthInput'
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom'

const SignUp = () => {

  const { control, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <main className='flex flex-col justify-center items-center h-[100vh]'>
      <AuthBox title="عضویت"
        subTitle="قبلا ثبت نام کرده اید؟"
        AuthLink={<Link to="/login" className='text-primary font-Vazirmatn-Bold'>وارد شوید</Link>}
        onSubmit={handleSubmit(onSubmit)} 
        >
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field, fieldState: { error } } 
          ) => (
            <>
              <AuthInput
                placeHolder="ایمیل خود را وارد کنید"
                icon="Email"
                {...field}
              />
              {error && <span className="text-red-500">ایمیل اجباری است.</span>}
            </>
          )}
        />
        {/* <AuthInput placeHolder="شماره موبایل" icon="Phone" name="phone"/>
        <AuthInput placeHolder="آدرس ایمیل" icon="Email" name="email"/>
        <AuthInput placeHolder="رمز عبور" icon="Lock" name="password"/> */}
      </AuthBox>
    </main>
  )
}

export default SignUp