import icons from "../../../Icons"


const SeconderyButton = ({text,icon}) => {
    const BtnIcon = icons[icon]
    return (
        <button className='border-1 border-green-primary rounded-lg py-2.5 px-2 w-full cursor-pointer text-green-primary
            hover:bg-green-primary/20 duration-300 flex gap-3 items-center text-sm justify-center'>{text}
            {icon && <BtnIcon className="text-xl"/>}</button>
    )
}

export default SeconderyButton