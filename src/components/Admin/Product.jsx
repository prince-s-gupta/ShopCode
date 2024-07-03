import React, { useState } from 'react'
import Layout from './Layout'

const Product = () => {

    const [products, setProducts] = useState([
        {
            title: "Cotton Plaid Shirt",
            description: "A classic plaid shirt made from high-quality cotton, perfect for casual wear.",
            price: 1500,
            discount: 10,
            image: "/product/a (1).jpg"
        },
        {
            title: "Linen Button-Up Shirt",
            description: "A stylish and breathable linen shirt, ideal for warm weather.",
            price: 1800,
            discount: 15,
            image: "/product/a (2).jpg"
        },
        {
            title: "Striped Oxford Shirt",
            description: "A timeless Oxford shirt with a modern striped design, great for both work and play.",
            price: 2000,
            discount: 5,
            image: "/product/a (3).jpg"
        },
        {
            title: "Denim Shirt",
            description: "A rugged and versatile denim shirt that pairs well with any outfit.",
            price: 2200,
            discount: 2,
            image: "/product/a (4).jpg"
        },
        {
            title: "Flannel Checkered Shirt",
            description: "A warm and cozy flannel shirt with a classic checkered pattern, perfect for cooler days.",
            price: 1700,
            discount: 20,
            image: "/product/a (5).jpg"
        },
        {
            title: "Printed Hawaiian Shirt",
            description: "A vibrant and fun Hawaiian shirt, perfect for beach days and summer parties.",
            price: 1900,
            discount: 10,
            image: "/product/a (6).jpg"
        },
        {
            title: "Silk Blend Dress Shirt",
            description: "A luxurious silk blend dress shirt, offering a smooth and sophisticated look.",
            price: 2500,
            discount: 8,
            image: "/product/a (7).jpg"
        },
        {
            title: "Casual Chambray Shirt",
            description: "A comfortable and casual chambray shirt, great for everyday wear.",
            price: 1600,
            discount: 12,
            image: "/product/a (8).jpg"
        },
        {
            title: "Polo T-Shirt",
            description: "A classic polo T-shirt, versatile and perfect for any casual occasion.",
            price: 1200,
            discount: 15,
            image: "/product/a (9).jpg"
        },
        {
            title: "Slim Fit Check Shirt",
            description: "A modern slim fit shirt with a stylish check pattern, great for a sharp look.",
            price: 2300,
            discount: 5,
            image: "/product/a (10).jpg"
        },
        {
            title: 'Button-Down Oxford Shirt',
            description: "A polished and professional Oxford shirt, essential for any wardrobe.",
            price: 2300,
            discount: 5,
            image: "/product/a (11).jpg"
        }
    ])

    return (
        <Layout>
            <div>
                <h1 className='md:text-xl text-2xl font-semibold mb-4 text-center md:text-left'>Products</h1>
                <div className='grid md:grid-cols-4 gap-6'>
                    {
                        products.map((product, index) => (
                            <div key={index} className='bg-white rounded-md shadow-lg'>
                                <img src={product.image} alt="" className='rounded-t-md w-full' />
                                <div className='p-4'>
                                    <h1 className='font-semibold text-md'>{product.title}</h1>
                                    <p className='text-gray-600'>{product.description.slice(0, 60)}...</p>
                                    <div className='flex gap-2 mt-1'>
                                        <label>₹{Math.floor(product.price - (product.price * product.discount) / 100)}</label>
                                        <del className='font-semibold'>₹{product.price}</del>
                                        <label className='text-gray-600'>({product.discount}% off)</label>
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
