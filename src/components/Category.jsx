import React, { useState } from 'react'
import MainLayout from './MainLayout'

const Category = () => {
    const [category, setCategory] = useState([
        {
            title: "Electronics"
        },
        {
            title: "Fashion"
        },
        {
            title: "Home & Kitchen"
        },
        {
            title: "Men"
        },
        {
            title: "Women"
        }
    ])

    return (
        <MainLayout>
            <div className='md:p-16 p-8'>
                <div className='md:w-10/12 mx-auto grid md:grid-cols-4 md:gap-16 gap-8'>
                    {
                        category.map((item, index) => (
                            <div key={index} className='border rounded-lg hover:bg-rose-500 hover:text-white cursor-pointer bg-white shadow-lg flex flex-col justify-center items-center p-8'>
                                <i className='ri-menu-search-line text-4xl'></i>
                                <h1 className='text-xl font-bold text-center'>{item.title}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </MainLayout>
    )
}

export default Category