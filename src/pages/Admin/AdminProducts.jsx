import React, { useEffect, useState } from 'react'
import AdminTitle from '../../components/Admin/Ui/AdminTitle'
import SeconderyButton from '@/components/Ui/Buttons/SeconderyButton'
import { deleteCourse, getAllCourses } from '@/api/coursesApi'
import { Link } from 'react-router-dom'
import AdminButton from '@/components/Admin/Ui/AdminButton'
import AlertDialog from '@/components/Ui/Alerts/AlertDialog'
import PrimaryAlert from '@/components/Ui/Alerts/PrimaryAlert'

const AdminProducts = () => {
  const [courses, setCourses] = useState(null)
  const [isShowDialogAlert, setIsShowDialogAlert] = useState(null)
  const [courseID, setCourseID] = useState(null)

  const [alertDanger, setAlertDanger] = useState(false)
  const [alertText, setAlertText] = useState(null)
  const [alertTrigger, setAlertTrigger] = useState(0)

  const alertDialogResponse = (res) => {
    res ? handlerDeleteCourse() : setIsShowDialogAlert(false)
  }

  const handlerDeleteCourse = () => {
    deleteCourse(courseID)
      .then(res => {
        refreshCoursesData()
        setCourseID(null)
        setIsShowDialogAlert(false)
        
        if (res.status === 200) {
          setAlertDanger(false)
          setAlertText("دوره مورد نظر با موفقیت حذف شد.")
          setAlertTrigger(prev => prev + 1)
        }
        else {
          setAlertDanger(true)
          setAlertText("مشکلی در سرور به وحود آمده.لطفا بعدا تلاش کنید")
          setAlertTrigger(prev => prev + 1)
        }
      })
  }

  useEffect(() => {
    refreshCoursesData()
  }, [])

  const refreshCoursesData = () => {
    getAllCourses()
      .then(res => setCourses(res.data))
  }
  return (
    <main className='mt-10'>
      <div className='container'>
        <AdminTitle title="دوره ها" />
        <div className='bg-darker mt-8 px-5 py-10 pb-5 mb-10 rounded-lg'>
          <div className='sm:flex justify-between items-center pb-12 border-b border-gray-500'>
            <input
              type='text'
              placeholder='جستجو ...'
              className='border-gray-500 border outline-0 py-1.5 px-4 rounded-sm focus:border-white'
            />
            <Link to="/p-admin/add-product" className='w-38 mt-5 sm:mt-0'>
              <SeconderyButton
                icon='Plus'
                text='افزوردن دوره'
              />
            </Link>
          </div>

          <table className='w-full border-spacing-y-4 mt-8 text-right  border-collapse'>
            <thead>
              <tr className='border-b border-gray-500 pb-10 text-center'>
                <th className='w-15/60 font-Vazirmatn-Bold text-right py-6'>اسم</th>
                <th className='hidden sm:table-cell w-9/60 font-Vazirmatn-Bold text-right'>مبلغ</th>
                <th className='hidden xl:table-cell w-6/60 font-Vazirmatn-Bold text-right'>وضعیت</th>
                <th className='hidden xl:table-cell w-10/60 font-Vazirmatn-Bold text-right'>مدرس</th>
                <th className='hidden xl:table-cell w-9/60 font-Vazirmatn-Bold text-right'>دسته بندی</th>
                <th className='hidden sm:table-cell w-11/10 font-Vazirmatn-Bold text-right'>عملیات</th>
              </tr>
            </thead>
            <tbody>
              {courses?.map(course => {
                return (
                  <tr
                    key={course._id}
                    className='bg-darker text-sm rounded-md border-b border-gray-500 last:border-none'
                  >
                    <td className='py-6 flex gap-5 items-center'>
                      <p className=''>{course.name}</p>
                    </td>

                    <td className='hidden sm:table-cell'>
                      <p className='text-lg'>{course.price.toLocaleString()}</p>
                    </td>

                    <td className='hidden lg:table-cell py-4 text-green-500'>
                      <span className='bg-green-500/10 py-1 px-4 rounded-sm'>فعال</span>
                    </td>

                    <td className='hidden sm:table-cell'>
                      <p className=''>{course.creator}</p>
                    </td>

                    <td className='hidden sm:table-cell'>
                      <p className=''>{course.categoryID.title}</p>
                    </td>

                    <td className='block sm:table-cell py-4'>
                      <div className='flex gap-5'>
                        <AdminButton text="ویرایش" danger={false} />
                        <AdminButton
                          onClick={() => {
                            setIsShowDialogAlert(true)
                            setCourseID(course._id)
                          }} text="حذف" danger={true} />
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <AlertDialog isShowAlert={isShowDialogAlert} alertDialogResponse={alertDialogResponse} />
      <PrimaryAlert danger={alertDanger} text={alertText} trigger={alertTrigger} />
      {/*  />

      {isShowAddUser ?
        <Cover onClick={() => {
          setIsShowCover(false)
          setIsShowAddUser(false)
        }} coverStatus={isShowCover} />
        :
        <Cover coverStatus={isShowCover} />}


      <AddNewItem
        isShowAddUser={isShowAddUser}
        title='اضافه کردن دسته بندی جدید'
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <AddNewItemInput
          placeHolder='اسم دسته بندی'
          {...register('title', {
            required: 'اسم دسته بندی الزامی است',
            minLength: {
              value: 3,
              message: 'حداقل باید ۳ کاراکتر باشد',
            },
          })}
        />

        <AddNewItemInput
          placeHolder='اسم کوتاه دسته بندی'
          {...register('name', {
            required: 'اسم کوتاه الزامی است',
          })}
        />
      </AddNewItem>

      <AddNewUser /> */}
    </main>

  )
}

export default AdminProducts