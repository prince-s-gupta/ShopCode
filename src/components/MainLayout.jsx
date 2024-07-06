import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import firebaseAppConfig from '../utils/firebase-config'

const auth = getAuth(firebaseAppConfig)

const MainLayout = ({ children }) => {
    const [open, setOpen] = useState(false)
    const [accountMenu, setAccountMenu] = useState(false)
    const [session, setSession] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setSession(user)
            }
            else {
                setSession(false)
            }
        })

    }, [])

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

    const mobileLink = (href) => {
        navigate(href)
        setOpen(false)
    }

    const handleLogout = () => {
        signOut(auth)
        navigate("/")
    }

    if (session === null) {

        return (
            <div className='bg-gray-100 h-full fixed top-0 left-0 w-full flex justify-center items-center'>
                <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-sky-500"></span>
                </span>
            </div>
        )
    }


    return (
        <div>
            {/* //desktop */}
            <nav className='md:block hidden shadow-lg bg-white sticky top-0 left-0 p-4 md:p-0 z-50'>
                <div className='w-10/12 mx-auto flex items-center justify-between'>
                    <img src="/images/shopCode.png" alt="" className='w-24 rounded-full' />
                    <button className='md:hidden' onClick={() => setOpen(!open)}>
                        <i className='ri-menu-3-fill text-3xl'></i>
                    </button>
                    <ul className='md:flex gap-8 items-center hidden'>
                        {
                            menus.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.href} className='block py-6 hover:font-bold hover:text-md'>{item.label}</Link>
                                </li>
                            ))
                        }
                        {!session &&
                            <>
                                <Link to="/login" className=' block py-6 hover:font-bold'>Login</Link>
                                <Link to="/signup" className=' bg-blue-500 text-white block py-2 px-6 text-md rounded font-semibold  hover:bg-blue-600'>Signup</Link>
                            </>
                        }

                        {
                            session &&
                            <>
                                <button className='relative' onClick={() => setAccountMenu(!accountMenu)}>
                                    <img src={session.photoURL ? session.photoURL : "/images/avt.avif"} alt="" className='w-10 h-10 rounded-full' />
                                    {
                                        accountMenu &&
                                        <div className='animate__animated animate__fadeIn flex flex-col items-start  w-[150px] py-4 bg-white shadow-xl absolute top-12 right-0'>
                                            <h1 className='w-full font-semibold mb-3 cursor-auto'> Hi {session.displayName}!</h1>
                                            <Link to="/profile" className='w-full p-2 hover:bg-gray-100 text-left'>
                                                <i className='ri-user-line mr-2'></i>
                                                My Profile
                                            </Link>
                                            <Link to="/cart" className='w-full p-2 hover:bg-gray-100 text-left'>
                                                <i className='ri-shopping-cart-line mr-2'></i>
                                                Cart
                                            </Link>
                                            <button className='w-full p-2 hover:bg-gray-100 text-left' onClick={() => signOut(auth)}>
                                                <i className='ri-logout-circle-line mr-2'></i>
                                                Logout
                                            </button>
                                        </div>
                                    }
                                </button>
                            </>
                        }
                    </ul>
                </div>
            </nav>
            {/* //mobile  */}
            <nav className='md:hidden block shadow-lg bg-white sticky top-0 left-0 p-4 md:p-0 z-50'>
                <div className='w-10/12 mx-auto flex items-center justify-between'>
                    <img src="/images/shopCode.png" alt="" className='w-24 rounded-full' />
                    <div className='flex  items-center'>
                        {
                            session &&
                            <>
                                <button className='relative' onClick={() => setAccountMenu(!accountMenu)}>
                                    <img src={session.photoURL ? session.photoURL : "/images/avt.avif"} alt="" className='w-10 h-10 rounded-full' />
                                    {
                                        accountMenu &&
                                        <div className='animate__animated mr-5 animate__fadeIn flex flex-col items-start w-[150px] py-4 bg-white shadow-xl absolute top-12 -right-8'>
                                            <h1 className='w-full font-semibold mb-3 cursor-auto'> Hi {session.displayName}!</h1>
                                            <Link to="/profile" className='w-full p-2 hover:bg-gray-100 text-left'>
                                                <i className='ri-user-line mr-2'></i>
                                                My Profile
                                            </Link>
                                            <Link to="/cart" className='w-full p-2 hover:bg-gray-100 text-left'>
                                                <i className='ri-shopping-cart-line mr-2'></i>
                                                Cart
                                            </Link>
                                            <button className='w-full p-2 hover:bg-gray-100 text-left' onClick={handleLogout}>
                                                <i className='ri-logout-circle-line mr-2'></i>
                                                Logout
                                            </button>
                                        </div>
                                    }
                                </button>
                            </>
                        }
                        <button className='md:hidden ml-10' onClick={() => setOpen(!open)}>
                            <i className='ri-menu-3-fill text-3xl'></i>
                        </button>
                    </div>


                </div>
            </nav>

            <div>{children}</div>
            <footer className='bg-slate-500 p-8'>
                <div className='w-10/12 mx-auto grid md:grid-cols-4 md:gap-0 gap-8'>

                    <div className='md:text-left text-center'>
                        <h1 className=' text-slate-200 text-2xl font-semibold mb-3'>Website Links</h1>
                        <ul className='space-y-3 text-gray-300 md:m-0 mx-auto'>
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
                    <div className='md:text-left text-center'>
                        <h1 className=' text-slate-200 text-2xl font-semibold mb-3'>Follow Us</h1>
                        <ul className='space-y-2 text-slate-200'>
                            <li><Link to='/'>Facebook</Link></li>
                            <li><Link to='/'>Instagram</Link></li>
                            <li><Link to='/'>Twitter</Link></li>
                            <li><Link to='/'>Linkedin</Link></li>
                            <li><Link to='/'>Youtube    </Link></li>
                        </ul>
                    </div>
                    <div className='md:text-left text-center'>
                        <h1 className=' text-slate-200 text-2xl font-semibold mb-3'>Brands Details</h1>
                        <img src="/images/shopCode.png" alt="" className='w-[200px] mb-2 mx-auto md:mx-0' />
                        <p className='text-slate-200'>Where Style Meets Technology</p>
                    </div>
                    <div className='md:text-left text-center'>
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
            <aside
                className='bg-gray-900/80 shadow-lg fixed top-0 left-0 h-full md:hidden z-50 overflow-hidden'
                style={{
                    width: (open ? 250 : 0),
                    transition: '.3s'
                }}
            >
                <div className='flex flex-col p-8 gap-6'>
                    {
                        menus.map((item, index) => (
                            <button onClick={() => mobileLink(item.href)} key={index} className='text-white'>{item.label}</button>
                        ))
                    }
                    {
                        !session &&
                        <>
                            <button className='text-white text-left mx-auto md:mx-0 bg-red-500 w-fit px-5 py-2 rounded'><Link to="/login">Login</Link></button>
                            <button className='text-white text-left mx-auto md:mx-0  bg-blue-500 w-fit px-5 py-2 rounded'><Link to="/signup">Sign Up</Link></button>
                        </>
                    }
                </div>
            </aside>
        </div>
    )
}

export default MainLayout