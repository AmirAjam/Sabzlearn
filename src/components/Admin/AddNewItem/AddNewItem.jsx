import PrimaryButton from "@/components/Ui/Buttons/PrimaryButton"

const AddNewItem = ({ isShowAddUser, close, title, onSubmit, children }) => {
  return (
    <div className={`fixed p-5 w-84 bg-darker inset-y-0 z-40 duration-200 ${isShowAddUser ? "left-0" : "-left-96"}`}>
      <h3 className='text-lg font-Vazirmatn-Bold'>{title}</h3>
      <form className='mt-8' onSubmit={onSubmit}>
        {children}
        <div className='mt-16'>
          <PrimaryButton submit={true} text="تایید"></PrimaryButton>
        </div>
      </form>
    </div>
  )
}

export default AddNewItem
