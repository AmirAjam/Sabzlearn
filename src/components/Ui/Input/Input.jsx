import icons from "../../../Icons"

const Input = () => {
  return (
    
    <div className='bg-white dark:bg-darker shadow-xs mt-5 p-4 flex justify-between rounded-lg gap-3'>
      <input type="text" placeholder='جستجو بین دوره ها...'
        className='w-full outline-none border-none dark:text-white' />
        <icons.Search className="text-3xl cursor-pointer"/>
    </div>
  )
}

export default Input