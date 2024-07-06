import React, { useState } from 'react'
import Layout from './Layout'

const Orders = () => {

    const [orders, setOrders] = useState([
        {
            orderID: '#rty4568',
            customerName: 'Er Saurav',
            email: 'dummy@gmail.com',
            mobile: '0123456789',
            products: 'lenovo ideapad 360',
            amount: 52000,
            date: '12-10-2024 10:15:24 Am',
            status: 'pending'
        },
        {
            orderID: '#rty4568',
            customerName: 'Er Saurav',
            email: 'dummy@gmail.com',
            mobile: '0123456789',
            products: 'lenovo ideapad 360',
            amount: 52000,
            date: '12-10-2024 10:15:24 Am',
            status: 'pending'
        }
    ])
    return (
        <Layout>
            <div>
                <h1 className='text-xl font-semibold'>Orders</h1>
                <div className='mt-6'>
                    <table className='w-full'>
                        <thead className='bg-rose-600 text-white'>
                            <tr>
                                <th className='py-4'>Order Id</th>
                                <th>Customer Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                orders.map((item, index) => (
                                    <tr
                                        className='text-center border-b border-gray-400'
                                        key={index}
                                        style={{
                                            background: (index + 1) % 2 === 0 ? '#e2e8f0' : 'white'
                                        }}
                                    >
                                        <td className='py-4'>{item.orderID}</td>
                                        <td className='capitalize'>{item.customerName}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td className='capitalize'>{item.products}</td>
                                        <td>₹{item.amount.toLocaleString()}</td>
                                        <td>{item.date}</td>
                                        <td className='capitalize'>
                                            <select className='border border-gray-200 p-1'>
                                                <option value="pending">Pending</option>
                                                <option value="processing">Processing</option>
                                                <option value="dispatched">Dispatched</option>
                                                <option value="returned">Returned</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}

export default Orders