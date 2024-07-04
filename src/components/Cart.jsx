import React, { useState } from 'react'
import MainLayout from './MainLayout'

const Cart = () => {
    const [products, setProducts] = useState([
        {
            title: "Samsung S23 Ultra",
            price: 140000,
            discount: 15,
            image: "/product/a (1).jpg"
        },
        {
            title: "Samsung S23 Ultra",
            price: 140000,
            discount: 15,
            image: "/product/a (1).jpg"
        }
    ])
    return (
        <MainLayout>
            <div className='mx-auto p-8 md:my-16 md:w-7/12 bg-white shadow rounded-md border'>
                <div className='flex items-center gap-4'>
                    <i className='ri-shopping-cart-line text-4xl'></i>
                    <h1 className='text-3xl font-semibold'>Cart</h1>
                </div>
                <hr className='my-6' />
                <div className='space-y-8'>
                    {
                        products.map((product, index) => (
                            <div key={index} className='flex gap-4'>
                                <img src={product.image} alt="" className='w-[100px] border-2 shadow' />
                                <div>
                                    <h1 className='font-semibold capitalize text-lg'>{product.title}</h1>
                                    <div className='flex flex-col gap-4'>
                                        <div className='space-x-3'>
                                            <label className='text-lg font-semibold'>₹{product.price - (product.price * product.discount) / 100}</label>
                                            <del>₹{product.price}</del>
                                            <label className='text-gray-500'>{product.discount} % off</label>
                                        </div>
                                        <button className='bg-rose-600 text-white px-4 py-2 rounded w-fit'>
                                            <i className='ri-delete-bin-line mr-2'></i>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <hr className='my-6' />
                <div className='flex items-center justify-between'>
                    <h1 className='font-semibold md:text-2xl text-xl'>Total : ₹57,000</h1>
                    <button className='bg-green-600 hover:bg-green-500 text-white md:px-12 px-8 py-3 font-semibold rounded w-fit'>
                        <i className='ri-shopping-bag-4-line mr-2'></i>
                        Buy Now
                    </button>
                </div>
            </div>
        </MainLayout>
    )
}

export default Cart