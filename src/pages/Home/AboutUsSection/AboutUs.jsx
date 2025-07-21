import FirstSectionTitle from '../../../components/Ui/Titles/FirstSectionTitle';
import PrimarySectiontitle from '../../../components/Ui/Titles/PrimarySectiontitle';
import AboutUsItem from './AboutUsItem'

const AboutUs = () => {
    return (
        <section className='py-8'>
            <div className='container'>
                <FirstSectionTitle>مــا چه کمکی میتونیم بهت بکنیم</FirstSectionTitle>
                <PrimarySectiontitle>از شروع مسیر کنارتیم نمیذاریم آب تو دلت تکون بخوره</PrimarySectiontitle>
                <div className='py-5 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-8'>
                    <AboutUsItem color="#0a97d4"/>
                    <AboutUsItem />
                    <AboutUsItem />
                    <AboutUsItem />
                </div>
            </div>
        </section>
    )
}

export default AboutUs