import React from 'react'
import MainLayout from './MainLayout'


const Profile = () => {
    return (
        <MainLayout>
            <div className='mx-auto shadow-lg bg-white md:my-16 p-8 border rounded-md md:w-7/12'>
                <div className='flex items-center gap-3'>
                    <i className='ri-user-line  text-4xl'></i>
                    <h1 className='text-3xl font-semibold'>Profile</h1>
                </div>
                <hr className='my-6' />

                <div className='w-24 h-24 mx-auto relative mb-6'>
                    <img src="/images/avt.avif" alt="" className='rounded-full h-24 w-24 mx-auto ' />
                    <input type="file" accept='image/*' className=' opacity-0 absolute top-0 left-0 w-full h-full' />
                </div>
                <form className='grid grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-lg font-semibold'>Fullname</label>
                        <input type="text" name='fullname' value="Test User" className='p-2 rounded border border-gray-300' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-lg font-semibold'>Email</label>
                        <input type="email" name='email' value="test@gmail.com" className='p-2 rounded border border-gray-300' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-lg font-semibold'>Mobile</label>
                        <input type="tel" name='mobile' value="0123456789" className='p-2 rounded border border-gray-300' />
                    </div>
                    <div></div>
                    <div className='flex flex-col gap-2 col-span-2'>
                        <label className='text-lg font-semibold'>Area/Street/Village</label>
                        <input type="text" name='address' value="Gandhinagar" className='p-2 rounded border border-gray-300' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-lg font-semibold'>City</label>
                        <input type="text" name='city' value="Aburoad" className='p-2 rounded border border-gray-300' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-lg font-semibold'>State</label>
                        <input type="text" name='state' value="Rajasthan" className='p-2 rounded border border-gray-300' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-lg font-semibold'>Country</label>
                        <input type="text" name='country' value="India" className='p-2 rounded border border-gray-300' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-lg font-semibold'>PinCode</label>
                        <input type="tel" name='pincode' value="307026" className='p-2 rounded border border-gray-300' />
                    </div>
                    <button className='px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded w-fit'>
                        <i className='ri-save-line mr-2'></i>
                        Save
                    </button>
                </form>
            </div>
        </MainLayout>
    )
}

export default Profile