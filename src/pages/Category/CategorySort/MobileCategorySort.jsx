import React, { useState } from 'react'
import CategorySortItem from './CategorySortItem'
import icons from '../../../Icons'
import Cover from '../../../components/Ui/Cover/Cover'

const MobileCategorySort = ({ sortTitle, isSortShow, closeSort, setSortTitle }) => {

    const changeSortTitle = (text) => {
        setSortTitle(text)
    }
    return (
        <>
            <div className={`fixed inset-x-0 bottom-0 h-1/2 bg-white dark:bg-darker rounded-t-xl z-50 
                ${isSortShow ? "" : "hidden"}`}>
                <div className='py-3 bg-gray-200/80 dark:bg-dark px-4 flex justify-between items-center 
                rounded-t-xl z-50'>
                    <h2 className='text-lg font-Vazirmatn-Bold '>مرتب سازی بر اساس</h2>
                    <icons.Close onClick={closeSort} className='text-2xl' />
                </div>
                <div className='px-4'>
                    <CategorySortItem sortTitle={sortTitle} closeSort={closeSort}
                        changeSortTitle={changeSortTitle} text="همه دوره ها" name="all" />

                    <CategorySortItem sortTitle={sortTitle} closeSort={closeSort}
                        changeSortTitle={changeSortTitle} text="ارزان ترین" name="all" />

                    <CategorySortItem sortTitle={sortTitle} closeSort={closeSort}
                        changeSortTitle={changeSortTitle} text="گران ترین" name="all" />

                </div>
            </div>
            <Cover onClick={closeSort} coverStatus={isSortShow} />
        </>
    )
}

export default MobileCategorySort