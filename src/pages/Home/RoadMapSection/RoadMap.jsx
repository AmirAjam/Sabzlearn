import React from 'react'
import RoadMapItem from './RoadMapItem'
import FirstSectionTitle from '../../../components/Ui/Titles/FirstSectionTitle';
import PrimarySectiontitle from '../../../components/Ui/Titles/PrimarySectiontitle';
import icons from '../../../icons'


const RoadMap = () => {
    return (
        <section className='py-8'>
            <div className="container">
                <FirstSectionTitle>نقشــه راه ها</FirstSectionTitle>
                <PrimarySectiontitle>نقشه های راه برای شروع اصولی یادگیری</PrimarySectiontitle>
                <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-10 text-white mt-6 lg:mt-10'>
                    <RoadMapItem
                        icon={<icons.Code className='text-5xl' />}
                        name="فرانت اند"
                        firstColor="#FFB535"
                        secondColor="#F2295B"
                        count="30" />
                    <RoadMapItem
                        icon={<icons.Secure className='text-5xl' />}
                        name="امنیت"
                        firstColor="#30C5E4"
                        secondColor="#28E55D"
                        count="9" />
                    <RoadMapItem
                        icon={<icons.Python className='text-5xl' />}
                        name="پایتون"
                        firstColor="#2E9EFF"
                        secondColor="#9C33F7"
                        count="7" />
                    <RoadMapItem
                        icon={<icons.Puzzle className='text-5xl' />}
                        name="مهارت های نرم"
                        firstColor="#FF3571"
                        secondColor="#880175"
                        count="6" />
                </div>
            </div>
        </section>
    )
}

export default RoadMap