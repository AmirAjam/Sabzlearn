import { Link } from "react-router-dom"
import SocialMedias from "./SocialMedias/SocialMedias"

const Footer = () => {
    return (
        <footer className='bg-white dark:bg-darker py-5'>
            <div className="container">
                <div className="flex justify-between items-center border-b border-neutral-200 dark:border-dark pb-5">
                    <Link>
                        <img src="public/images/logo/footer-logo.png" alt="" className="h-10" />
                    </Link>
                    <SocialMedias />
                </div>
                <div className="mt-5 lg:flex justify-between">
                    <div>
                        <h3 className="font-Vazirmatn-Bold sm:text-xl">درباره سبزلرن</h3>
                        <p className="text-dark dark:text-neutral-300 lg:max-w-120 mt-5 text-justify">شروع هرچیزی سخته، ولی وقتی مسیر درستی رو انتخاب کنی،با خیال راحت و بدون استرس میتونی از مسیر لذت ببری. ما در سبزلرن، توی سفر به دنیای برنامه نویسی کنارت هستیم تا باهم رشد کنیم و از نتیجه زحمات مون لذت ببریم.</p>
                    </div>
                    <div className="mt-8 flex justify-evenly gap-5 lg:gap-28">
                        <div>
                            <h3 className="font-Vazirmatn-Bold sm:text-xl">دوره های پرطرفدار</h3>
                            <ul className="text-gray-700 dark:text-gray-400 py-2">
                                <li className="text-sm py-1.5"><Link>آموزش پایتون</Link></li>
                                <li className="text-sm py-1.5"><Link>دوره طراحی قالب حرفه ای</Link></li>
                                <li className="text-sm py-1.5"><Link>آموزش پایتون</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-Vazirmatn-Bold sm:text-xl">دسترسی سریع</h3>
                            <ul className="text-gray-700 dark:text-gray-400 py-2">
                                <li className="text-sm py-1.5"><Link>قوانین و مقررات</Link></li>
                                <li className="text-sm py-1.5"><Link>ارسال تیکت</Link></li>
                                <li className="text-sm py-1.5"><Link>آموزش پایتون</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <p className="mt-8 text-center">ساخته شده با ❤️</p>
            </div>
        </footer>
    )
}

export default Footer