import { Link } from "react-router-dom"
import { useState } from "react"
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

const Home = () => {

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
              <Link to="/login" className="md:block hidden w-42 text-sm">
                <PrimaryButton text="ورود یا ثبت نام" icon="User" />
              </Link>
              <icons.User className="text-2xl hidden! md:block cursor-pointer " />
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
        <Courses courses={courses} />
        <RoadMap />
        <CourseSlider title="پرطرفدار ترین دوره ها" primaryTitle={"دوره های محبوب و پروژه محور سبزلرن"} courses={courses.slice(6)} />
        <AboutUs />
        <CourseSlider title="جدیدتریــن ها" primaryTitle={"دوره‌های جدید، فرصت‌های نو"} courses={courses.slice(5)} />
        <ArticleSection />
        <Cover onClick={coverClickHandler} coverStatus={isCoverOpen} />
      </main>
      <Footer />

    </>
  )
}

export default Home