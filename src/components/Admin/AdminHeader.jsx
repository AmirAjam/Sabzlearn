import icons from "../../Icons"

const AdminHeader = ({openMobileNav}) => {
  return (
    <header className='mt-5'>
      <div className='bg-darker py-4 px-4 rounded-lg flex items-center justify-between md:px-5'>
        <div className='flex gap-5 items-center'>
          <icons.Menu className='text-2xl lg:hidden' onClick={openMobileNav}/>
          <icons.Search className='text-2xl' />
          <span className='hidden sm:block'>جستجو(/+Ctrl)</span>
        </div>
        <div className='flex gap-5 items-center'>
          <div>
            <icons.Sunny className='text-2xl' />
            <icons.Moon className='text-xl hidden' />
          </div>
          <div className='relative'>
            <span className='absolute rounded-full bg-red-500 text-white size-4 flex 
              justify-center items-center text-xs bottom-3.5 left-3'>۵</span>
            <icons.Notification className='text-3xl' />
          </div>
          <div className='size-10 rounded-full overflow-hidden'>
            <img src="../public/images/user/user.jpg" alt="" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default AdminHeader