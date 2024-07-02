import React, { useState } from 'react'
import Layout from './Layout'

const Payments = () => {

    const [payments, setPayments] = useState([
        {
            paymentId: "#rty684",
            customerName: 'Er Saurav',
            email: 'dummy@gmail.com',
            mobile: '0123456789',
            product: "Lenovo Ideapad 360",
            amount: 5000,
            date: '12-10-2024 10:15:24 Am',
        },
    ])
    return (
        <Layout>
            <div>
                <h1 className='text-xl font-semibold'>Payments</h1>
                <div className='mt-6'>
                    <table className='w-full'>
                        <thead className='bg-rose-600 text-white'>
                            <tr>
                                <th className='p-4' >Payment Id</th>
                                <th>Customer Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                payments.map((item, index) => (
                                    <tr className='text-center'
                                        key={index}
                                        style={{
                                            background: (index + 1) % 2 === 0 ? '#e2e8f0' : 'white'
                                        }}
                                    >
                                        <td className='capitalize px-4 py-4'>{item.paymentId}</td>
                                        <td>{item.customerName}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.product}</td>
                                        <td>₹{item.amount.toLocaleString()}</td>
                                        <td>{item.date}</td>
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

export default Payments