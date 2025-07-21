import React from 'react'
import CourseInfoItem from './CourseInfoItem'

const CourseInfo = () => {
  return (
    <section className='mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-7.5'>
      <CourseInfoItem icon="Info" text="وضعیت دوره" desc="تکمیل شده"/>
      <CourseInfoItem icon="Clock" text="مدت زمان دوره" desc="10 ساعت"/>
      <CourseInfoItem icon="Calendar" text="آخرین بروزرسانی" desc="1403/04/24"/>
      <CourseInfoItem icon="Users" text="روش پشتیبانی" desc="انلاین"/>
      <CourseInfoItem icon="Backpack" text="پیش نیاز" desc="JS"/>
      <CourseInfoItem icon="Video" text="نوع مشاهده" desc="آنلاین"/>
    </section>
  )
}

export default CourseInfo