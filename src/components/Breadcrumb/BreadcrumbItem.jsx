import { Link } from "react-router-dom"
import icons from "../../Icons"

const BreadcrumbItem = ({text}) => {
  return (
    <div className="relative flex items-center first:mr-0 justify-center">
        <icons.Left className="text-7xl text-gray-100 dark:text-gray-900 -right-3 w-fit absolute"/>
        <Link className="text-nowrap mr-15">{text}</Link>
    </div>
  )
}

export default BreadcrumbItem