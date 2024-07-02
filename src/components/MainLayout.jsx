import React from 'react'
import { Link } from 'react-router-dom'

const MainLayout = ({ children }) => {
    const menus = [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "Products",
            href: "/products"
        },
        {
            label: "Category",
            href: "/category"
        },
        {
            label: "Contact Us",
            href: "/contact-us"
        },
    ]
    return (
        <div>
            <nav className='shadow-lg bg-white sticky top-0 left-0'>
                <div className='w-10/12 mx-auto flex items-center justify-between'>
                    <img src="/images/shopCode.png" alt="" className='w-24 rounded-full' />
                    <ul className='flex gap-8 items-center'>
                        {
                            menus.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.href} className='block py-6 hover:font-bold hover:text-md'>{item.label}</Link>
                                </li>
                            ))
                        }
                        <Link to="/login" className=' block py-6 hover:font-bold'>Login</Link>
                        <Link to="/signup" className=' bg-blue-500 text-white block py-2 px-6 text-md rounded font-semibold  hover:bg-blue-600'>Signup</Link>
                    </ul>
                </div>
            </nav>
            <div>{children}</div>
            <footer className='bg-slate-500 p-8'>
                <div className='w-10/12 mx-auto grid grid-cols-4 gap-4'>

                    <div>
                        <h1 className=' text-slate-200 text-2xl font-semibold mb-3'>Website Links</h1>
                        <ul className='space-y-3 text-gray-300'>
                            {
                                menus.map((item, index) => (
                                    <li key={index}>
                                        <Link to={item.href}>{item.label}</Link>
                                    </li>
                                ))
                            }
                            <li>
                                <Link to="/logim">Login</Link>
                            </li>
                            <li>
                                <Link to="/signup">Signup</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className=' text-slate-200 text-2xl font-semibold mb-3'>Follow Us</h1>
                        <ul className='space-y-2 text-slate-200'>
                            <li><Link to='/'>Facebook</Link></li>
                            <li><Link to='/'>Instagram</Link></li>
                            <li><Link to='/'>Twitter</Link></li>
                            <li><Link to='/'>Linkedin</Link></li>
                            <li><Link to='/'>Youtube    </Link></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className=' text-slate-200 text-2xl font-semibold mb-3'>Brands Details</h1>
                        <img src="/images/shopCode.png" alt="" className='w-[200px] mb-2' />
                        <p className='text-slate-200'>Where Style Meets Technology</p>
                    </div>
                    <div>
                        <h1 className=' text-slate-200 text-2xl font-semibold mb-3'>Contact Us</h1>
                        <form className='space-y-4'>
                            <input type="text" name='fullname' className='bg-white w-full rounded p-3' placeholder='Your Name' required autoComplete='off' />
                            <input type="email" name='email' className='bg-white w-full rounded p-3' placeholder='Enter Email Id' required autoComplete='off' />
                            <textarea name="message" required className='bg-white w-full rounded p-3' placeholder='Message' rows={3}></textarea>
                            <button className='bg-black text-white py-3 px-6 rounded'>Submit</button>
                        </form>
                    </div>


                </div>
            </footer>
        </div>
    )
}

export default MainLayout