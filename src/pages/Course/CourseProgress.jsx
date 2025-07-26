import icons from "../../Icons"

const CourseProgress = () => {
    return (
        <section className='mt-8'>
            <div className="container bg-white dark:bg-darker rounded-lg py-4">
                <div className="flex justify-between gap-3 items-center">
                    <div className="flex justify-center items-center flex-col sm:flex-row sm:justify-start sm:gap-5
                     sm:pr-5 bg-gray-100 dark:bg-dark w-1/2 rounded-lg py-3">
                        <icons.Users className="text-green-primary fill-primary text-4xl" />
                        <div>
                            <span className="font-Vazirmatn-Bold text-lg block">481</span>
                            <span className="text-gray-500">دانشجو</span>
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-col sm:flex-row sm:justify-start sm:gap-5
                    sm:pr-5 bg-gray-100 dark:bg-dark w-1/2 rounded-lg py-3">
                        <icons.FullStar className="text-amber-400 text-4xl" />
                        <div>
                            <span className="font-Vazirmatn-Bold text-lg block">5.0</span>
                            <span className="text-gray-500">رضایت</span>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="flex justify-between items-center">
                        <p>درصد تکمیل دوره</p>
                        <p>100 %</p>
                    </div>
                    <div className="w-full mt-3 bg-green-primary/30 dark:bg-green-primary/10 rounded-full flex justify-end">
                        <span className="bg-green-primary w-[90%] h-3 block rounded-full"></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CourseProgress