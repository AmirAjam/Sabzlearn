import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { useTheme } from "../../Contexts/ThemeContext"

import icons from "../../icons"
import DesktopMenu from "../../components/Menu/DesktopMenu"
import MobileMenu from "../../components/Menu/MobileMenu"
import Cover from "../../components/Ui/Cover/Cover"

import Courses from "../../components/CoursesSection/Courses"
import RoadMap from "./RoadMapSection/RoadMap"
import CourseSlider from "../../components/CoursesSection/CourseSlider"
import AboutUs from "./AboutUsSection/AboutUs"
import ArticleSection from "../../components/Articles/ArticleSection"
import Footer from "../../components/Footer/Footer"
import CartSection from "../../components/Header/CartSection/CartSection"
import PrimaryButton from "../../components/Ui/Buttons/PrimaryButton"
import AuthContext from "../../Contexts/AuthContext"
import { getPopularCourses, getPresellCourses } from "../../api/coursesApi"
import { getArticles } from "../../api/articlesApi"

const Home = () => {

  
  const authContext = useContext(AuthContext)
  
  
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCoverOpen, setIsCovertOpen] = useState(false)
  
  const changeMenuStatus = () => {
    setIsMenuOpen(prev => !prev)
    setIsCovertOpen(true)
  }
  
  const changeCartStatus = () => {
    setIsCartOpen(prev => !prev)
    setIsCovertOpen(true)
  }
  
  const coverClickHandler = () => {
    setIsMenuOpen(false)
    setIsCartOpen(false)
    setIsCovertOpen(false)
  }

  const [popularCourses, setPopularCourses] = useState(null)
  const [presellCourses, setPresellCourses] = useState(null)
  const [articles, setArticles] = useState(null)

  useEffect(() => {
    getPopularCourses()
    .then(res => setPopularCourses(res.data))

    getPresellCourses()
    .then(res => setPresellCourses(res.data))

    getArticles()
    .then(res => setArticles(res.data))
  }, [])
  const { toggleTheme } = useTheme();
  return (
    <>
      <header className="py-5 bg-[url(/public/images/header/hero-mobile.webp)] lg:bg-[url(/public/images/header/hero.webp)]
     text-white bg-no-repeat bg-cover bg-center lg:pb-10 mb-16">
        <div className="container">
          <nav className="flex justify-between items-center">
            <div className="md:hidden">{<icons.Menu className="text-2xl" onClick={changeMenuStatus} />}</div>
            <div className="w-16 md:w-full md:flex gap-6">
              <Link className="w-16 lg:w-18">
                <img src="public/images/logo/logo.png" alt="" />
              </Link>
              <DesktopMenu />
            </div>
            <div className="md:flex items-center gap-6">
              <icons.Sunny onClick={toggleTheme} className="text-2xl hidden md:dark:block cursor-pointer" />
              <icons.Moon onClick={toggleTheme} className="text-xl hidden md:block dark:hidden cursor-pointer" />
              <div className="relative">
                <icons.ShoppingBasket onClick={changeCartStatus} className="text-3xl cursor-pointer" />
                <CartSection isCartOpen={isCartOpen} />
              </div>
              {authContext.userInfo ?
                <icons.User className="text-2xl hidden md:block cursor-pointer" />
                :
                <Link to="/login" className="md:block hidden w-42 text-sm">
                  <PrimaryButton text="ورود یا ثبت نام" icon="User" />
                </Link>
              }

            </div>
          </nav>
          <h1 className="text-center text-lg font-Vazirmatn-Bold mt-14 md:text-4xl md:font-bold">سبزلرن، اولین گام برنامه‌نویس شدن</h1>
          <p className="text-sm mt-2.5 text-center md:text-xl md:mt-8 lg:mt-12">با آکادمی خصوصی سبزلرن، علم برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت کن</p>

          <div className="relative">
            <div className="flex justify-between bg-white  mt-5 md:mt-8 lg:mt-12 md:w-70/100 md:mx-auto p-2 lg:p-3 rounded-full pr-3 md:pr-8!">
              <input type="text" className="w-full outline-none border-none text-gray-800" placeholder="جستجو در بین دوره ها..." />
              <div className="bg-primary w-fit rounded-full p-2.5 cursor-pointer">
                <icons.Search className="text-xl lg:text-3xl" />
              </div>
            </div>
            <div className="absolute inset-x-0 top-24 bg-white  py-4 px-5 rounded-lg hidden">
              <div id="search-loader" className="mx-auto border border-primary w-fit p-2 rounded-full hidden">
                <icons.Refresh className="text-2xl text-primary animate-spin " />
              </div>
              <p id="search-message" className="text-center hidden">متاسفانه نتیجه ای با مشخصات مورد نظر شما پیدا نشد!</p>
              <ul id="search-wrapper" className="flex flex-col gap-5">
                <li className="text-sm ">
                  <Link className="flex items-center justify-between ">
                    <p>آموزش NPM برای جاوااسکریپت کارها</p>
                    <icons.ArrowLeft className="text-3xl rounded-2xl" />
                  </Link>
                </li>
                <li className="text-sm ">
                  <Link className="flex items-center justify-between ">
                    <p className="w-8/10">آموزش جاوا اسکریپت مقدماتی تا پیشرفته + مینی پروژه</p>
                    <icons.ArrowLeft className="text-3xl rounded-2xl" />
                  </Link>
                </li>
                <li className="text-sm ">
                  <Link className="flex items-center justify-between ">
                    <p className="w-8/10">آموزش جاوا اسکریپت مقدماتی تا پیشرفته + مینی پروژه</p>
                    <icons.ArrowLeft className="text-3xl rounded-2xl" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-evenly mt-10 gap-x-8 lg:mt-24">
            <div className="flex flex-col items-center font-Vazirmatn-Bold w-fit">
              <img src="public/images/header/clock-min.webp" alt="conversation" className="size-10 sm:size-16 lg:size-24" />
              <p className="mt-3 font-semibold text-lg sm:text-xl lg:text-2xl">1678</p>
              <p className="">ساعت آموزش</p>
            </div>
            <div className="flex flex-col items-center font-Vazirmatn-Bold w-fit">
              <img src="public/images/header/book-min.webp" alt="book" className="size-10 sm:size-16 lg:size-24" />
              <p className="mt-3 font-semibold text-lg sm:text-xl lg:text-2xl">74</p>
              <p className="">دوره آموزشی </p>
            </div>
            <div className="flex flex-col items-center font-Vazirmatn-Bold w-fit">
              <img src="public/images/header/conversation-min.webp" alt="conversation" className="size-10 sm:size-16 lg:size-24" />
              <p className="mt-3 font-semibold text-lg sm:text-xl lg:text-2xl">180902</p>
              <p className="">دانشجو</p>
            </div>
          </div>
        </div>

        <MobileMenu isMenuOpen={isMenuOpen} changeTheme={toggleTheme} />
      </header>

      <main>
        <Courses courses={popularCourses} />
        <RoadMap />
        <CourseSlider title="پرطرفدار ترین دوره ها" primaryTitle={"دوره های محبوب و پروژه محور سبزلرن"} courses={presellCourses} />
        <AboutUs />
        {/* <CourseSlider title="جدیدتریــن ها" primaryTitle={"دوره‌های جدید، فرصت‌های نو"} courses={courses.slice(5)} /> */}
        <ArticleSection articles={articles}/>
        <Cover onClick={coverClickHandler} coverStatus={isCoverOpen} />
      </main>
      <Footer />

    </>
  )
}

export default Home