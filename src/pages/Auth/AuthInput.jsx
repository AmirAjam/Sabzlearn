import icons from "../../icons"


const AuthInput = ({placeHolder , icon}) => {
  const InputIcon = icons[icon]
  return (
    <div className="flex justify-between items-center bg-dark py-3 px-4 rounded-lg border group
      border-dark focus-within:border-gray-400 mt-5 first:mt-0"
    >
      <input type="text" placeholder={placeHolder} className="border-0 outline-0 w-full pl-5" />
      <InputIcon className="text-xl" />
    </div>
  )
}

export default AuthInput