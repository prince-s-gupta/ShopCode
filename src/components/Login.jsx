import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
    const [passwordType, setPasswordType] = useState("password")
    return (
        <div className='grid md:grid-cols-2 md:h-screen md:overflow-hidden animate__animated animate__fadeIn'>
            <img src="/images/login.svg" alt="" className='md:w-full w-48 md:mx-0 mx-auto md:h-full h-48 object-contain' />
            <div className='flex flex-col mt-5 justify-center md:p-16 p-8'>
                <h1 className='text-4xl font-bold'>Sign In</h1>
                <p className='text-lg text-gray-600 mt-2'>Enter Credentials to Login</p>
                <form className='mt-8 space-y-6'>
                    <div className='flex flex-col'>
                        <label className='mb-1 text-lg font-semibold'>Email</label>
                        <input type="email" autoComplete='off' name="email" placeholder='Enter Your Email' className='p-3 border border-gray-100 rounded' />
                    </div>
                    <div className='flex flex-col relative'>
                        <label className='mb-1 text-lg font-semibold'>Password</label>
                        <input type={passwordType} autoComplete='off' name="password" placeholder='Enter Your Password  ' className='p-3 border border-gray-100 rounded' />
                        <button type='button' onClick={() => setPasswordType(passwordType === "password" ? "text" : "password")} className='absolute top-11 right-4 w-8 h-8 hover:bg-blue-200/25 rounded-full hover:text-blue-600'>
                            {
                                passwordType === "password" ? <i className='ri-eye-line'></i> : <i className='ri-eye-off-line'></i>
                            }
                        </button>
                    </div>
                    <button className='py-3 px-8 bg-blue-600 hover:bg-rose-600 text-white font-semibold rounded-sm'>Login</button>
                </form>
                <div className='mt-2'>
                    Don't have an account? <Link to='/signup' className='text-blue-500 font-semibold'>Register Now</Link>
                </div>
            </div>
        </div>
    )
}

export default Login