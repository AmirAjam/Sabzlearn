import icons from "../../../Icons"

const CourseInfoItem = ({icon,text,desc}) => {
  const InfoIcon = icons[icon]
  return (
    <div className='bg-white dark:bg-darker flex flex-col lg:flex-row items-center justify-center py-3 
    rounded-lg lg:gap-3 lg:justify-start lg:pr-3'>
      <InfoIcon className="text-4xl text-primary" />
      <div className="">
        <span className="my-2 font-Vazirmatn-Bold text-lg block text-center lg:text-base lg:text-right lg:mb-1">{text}</span>
        <span className="text-gray-600 dark:text-gray-400 text-sm block text-center lg:text-right">{desc}</span>
      </div>
    </div>
  )
}

export default CourseInfoItem