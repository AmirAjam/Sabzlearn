import icons from "../../../Icons"
import ReplyCommentItem from "./ReplyCommentItem"


const CommentItem = () => {
    return (
        <div className='bg-gray-100 dark:bg-dark p-3 rounded-lg mt-5'>
            <div className="flex justify-between items-center border-b border-gray-300/80 dark:border-gray-600 pb-5">
                <div>
                    <div className='flex gap-2 text-center'>
                        <span className='font-extralight'>تارا حیدری</span>
                        <span className='block w-1 h-5 bg-white mt-px rounded-full'></span>
                        <span className='font-Vazirmatn-Bold'>کاربر</span>
                    </div>
                    <div>
                        <span className='text-gray-400 text-sm mt-3 block'>1403/12/30</span>
                    </div>
                </div>
                <button className="p-2.5 border border-sky-500 rounded-full cursor-pointer text-sky-500 
                    hover:bg-sky-500/10 duration-200">
                    <icons.Reply className="text-xl" />
                </button>
            </div>
            <p className="mt-5 text-sm/6 ">سلام خسته نباشید من اصلا js تاحالا کار نکردم ولی می خواستم کتاب clean code بخونم چون انگلیسی بود سخت برام الان این دوره برای منم مناسب ؟</p>
            <ReplyCommentItem />
        </div>
    )
}

export default CommentItem