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
          name="username"
          control={control}
          defaultValue=""
          render={({ field }
          ) => (
            <AuthInput
              placeHolder="نام کاربری"
              icon="User"
              {...field}
            />
          )}
        />
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
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }
          ) => (
            <AuthInput
              placeHolder="ایمیل خود را وارد کنید"
              icon="Email"
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }
          ) => (
            <AuthInput
              placeHolder="رمز عبور" 
              icon="Lock"
              {...field}
            />
          )}
        />
      </AuthBox>
    </main>
  )
}

export default SignUp