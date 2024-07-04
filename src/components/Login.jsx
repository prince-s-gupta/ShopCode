import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import firebaseAppConfig from '../utils/firebase-config'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'

const auth = getAuth(firebaseAppConfig)

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [passwordType, setPasswordType] = useState("password")
    const [loader, setLoader] = useState(false)
    const [customError, setCustomError] = useState(null)
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        try {
            setLoader(true)
            await signInWithEmailAndPassword(auth, data.email, data.password)
            navigate("/")

        } catch (error) {
            setCustomError("Invalid UserName or Password")
        }
        finally {
            setLoader(false)
        }
    }
    return (
        <div className='grid md:grid-cols-2 md:h-screen md:overflow-hidden animate__animated animate__fadeIn'>
            <img src="/images/login.svg" alt="" className='md:w-full w-48 md:mx-0 mx-auto md:h-full h-48 object-contain' />
            <div className='flex flex-col mt-5 justify-center md:p-16 p-8'>
                <h1 className='text-4xl font-bold'>Sign In</h1>
                <p className='text-lg text-gray-600 mt-2'>Enter Credentials to Login</p>
                <form className='mt-8 space-y-6' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col'>
                        <label className='mb-1 text-lg font-semibold'>Email</label>
                        <input type="email"
                            autoComplete='off'
                            name="email"
                            placeholder='Enter Your Email'
                            className='p-3 border border-gray-100 rounded'
                            {...register('email', {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Enter a valid email address"
                                }
                            })}
                        />
                        {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                    </div>
                    <div className='flex flex-col relative'>
                        <label className='mb-1 text-lg font-semibold'>Password</label>
                        <input type={passwordType} {...register('password', { required: "Password is required", minLength: { value: 6, message: "Password must be atleast 6 characters" } })} autoComplete='off' name="password" placeholder='Enter Your Password  ' className='p-3 border border-gray-100 rounded' />
                        <button type='button' onClick={() => setPasswordType(passwordType === "password" ? "text" : "password")} className='absolute top-11 right-4 w-8 h-8 hover:bg-blue-200/25 rounded-full hover:text-blue-600'>
                            {
                                passwordType === "password" ? <i className='ri-eye-line'></i> : <i className='ri-eye-off-line'></i>
                            }
                        </button>
                        {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
                    </div>
                    <button
                        type="submit"
                        className={`py-3 px-5 bg-blue-600 hover:bg-rose-600 text-white font-semibold rounded-sm flex items-center justify-center ${loader ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loader}
                    >
                        {loader && <svg className="animate-spin h-5 w-5 mr-3 border-t-2 border-b-2 border-white rounded-full" viewBox="0 0 24 24"></svg>}
                        Signup
                    </button>
                </form>
                <div className='mt-2'>
                    Don't have an account? <Link to='/signup' className='text-blue-500 font-semibold'>Register Now</Link>
                </div>
                {
                    customError &&
                    <div className=' flex justify-between items-center mt-2 bg-rose-600 text-white p-2 font-semibold rounded animate__animated animate__shakeX'>
                        <p>{customError}</p>
                        <button onClick={() => setCustomError(null)}>
                            <i className='ri-close-line'></i>
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Login