import AuthBox from '../../components/Auth/AuthBox'
import AuthInput from '../../components/Auth/AuthInput'

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import signupSchema from '../../schemas/signupSchema';

import { Link, useNavigate } from 'react-router-dom'
import PrimaryAlert from '../../components/Ui/Alerts/PrimaryAlert';
import { useState } from 'react';
import { registerUser } from '../../api/authApi';

const SignUp = () => {

  const [alertText, setAlertText] = useState("")
  const [alertTrigger, setAlertTrigger] = useState(0)
  const [alertDanger, setAlertDanger] = useState(true)

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(signupSchema)
  });

  const navigate =useNavigate()

  const onSubmit = async(data) => {
    const userData = {
      username: data.username,
      email: data.email,
      password: data.password,
      confirmPassword: data.password,
      name: data.username,
      phone: data.phone
    }
    const responseCode = await registerUser(userData)
    if (responseCode === 201) {
      setAlertDanger(false)
      setAlertText("ثبت نام با موفقیت انجام شد.درحال انتقال به صفحه ورود هستید.")
      setTimeout(() => {
        navigate("/login")
      }, 4500);
    }
    else if (responseCode === 409) {
      setAlertText("نام کاربری یا ایمیل تکراری می باشد")
    }
    else {
      setAlertText("خطایی در ارتباط با سرور رخ داد.لطفا بعدا تلاش کنید")
    }
    setAlertTrigger(prev => prev + 1)

  }

  const onError = (formErrors) => {
    const firstError = Object.values(formErrors)[0]?.message;
    if (firstError) {
      setAlertText(firstError)
      setAlertTrigger(prev => prev + 1)
    }
  };
  return (
    <>
      <main className='flex flex-col justify-center items-center h-[96vh]'>
        <AuthBox title="عضویت"
          subTitle="قبلا ثبت نام کرده اید؟"
          AuthLink={<Link to="/login" className='text-green-primary font-Vazirmatn-Bold'>وارد شوید</Link>}
          onSubmit={handleSubmit(onSubmit, onError)}
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
      {<PrimaryAlert danger={alertDanger} text={alertText} trigger={alertTrigger} />}
    </>
  )
}

export default SignUp