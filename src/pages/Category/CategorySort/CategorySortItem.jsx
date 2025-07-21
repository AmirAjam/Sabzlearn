import icons from "../../../Icons"

const CategorySortItem = ({ sortTitle, closeSort, changeSortTitle, name, text }) => {

  const ItemClickHandler = () => {
    if (closeSort) {
      closeSort()
    }

    changeSortTitle(text)
  }

  return (
    <div onClick={ItemClickHandler} name={name} className={`py-6 flex justify-between items-center border-b font-Vazirmatn-Bold
     border-gray-300/80 dark:border-gray-700 ${sortTitle === text ? "text-primary lg:text-sky-500 lg:border-y-2! lg:border-sky-500!" : ""} 
      lg:border-0 lg:text-sm cursor-pointer lg:px-px`}>
      <p>{text}</p>
      {sortTitle === text &&
        <icons.Tick className="text-xl lg:hidden" />
      }
    </div>
  )
}

export default CategorySortItem