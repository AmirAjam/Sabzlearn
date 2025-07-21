import CategoryFilterItem from './CategoryFilterItem'
import icons from '../../../Icons'
import PrimaryButton from '../../../components/Ui/Buttons/PrimaryButton'

const MobileCategoryFilter = ({isOpenFilter , closeFilter}) => {
    return (
        <div className={`bg-white dark:bg-darker fixed inset-0 ${!isOpenFilter && "hidden"}`}>
            <div className='bg-gray-200/80 dark:bg-dark py-4 px-6 flex justify-between items-center'>
                <div className='flex gap-3 items-center'>
                    <icons.Close className='text-2xl cursor-pointer' onClick={closeFilter}/>
                    <h3 onClick={() => isOpenFilter = false} className='text-xl font-Vazirmatn-Bold'>فیلترها</h3>
                </div>
                <div className='text-red-500/80 flex gap-2 items-center cursor-pointer'>
                    <span>حذف فیلتر ها</span>
                    <icons.Trash className='text-2xl' />
                </div>
            </div>
            <div className='mt-8 px-6'>
                <CategoryFilterItem text="فقط دوره های رایگان"/>
                <CategoryFilterItem text="در حال پیش فروش"/>
                <CategoryFilterItem text="دوره ها خریداری شده"/>
            </div>
            <div className='px-6 absolute bottom-6 inset-x-0'>
                <PrimaryButton text="اعمال فیلتر"/>
            </div>
        </div>
    )
}

export default MobileCategoryFilter