import { useState } from "react"
import icons from "../../../icons"
import SubHeadLineItem from "./SubHeadLineItem"

const HeadlineItem = () => {
    const [isOpenHeadLine, setIsOpenHeadLine] = useState(false)
    return (
        <div onClick={() => setIsOpenHeadLine(prev => !prev)} className={`bg-gray-200/50 dark:bg-dark rounded-lg select-none 
            group mb-6 ${isOpenHeadLine ? "active" : ""}`}>
            <div className={`flex justify-between items-center py-4 px-4 bg-gray-200/50 dark:bg-dark cursor-pointer
                ${isOpenHeadLine ? "bg-green-primary! text-white cursor-auto rounded-t-lg" : "rounded-lg"}`}>
                <p>معرفی دوره</p>
                <icons.ArrowDown className="text-xl group-[.active]:rotate-180 duration-200" />
            </div>
            <div className="px-4">
                <div className={"my-2 hidden group-[.active]:block"}>
                    <SubHeadLineItem />
                    <SubHeadLineItem />
                    <SubHeadLineItem />
                    <SubHeadLineItem />
                    <SubHeadLineItem />
                </div>
            </div>
        </div>
    )
}

export default HeadlineItem