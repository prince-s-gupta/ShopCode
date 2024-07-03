import React from 'react'
import MainLayout from './MainLayout'


const Contact = () => {
    return (
        <MainLayout>
            <div className='bg-white shadow-lg md:w-6/12 mx-auto md:my-8'>
                <img src="/images/contact.jpg" alt="" />
                <div className='p-8'>
                    <form className='space-y-6'>
                        <div className='flex flex-col'>
                            <label className='mb-1 text-lg font-semibold'>Name</label>
                            <input type="text" autoComplete='off' name="fullname" placeholder='Enter Your Name' className='p-3 border border-gray-100 rounded' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='mb-1 text-lg font-semibold'>Email</label>
                            <input type="email" autoComplete='off' name="email" placeholder='Enter Your Email' className='p-3 border border-gray-100 rounded' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='mb-1 text-lg font-semibold'>Message</label>
                            <textarea type="text" autoComplete='off' name="message" placeholder='Enter Your Message Here' rows={4} className='p-3 border border-gray-100 rounded' />
                        </div>

                        <button className='py-3 px-8 bg-blue-600 hover:bg-rose-600 text-white font-semibold rounded-sm'>Get Quote</button>
                    </form>
                </div>
            </div>
        </MainLayout>
    )
}

export default Contact