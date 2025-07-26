import FirstSectionTitle from "../Ui/Titles/FirstSectionTitle"
import PrimarySectiontitle from "../Ui/Titles/PrimarySectiontitle"
import AllCourse from "../Ui/Titles/AllItem"
import CourseItem from "./CourseItem"

const Courses = ({courses}) => {
    return (
        <section>
            <div className="container">
                <FirstSectionTitle>آخـــرین دوره های ما</FirstSectionTitle>
                <div className="sm:flex justify-between items-center">
                    <PrimarySectiontitle>سکوی پرتاپ شما به سمت موفقیت</PrimarySectiontitle>
                    <AllCourse title="دوره ها" />
                </div>
                <div className="py-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
                    {courses?.map(course => <CourseItem course={course} key={course._id}/>)}
                </div>
            </div>
        </section>

    )
}

export default Courses