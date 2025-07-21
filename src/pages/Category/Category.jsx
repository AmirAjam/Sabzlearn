import Header from "../../components/Header/Header"
import Input from "../../components/Ui/Input/Input"

import CategoryTitle from "../../components/Ui/Titles/CategoryTitle"
import CountCategoryTitle from "../../components/Ui/Titles/CountCategoryTitle"
import CourseItem from "../../components/CoursesSection/CourseItem"
import MobileCategoryFilter from "./CategoryFilter/MobileCategoryFilter"
import icons from "../../Icons"
import { useRef, useState } from "react"
import MobileCategorySort from "./CategorySort/MobileCategorySort"
import CategoryFilterItem from "./CategoryFilter/CategoryFilterItem"
import DesktopCategorySort from "./CategorySort/DesktopCategorySort"
import Footer from "../../components/Footer/Footer"


const Category = () => {

  const [sortTitle, setSortTitle] = useState("همه دوره ها")

  const [isOpenFilter, setIsOpenFilter] = useState(false)
  const changeFilterStatus = () => {
    setIsOpenFilter(prev => !prev)
  }

  const [isSortShow, setIsSortShow] = useState(false)
  const changeSortStatus = () => {
    setIsSortShow(prev => !prev)
  }

  const [sortCourse, setSortCourse] = useState("All")

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
                  <CourseItem />
                  <CourseItem />
                  <CourseItem />
                  <CourseItem />
                  <CourseItem />
                  <CourseItem />
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