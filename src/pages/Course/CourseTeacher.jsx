import React from 'react'
import SeconderyButton from '../../components/Ui/Buttons/SeconderyButton'
import { Link } from 'react-router-dom'

const CourseTeacher = () => {
    return (
        <section className='mt-8'>
            <div className="container bg-white dark:bg-darker py-5 flex flex-col justify-center items-center rounded-lg">
                <div>
                    <img src="public/images/user/1.png" alt="" className='rounded-full size-24' />
                </div>
                <p className='mt-5 font-Vazirmatn-Bold text-lg'>محمدامین سعیدی راد | مدرس دوره</p>
                <Link className='w-fit mt-5'>
                    <SeconderyButton text="مشاهده پروفایل من" />
                </Link>
            </div>
        </section>
    )
}

export default CourseTeacher