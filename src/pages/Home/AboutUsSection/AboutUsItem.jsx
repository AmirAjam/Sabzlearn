import icons from "../../../icons"

const AboutUsItem = () => {
    return (
        <div className='bg-white dark:bg-darker rounded-lg p-5 lg:py-7'>

            <div className="flex flex-col justify-center lg:flex-row lg:justify-normal items-center gap-5 w-fit">
                <div className='flex justify-center lg:justify-end items-center w-[94px] h-13 lg:w-13 lg:h-[94px] mb-11 
            lg:mb-0 lg:ml-11 bg-sky-50 dark:bg-sky-600/20 rounded-full'>
                    <icons.Book className="size-13 text-sky-500 translate-y-1/2 lg:translate-y-0 lg:-translate-x-1/2" />
                </div>
                <div>
                    <h3 className="font-Vazirmatn-Bold text-lg mb-6 lg:mb-2 lg:text-xl text-center lg:text-right">تضمین کاملترین محتوا</h3>
                    <p className="dark:text-gray-400 text-sm text-center lg:text-right lg:text-base">بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUsItem