import Header from "../../components/Header/Header"
import Input from "../../components/Ui/Input/Input"

import CategoryTitle from "../../components/Ui/Titles/CategoryTitle"
import CountCategoryTitle from "../../components/Ui/Titles/CountCategoryTitle"
import CourseItem from "../../components/CoursesSection/CourseItem"
import MobileCategoryFilter from "./CategoryFilter/MobileCategoryFilter"
import icons from "../../Icons"
import { Suspense, useEffect, useRef, useState } from "react"
import MobileCategorySort from "./CategorySort/MobileCategorySort"
import CategoryFilterItem from "./CategoryFilter/CategoryFilterItem"
import DesktopCategorySort from "./CategorySort/DesktopCategorySort"
import Footer from "../../components/Footer/Footer"
import SeconderyButton from "../../components/Ui/Buttons/SeconderyButton"


const Category = () => {
  const courses = [
    {
      id: 2,
      name: "آموزش ساخت ربات تلگرام با پایتون",
      desc: "یادگیری ساخت ربات تلگرامی از صفر تا پروژه عملی با استفاده از Python",
      teacher: "مهرشاد براتی",
      price: 1600000,
      off: 10,
      finalPrice: 1440000,
      slug: "telegram-bot-python",
      studentsCount: 850
    },
    {
      id: 3,
      name: "آموزش جامع لینوکس برای برنامه نویسان",
      desc: "آموزش لینوکس برای توسعه‌دهندگان، مناسب برای استفاده در سرور و امنیت",
      teacher: "مهدی شریفی",
      price: 1900000,
      off: 20,
      finalPrice: 1520000,
      slug: "linux",
      studentsCount: 620
    },
    {
      id: 4,
      name: "آموزش توسعه وردپرس (جامع)",
      desc: "طراحی سایت با وردپرس، از قالب‌سازی تا افزونه‌نویسی پیشرفته",
      teacher: "امیر طاهرخانی",
      price: 5000000,
      off: 50,
      finalPrice: 2500000,
      slug: "wordpress",
      studentsCount: 910
    },
    {
      id: 5,
      name: "آموزش کاربردی Bash Script",
      desc: "اسکریپت‌نویسی و اتوماسیون کارها با Bash برای توسعه‌دهندگان",
      teacher: "مهدی شریفی",
      price: 250000,
      off: 0,
      finalPrice: 250000,
      slug: "bash-script",
      studentsCount: 400
    },
    {
      id: 6,
      name: "آموزش جامع زبان انگلیسی ویژه برنامه‌نویسان",
      desc: "زبان انگلیسی کاربردی برای توسعه‌دهندگان، مناسب جهت یادگیری مستمر در مسیر برنامه‌نویسی",
      teacher: "بهادر عرب",
      price: 11000000,
      off: 0,
      finalPrice: 11000000,
      slug: "english-for-developers",
      studentsCount: 730
    },
    {
      id: 7,
      name: "تکنیک‌های قرارداد نویسی برای برنامه نویسان",
      desc: "مهارت‌های تنظیم قرارداد حرفه‌ای برای فریلنسرها و برنامه‌نویسان",
      teacher: "محمدامین سعیدی راد",
      price: 800000,
      off: 10,
      finalPrice: 720000,
      slug: "developer-contracts",
      studentsCount: 520
    },
    {
      id: 8,
      name: "بازی سازی تحت وب با JS",
      desc: "ساخت بازی‌های وب با HTML، CSS و JavaScript به‌صورت پروژه‌محور",
      teacher: "مهرشاد براتی",
      price: 1200000,
      off: 70,
      finalPrice: 360000,
      slug: "web-game-js",
      studentsCount: 670
    },
    {
      id: 9,
      name: "آموزش کاربردی ESLint",
      desc: "پیکربندی و استفاده از ESLint برای نوشتن کدهای JS تمیز و بدون خطا",
      teacher: "محمدامین سعیدی راد",
      price: 200000,
      off: 0,
      finalPrice: 200000,
      slug: "eslint",
      studentsCount: 320
    },
    {
      id: 10,
      name: "آموزش انیمیشن‌سازی فرانت‌اند با GSAP و Three.js",
      desc: "ساخت انیمیشن‌های سه‌بعدی و جذاب برای وب با GSAP و Three.js",
      teacher: "مهرشاد براتی",
      price: 1400000,
      off: 70,
      finalPrice: 420000,
      slug: "gsap-threejs",
      studentsCount: 510
    },
    {
      id: 11,
      name: "نمایش نقشه‌های تعاملی با Leaflet.js",
      desc: "پیاده‌سازی نقشه تعاملی با کتابخانه Leaflet.js به‌صورت پروژه‌محور",
      teacher: "مهرشاد براتی",
      price: 900000,
      off: 70,
      finalPrice: 270000,
      slug: "leaflet-js",
      studentsCount: 430
    },
    {
      id: 12,
      name: "آموزش جامع دیزاین‌پترن‌ها برای برنامه‌نویسان",
      desc: "آشنایی با الگوهای طراحی جهت نوشتن کدهایی مقیاس‌پذیر و قابل‌نگهداری",
      teacher: "محمدامین سعیدی راد",
      price: 1200000,
      off: 70,
      finalPrice: 360000,
      slug: "design-patterns",
      studentsCount: 760
    },
    {
      id: 13,
      name: "آموزش جامع PHP از صفر + پروژه‌محور",
      desc: "دوره PHP کامل با پروژه‌های کاربردی برای ورود به بازار کار",
      teacher: "معین باغشیخی",
      price: 5000000,
      off: 70,
      finalPrice: 1500000,
      slug: "php",
      studentsCount: 890
    }
  ];

  const [sortTitle, setSortTitle] = useState("همه دوره ها")

  const [isOpenFilter, setIsOpenFilter] = useState(false)
  const changeFilterStatus = () => {
    setIsOpenFilter(prev => !prev)
  }

  const [isSortShow, setIsSortShow] = useState(false)
  const changeSortStatus = () => {
    setIsSortShow(prev => !prev)
  }

  const [countCourse, setCountCourse] = useState(6)
  const [showCourse, setShowCourse] = useState(courses.slice(0, countCourse))

  const loadMoreCourse = () => {
    setTimeout(() => {
      setCountCourse(prev => prev + 6)
    }, 5000);
  }

  useEffect(() => {
    setShowCourse(courses.slice(0, countCourse))
  }, [countCourse])

  const Loading = () => {
    return <h2>🌀 Loading...</h2>;
  }
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container">
            <div className="sm:flex justify-between items-center sm:mt-10">
              <CategoryTitle title="دوره های فرانت اند" />
              <CountCategoryTitle count="29" />
            </div>

            <div className="lg:hidden">
              <Input />
              <div className='mt-5 flex gap-5 lg:hidden'>

                <div onClick={changeFilterStatus} className="bg-white dark:bg-darker flex w-full items-center gap-3 justify-center py-3 rounded-lg">
                  <icons.Funnel className="text-xl" />
                  <span>فیلتر</span>
                </div>

                <div onClick={changeSortStatus} className="bg-white dark:bg-darker flex w-full items-center gap-3 justify-center py-3 rounded-lg">
                  <icons.Sort className="text-xl" />
                  <span>{sortTitle}</span>
                </div>
              </div>

            </div>

            <div className="lg:flex justify-between gap-10">
              <div className="lg:block hidden w-3/10 xl:w-2.5/10">
                <Input />
                <div className="mt-5">
                  <CategoryFilterItem text="فقط دوره های رایگان" />
                  <CategoryFilterItem text="در حال پیش فروش" />
                  <CategoryFilterItem text="دوره ها خریداری شده" />
                </div>
              </div>
              <div className="lg:w-7/10 xl:w-7.5/10 mb-16">
                <DesktopCategorySort
                  setSortTitle={setSortTitle} sortTitle={sortTitle} />
                <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 ">
                  <Suspense fallback={<Loading />}>
                    {showCourse.map(course => <CourseItem course={course} key={course.id} />)}
                  </Suspense>
                </div>
                <div className="w-42 mx-auto mt-8" onClick={loadMoreCourse}>
                  <SeconderyButton text="مشاهده بیشتر" icon="ArrowDown" />
                </div>
              </div>
            </div>

            <MobileCategorySort
              isSortShow={isSortShow}
              closeSort={changeSortStatus}
              setSortTitle={setSortTitle}
              sortTitle={sortTitle} />

            <MobileCategoryFilter isOpenFilter={isOpenFilter} closeFilter={changeFilterStatus} />
          </div>
        </section>
      </main >
      <Footer />
    </>
  )
}

export default Category