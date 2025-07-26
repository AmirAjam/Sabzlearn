import FirstSectionTitle from '../Ui/Titles/FirstSectionTitle';
import PrimarySectiontitle from '../Ui/Titles/PrimarySectiontitle';
import CourseItem from './CourseItem';
import icons from '../../icons';


// Swiper Components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const CourseSlider = ({ title, primaryTitle,courses }) => {
    return (
        <section className='py-8 select-none'>
            <div className="container relative">
                <FirstSectionTitle>{title}</FirstSectionTitle>
                <PrimarySectiontitle>{primaryTitle}</PrimarySectiontitle>
                <div className='mt-10'>
                    <Swiper
                        loop={true}

                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}


                        navigation={{
                            nextEl: "#left-slider",
                            prevEl: "#right-slider"
                        }}

                        className="mySwiper"

                        slidesPerView={1}
                        spaceBetween={10}

                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                        }}
                        modules={[Navigation,Autoplay]}
                    >
                        {courses?.map(course =><SwiperSlide>  <CourseItem course={course}/>  </SwiperSlide>)}

                    </Swiper>
                </div>
                <div className='flex mt-5 lg:mt-0 justify-center lg:absolute gap-5 lg:top-10 lg:left-5'>
                    <div id='right-slider' className='duration-200 text-green-primary hover:text-white hover:bg-green-primary border 
                    border-green-primary p-2 cursor-pointer rounded-full w-fit'>
                        <icons.ArrowRight className='text-4xl ' />
                    </div>
                    <div id='left-slider' className='duration-200 text-green-primary hover:text-white hover:bg-green-primary border 
                    border-green-primary p-2 cursor-pointer rounded-full w-fit'>
                        <icons.ArrowLeft className='text-4xl ' />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default CourseSlider