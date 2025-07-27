import icons from "../../../Icons"

const PrimaryButton = ({ disabled, text, icon ,submit , onClick}) => {
    const BtnIcon = icons[icon]
    return (
        <button onClick={onClick} type={`${submit ? "submit" : "button"}`} className={`bg-green-primary rounded-lg py-3 w-full cursor-pointer text-white
            hover:bg-green-700 duration-300 flex gap-2 items-center justify-center 
                ${disabled ? "opacity-50 cursor-no-drop! hover:bg-green-primary!" : ""}`}>
            {text}
            {BtnIcon && <BtnIcon className="text-xl" />}
        </button>
    )
}

export default PrimaryButton