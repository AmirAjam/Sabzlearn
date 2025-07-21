import icons from "../../../Icons"


const SeconderyButton = ({text,icon}) => {
    const BtnIcon = icons[icon]
    return (
        <button className='border-1 border-primary rounded-lg py-3 px-4 w-full cursor-pointer text-primary
            hover:bg-primary/20 duration-300 flex gap-3 items-center text-sm'>{text}
            {icon && <BtnIcon className="text-xl"/>}</button>
    )
}

export default SeconderyButton