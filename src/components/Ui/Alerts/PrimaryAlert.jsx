import { useState } from "react"
import icons from "../../../icons"

const PrimaryAlert = ({ danger, text }) => {
    const [showAlert, setShowAlert] = useState(true)
    // setTimeout(() => {
    //     setShowAlert(false)
    // }, 5000);
    return (
        <div className={`fixed bg-darker top-5 -translate-x-1/2 flex gap-4 items-center py-3 px-5 w-82 group
            duration-300 rounded-lg ${danger ? "danger" : ""} ${showAlert ? "left-1/2 sm:left-52" : "-left-52"} `}>
            <div>
                <div></div>
                <icons.Close2 className="hidden bg-red-500 group-[.danger]:block text-4xl rounded-full p-1.5
                 dark:text-darker text-white" />

                <icons.Tick2 className="bg-green-700 group-[.danger]:hidden text-4xl rounded-full p-1.5
                 dark:text-darker text-white " />
            </div>
            <div>
                <h3 className="text-lg font-Vazirmatn-Bold">{`${danger ? "خطا" : "موفقیت"}`}</h3>
                <p className="mt-2">{text}</p>
            </div>
            <span className="bottom-0 bg-green-700 group-[.danger]:bg-red-500 absolute h-1 inset-x-0 rounded-lg"></span>
        </div>
    )
}

export default PrimaryAlert