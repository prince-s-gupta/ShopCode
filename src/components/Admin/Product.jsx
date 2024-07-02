import React, { useState } from 'react'
import Layout from './Layout'

const Product = () => {

    const [products, setProducts] = useState([
        {
            title: "Men's Shirt Denim Blue",
            description: "A denim blue shirt for men's",
            price: 699,
            discount: 15,
            image: "/product/a (1).jpg"
        },
        {
            title: "Men's Shirt Denim Blue",
            description: "A denim blue shirt for men's",
            price: 699,
            discount: 15,
            image: "/product/a (2).jpg"
        },
        {
            title: "Men's Shirt Denim Blue",
            description: "A denim blue shirt for men's",
            price: 699,
            discount: 15,
            image: "/product/a (3).jpg"
        },
        {
            title: "Men's Shirt Denim Blue",
            description: "A denim blue shirt for men's",
            price: 699,
            discount: 15,
            image: "/product/a (4).jpg"
        },
        {
            title: "Men's Shirt Denim Blue",
            description: "A denim blue shirt for men's",
            price: 699,
            discount: 15,
            image: "/product/a (5).jpg"
        }, {
            title: "Men's Shirt Denim Blue",
            description: "A denim blue shirt for men's",
            price: 699,
            discount: 15,
            image: "/product/a (6).jpg"
        },
        {
            title: "Men's Shirt Denim Blue",
            description: "A denim blue shirt for men's",
            price: 699,
            discount: 15,
            image: "/product/a (7).jpg"
        },
        {
            title: "Men's Shirt Denim Blue",
            description: "A denim blue shirt for men's",
            price: 699,
            discount: 15,
            image: "/product/a (8).jpg"
        },
        {
            title: "Men's Shirt Denim Blue",
            description: "A denim blue shirt for men's",
            price: 699,
            discount: 15,
            image: "/product/a (10).jpg"
        },
        {
            title: "Men's Shirt Denim Blue",
            description: "A denim blue shirt for men's",
            price: 699,
            discount: 15,
            image: "/product/a (11).jpg"
        }
    ])


    return (
        <Layout>
            <div>
                <h1 className='text-xl font-semibold mb-4'>Products</h1>
                <div className='grid md:grid-cols-4 gap-6'>
                    {
                        products.map((product, index) => (
                            <div key={index} className='bg-white rounded-md shadow-lg'>
                                <img src={product.image} alt="" className='rounded-t-md w-full' />
                                <div className='p-4'>
                                    <h1 className='font-semibold text-md'>{product.title}</h1>
                                    <p className='text-gray-600'>{product.description.slice(0, 50)}</p>
                                    <div className='flex gap-2 mt-1'>
                                        <label>₹{Math.floor(product.price - (product.price * product.discount) / 100)}</label>
                                        <del className='font-semibold'>₹{product.price}</del>
                                        <label className='text-gray-600'>{product.discount}(% off)</label>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Product