import { Link } from "react-router-dom"
import BreadcrumbItem from './BreadcrumbItem'
import icons from "../../Icons"


const Breadcrumb = () => {
    return (
        <section>
            <div className='bg-white dark:bg-darker px-1 flex overflow-y-hidden overflow-x-scroll scrollbar-none py-2 rounded-lg'>
                <div className="relative flex items-center first:mr-0">
                    <Link className="text-nowrap text-3xl mb-px"><icons.Home /></Link>
                </div>
                <BreadcrumbItem text="دوره ها"/>
                <BreadcrumbItem text="پایتون"/>
                <BreadcrumbItem text="آموزش ساخت ربات تلگرام با پایتون"/>
            </div>
        </section>
    )
}

export default Breadcrumb