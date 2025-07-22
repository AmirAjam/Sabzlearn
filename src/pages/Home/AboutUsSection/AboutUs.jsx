import FirstSectionTitle from '../../../components/Ui/Titles/FirstSectionTitle';
import PrimarySectiontitle from '../../../components/Ui/Titles/PrimarySectiontitle';
import icons from '../../../icons';
import AboutUsItem from './AboutUsItem'

const AboutUs = () => {
    return (
        <section className='py-8'>
            <div className='container'>
                <FirstSectionTitle>مــا چه کمکی میتونیم بهت بکنیم</FirstSectionTitle>
                <PrimarySectiontitle>از شروع مسیر کنارتیم نمیذاریم آب تو دلت تکون بخوره</PrimarySectiontitle>
                <div className='py-5 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-8'>
                    <AboutUsItem
                        icon="Book"
                        title="تضمین کاملترین محتوا"
                        desc="بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری."
                    />
                    <AboutUsItem
                        icon="Comment"
                        title="پشتیبانی دائمی"
                        desc="هرجا سوالی داشتی به مشکل خوردی بچه های تیم آمادن که مشکلت رو حل کنن تلاشمون اینه بدون نگرانی دوره رو کامل کنی."
                    />
                    <AboutUsItem
                        icon="Chart"
                        title="پروژه محور در راستای بازار کار"
                        desc="کل تمرکز ما رو این هستش بعداز تموم شدن دوره شخص بتونه با اعتماد به نفس کامل پروژه بزنه واقدام کنه برای کسب درآمد."
                    />
                    <AboutUsItem
                        icon="CheckList"
                        title="سراغ حرفه ای ها رفتیم"
                        desc="به جرعت میتونم بگم سخت گیرترین شرایط جذب مدرس داریم چون برامون مهمه محتوا خیلی ساده و روان بیان بشه که توی یادگیری به مشکل نخورید."
                    />
                </div>
            </div>
        </section>
    )
}

export default AboutUs