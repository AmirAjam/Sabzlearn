import icons from "../../icons"


const AuthInput = () => {
  return (
    <div className="flex justify-between bg-dark py-3 px-4 rounded-lg ">
        <input type="text" placeholder='شماره موبایل' className="border-0 outline-0 w-full pl-5"/>
        <icons.Phone className="text-xl"/>
    </div>
  )
}

export default AuthInput