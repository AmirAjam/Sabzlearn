import { Link } from 'react-router-dom'
import PrimaryButton from '../Ui/Buttons/PrimaryButton';

const AuthBox = ({ children, title, subTitle, AuthLink, onSubmit,AnotherLogin }) => {
    return (
        <div className='w-80 rounded-lg'>
            <Link to="/" className='flex items-center justify-center'>
                <img src="/public/images/logo/footer-logo.png" alt="" className='h-12' />
            </Link>
            <div className='bg-darker mt-10 rounded-lg py-4'>
                <h2 className='text-xl font-Vazirmatn-Bold text-center'>{title}</h2>
                <div className='text-center mt-5'>
                    <p>{subTitle}  {AuthLink && AuthLink}</p>
                </div>
                <form className='px-6 mt-5' onSubmit={onSubmit}>
                    {children}
                    <div className='mt-5'>
                        <PrimaryButton text="ادامه" submit={true} />
                    </div>
                    {AnotherLogin && AnotherLogin}
                </form>
            </div>
            <p className='mt-8 text-gray-300 text-center'>
                با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمات <span className='text-green-primary font-Vazirmatn-Bold'>سبزلرن</span> را پذیرفته اید.
            </p>
        </div>
    )
}

export default AuthBox