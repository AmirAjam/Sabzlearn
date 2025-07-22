import { Link } from 'react-router-dom'
import icons from '../../Icons'

const ArticleItem = () => {
  return (
    <div className='rounded-xl bg-white dark:bg-darker pb-2.5 shadow-sm h-full'>
      <Link className='rounded-xl overflow-hidden h-42 block'>
        <img src="/public/images/article/1.png" alt="" className='rounded-xl size-full object-cover' />
      </Link>
      <div className='px-4.5'>
        <Link className='mt-5 font-Vazirmatn-Bold line-clamp-2'>هوش مصنوعی، بلاکچین و برنامه‌نویسی؛ این سه تا چطور با هم</Link>
        <p className='mt-5 line-clamp-3 text-gray-700 dark:text-gray-400 text-sm'>
          مسیر یادگیری و پیشرفت در دنیای تخصصی برنامه‌نویسی و فناوری اطلاعات، مسیری هیجان‌انگیز اما پر از چالش است. سوالات...        </p>
        <div className='mt-7 flex justify-between items-center pb-4 border-b-1 border-b-neutral-200/70 
        dark:border-b-white/10 text-sm dark:text-gray-400'>
          <span className=''>معین باغشیخی</span>
          <span className=''>1404/04/20</span>
        </div>
      </div>
      <div className='py-3'>
        <Link className='flex gap-2 items-center justify-center mt-2.5 duration-200 hover:text-primary group'>
          <span className='mt-px'>مطالعه مقاله </span>
          <icons.LongArrowLeft className='bg-white group-hover:bg-primary duration-200 group-hover:text-white dark:text-darker 
            rounded-full p-0.5 text-lg group-hover:mr-2'/>
        </Link>
      </div>
    </div>
  )
}

export default ArticleItem