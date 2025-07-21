import icons from '../../../Icons'
import CategorySortItem from './CategorySortItem'

const DesktopCategorySort = ({ sortTitle, setSortTitle }) => {
    
    const changeSortTitle = (text) => {
        setSortTitle(text)
    }

    return (
        <div className='lg:flex hidden gap-3 items-center bg-white dark:bg-darker mt-5 rounded-lg px-5'>
            <div className='flex gap-2'>
                <icons.Sort className='text-2xl'/>
                <p className='font-Vazirmatn-Bold'>مرتب سازی بر اساس :</p>
            </div>
            <div className='flex gap-8'>
                <CategorySortItem sortTitle={sortTitle}
                    changeSortTitle={changeSortTitle} text="همه دوره ها" name="all" />

                <CategorySortItem sortTitle={sortTitle}
                    changeSortTitle={changeSortTitle} text="ارزان ترین" name="all" />

                <CategorySortItem sortTitle={sortTitle}
                    changeSortTitle={changeSortTitle} text="گران ترین" name="all" />
            </div>
        </div>
    )
}

export default DesktopCategorySort