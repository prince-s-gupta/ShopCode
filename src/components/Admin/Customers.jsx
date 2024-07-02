import React, { useState } from 'react'
import Layout from './Layout'

const Customers = () => {

    const [customers, setCustomers] = useState([
        {
            customerName: 'Er Saurav',
            email: 'dummy@gmail.com',
            mobile: '0123456789',
            date: '12-10-2024 10:15:24 Am',
            address: "Gujarat"
        },
    ])
    return (
        <Layout>
            <div>
                <h1 className='text-xl font-semibold'>Customers</h1>
                <div className='mt-6'>
                    <table className='w-full'>
                        <thead className='bg-rose-600 text-white text-left'>
                            <tr>
                                <th className='p-4'>Customer Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Date</th>
                                <th>Address</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                customers.map((item, index) => (
                                    <tr
                                        key={index}
                                        style={{
                                            background: (index + 1) % 2 === 0 ? '#e2e8f0' : 'white'
                                        }}
                                    >
                                        <td className='capitalize px-4 py-4'>
                                            <div className='flex items-center gap-3'>
                                                <img src="/images/avt.avif" className='w-10 h-10 rounded-full' alt="" />
                                                <div className='flex flex-col justify-center'>
                                                    <span className='font-semibold'>{item.customerName}</span>
                                                    <small className='text-gray-500'>{item.date}</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.date}</td>
                                        <td>{item.address}</td>
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

export default Customers