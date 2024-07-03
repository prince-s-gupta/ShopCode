import React, { useState } from 'react'
import MainLayout from './MainLayout'

const Products = () => {
    const [products, setProducts] = useState([
        {
            title: 'Cotton Plaid Shirt',
            price: 1500,
            discount: 10,
            thumbnail: "/product/a (1).jpg"
        },
        {
            title: 'Linen Button-Up Shirt',
            price: 1800,
            discount: 15,
            thumbnail: "/product/a (2).jpg"
        },
        {
            title: 'Striped Oxford Shirt',
            price: 2000,
            discount: 5,
            thumbnail: "/product/a (3).jpg"

        },
        {
            title: 'Denim Shirt',
            price: 2200,
            discount: 2,
            thumbnail: "/product/a (4).jpg"
        },
        {
            title: 'Flannel Checkered Shirt',
            price: 1700,
            discount: 20,
            thumbnail: "/product/a (5).jpg"
        },
        {
            title: 'Printed Hawaiian Shirt',
            price: 1900,
            discount: 10,
            thumbnail: "/product/a (6).jpg"
        },
        {
            title: 'Silk Blend Dress Shirt',
            price: 2500,
            discount: 8,
            thumbnail: "/product/a (7).jpg"
        },
        {
            title: 'Casual Chambray Shirt',
            price: 1600,
            discount: 12,
            thumbnail: "/product/a (8).jpg"
        },
        {
            title: 'Polo T-Shirt',
            price: 1200,
            discount: 15,
            thumbnail: "/product/a (9).jpg"
        },
        {
            title: 'Slim Fit Check Shirt',
            price: 2100,
            discount: 10,
            thumbnail: "/product/a (10).jpg"
        },
        {
            title: 'Button-Down Oxford Shirt',
            price: 2300,
            discount: 5,
            thumbnail: "/product/a (11).jpg"
        }
    ]);

    return (
        <MainLayout>
            <div>
                <div className='md:p-16 p-8'>
                    <h1 className='text-3xl font-bold text-center mb-2'>All Products</h1>
                    <p className='text-center text-gray-600 mb-10'>Discover our exclusive collection of men's shirts, featuring everything from classic plaids and versatile denim to luxurious silk blends and vibrant Hawaiian prints.</p>
                    <div className='md:w-10/12 mx-auto grid md:grid-cols-4 gap-8'>
                        {
                            products.map((item, index) => (
                                <div key={index} className='shadow-lg'>
                                    <img src={item.thumbnail} alt={item.title} className='w-full' />
                                    <div className='p-4 bg-white rounded'>
                                        <h1 className='text-lg font-semibold'>{item.title}</h1>
                                        <div className='space-x-2'>
                                            <label className='font-semibold text-lg'>₹{item.price - (item.price * item.discount) / 100}</label>
                                            <del>₹{item.price}</del>
                                            <label className='text-gray-600'>({item.discount}%)</label>
                                        </div>
                                        <button className='bg-blue-600 py-2 w-full rounded text-white font-semibold mt-2'>Buy Now</button>
                                        <button className='bg-rose-500 py-2 w-full rounded text-white font-semibold mt-2'>
                                            <i className='ri-shopping-cart-line mr-2'></i> Add To Cart
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </MainLayout>
    )
}

export default Products