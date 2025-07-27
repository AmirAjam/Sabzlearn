import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

const Selectbox = ({ changeUserRole,userId,title, options, defaultValue }) => {
    const handleChange = (val) => {
        changeUserRole(userId,val)
    }
    return (
        <Select dir="rtl" defaultValue={defaultValue} onValueChange={handleChange}>
            <SelectTrigger className="w-full
                        border-gray-600 border-2
                        focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0
                        focus-visible:border-gray-600 focus-visible:border-2 text-base py-5 text-white bg-dark! cursor-pointer">
                <SelectValue placeholder={title} />
            </SelectTrigger>
            <SelectContent className="bg-dark">
                {options.map(option =>
                    <SelectItem key={option.id} value={option.value} className="data-[highlighted]:bg-gray-600! cursor-pointer">
                        {option.text}
                    </SelectItem>)}
            </SelectContent>
        </Select>
    )
}

export default Selectbox