import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import CourseTop from './CourseTop'
import CourseInfo from './CourseInfo/CourseInfo'
import CourseDescription from './CourseDescription'
import HeadLines from './HeadLines/HeadLines'
import Comments from './Comments/Comments'
import CourseProgress from './CourseProgress'
import CourseTeacher from './CourseTeacher'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getOneCourseDetail } from '../../api/coursesApi'

const Course = () => {

  const [courseDetails, setCourseDetails] = useState(null)

  const courseURL = useParams()

  useEffect(() => {
    getOneCourseDetail(courseURL.name)
      .then(res => setCourseDetails(res.data))

    console.log(courseDetails)
  }, [])
  return (
    <>
      <Header />
      <main className='py-16'>
        <div className="container">
          <Breadcrumb />
          <CourseTop
            name={courseDetails?.name}
            description={courseDetails?.description}
            price={courseDetails?.price} 
            discount={courseDetails?.discount} />

          <div className='lg:flex justify-between gap-5'>
            <div className='lg:w-67/100'>
              <CourseInfo />
              <CourseDescription />
              <HeadLines />
              <Comments />
            </div>

            <div className='lg:w-33/100'>
              <CourseProgress />
              <CourseTeacher />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Course