import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const Selectbox = ({ changeUserRole, userId, title, options, defaultValue }) => {
    const handleChange = (val) => {
        changeUserRole && changeUserRole(userId, val)

    }
    return (
        <Select dir="rtl" defaultValue={defaultValue} onValueChange={handleChange}>
            <SelectTrigger
                className="w-full border-gray-600 border-2 focus-visible:outline-none focus-visible:ring-0 
                focus-visible:ring-offset-0 focus-visible:border-gray-600 focus-visible:border-2 py-5 text-white
              bg-dark! cursor-pointer sm:text-base ">
                <SelectValue placeholder={title} />
            </SelectTrigger>
            <SelectContent className="bg-dark">
                {options.map(option =>
                    <SelectItem key={option._id} value={option.name} className="data-[highlighted]:bg-gray-600! cursor-pointer">
                        {option.title}
                    </SelectItem>)}
            </SelectContent>
        </Select>
    )
}

export default Selectbox