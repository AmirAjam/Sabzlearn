import React from 'react'
import ArticleItem from './ArticleItem'
import FirstSectionTitle from '../Ui/Titles/FirstSectionTitle'
import PrimarySectiontitle from '../Ui/Titles/PrimarySectiontitle'
import AllCourse from '../Ui/Titles/AllItem'

const ArticleSection = ({ articles }) => {
    return (
        <section className='py-8'>
            <div className="container">
                <div>
                    <FirstSectionTitle>آخـــرین مقالات ما</FirstSectionTitle>
                    <PrimarySectiontitle>مقاله های بروز برنامه نویسی و تکنولوژی</PrimarySectiontitle>
                    <AllCourse title="مقالات" />
                </div>
                <div className="py-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
                    {articles?.slice(3).map(article => <ArticleItem article={article} key={article._id}/>)}
                </div>
            </div>
        </section>
    )
}

export default ArticleSection