import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Layout = ({ children }) => {

    const [size, setSize] = useState(280)
    const [mobileSize, setMobileSize] = useState(0)
    const [accountMenu, setAccountMenu] = useState(false)
    const location = useLocation()

    const menus = [
        {
            label: "Dashboard",
            icon: <i className="ri-dashboard-2-line mr-2"></i>,
            link: "/admin/dashboard"
        },
        {
            label: "Customers",
            icon: <i className="ri-user-fill mr-2"></i>,
            link: "/admin/customers"
        },
        {
            label: "Products",
            icon: <i className='ri-shopping-cart-line mr-2'></i>,
            link: "/admin/products"
        },
        {
            label: "Orders",
            icon: <i className='ri-shape-line mr-2'></i>,
            link: "/admin/orders"
        },
        {
            label: "Payments",
            icon: <i className='ri-money-dollar-circle-line mr-2'></i>,
            link: "/admin/payments"
        },
        {
            label: "Settings",
            icon: <i className="ri-settings-2-line mr-2"></i>,
            link: "/admin/settings"
        },
    ]

    return (
        <>
            <div className='md:block hidden'>
                <aside
                    className='bg-violet-600 fixed top-0 left-0 h-full overflow-hidden'
                    style={{
                        width: size,
                        transition: '0.3s'
                    }}
                >
                    <div className='mt-2'>
                        <h1 className='text-center text-white text-xl font-serif underline underline-offset-2'>SHOP CODE</h1>
                    </div>
                    <div className='flex flex-col mt-2 gap-2'>
                        {
                            menus.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.link}
                                    className='p-2 text-gray-50 text-[17.5px] rounded-sm  hover:text-black'
                                    style={{
                                        background: (location.pathname === item.link) ? '#E11D48' : null
                                    }}
                                >
                                    {item.icon}
                                    {item.label}
                                </Link>
                            ))
                        }

                        <button
                            className='p-2 text-gray-50 text-left text-[17.5px] rounded-sm hover:text-black'
                        >
                            <i className='ri-logout-circle-r-line mr-2'></i>
                            Logout
                        </button>

                    </div>
                </aside>
                <section
                    className='bg-gray-100 min-h-screen'
                    style={{
                        marginLeft: size,
                        transition: '0.3s'
                    }}
                >
                    <nav className='bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0'>
                        <div className='flex items-center gap-4'>
                            <button
                                className='bg-gray-50 hover:bg-violet-600 hover:text-white w-8 h-8'
                                onClick={() => setSize(size === 280 ? 0 : 280)}
                            >
                                <i className="ri-menu-2-line text-xl"></i>
                            </button>
                            <h1 className='text-md font-semibold'>ShopCode</h1>
                        </div>

                        <div>
                            <button className='relative'>
                                <img src="/images/avt.jpg" alt="Avatar" className='w-10 h-10 rounded-full' onClick={() => setAccountMenu(!accountMenu)} />
                                {
                                    accountMenu && (
                                        <div className='absolute top-18 right-0 bg-white w-[200px] shadow-lg p-6'>
                                            <div>
                                                <h1 className='text-lg font-semibold'>Er Saurav</h1>
                                                <p className='text-gray-500'>dummy@gmail.com</p>
                                                <div className='h-px bg-gray-200 my-4'></div>
                                                <button>
                                                    <i className="ri-logout-circle-r-line mr-2"></i>
                                                    Logout
                                                </button>
                                            </div>
                                        </div>
                                    )
                                }
                            </button>
                        </div>
                    </nav>
                    <div className='p-6'>
                        {children}
                    </div>
                </section>
            </div >


            <div className='md:hidden block'>
                <aside
                    className='bg-violet-600 fixed top-0 left-0 h-full z-50 overflow-hidden'
                    style={{
                        width: mobileSize,
                        transition: '0.3s'
                    }}
                >

                    <div className='mt-2 flex justify-between p-2 items-center'>
                        <h1 className='text-center text-white text-xl font-serif underline underline-offset-2'>SHOP CODE</h1>
                        <button className=''
                            onClick={() => setMobileSize(mobileSize === 280 ? 0 : 280)}>
                            <i className="ri-close-circle-line text-white text-xl"></i>
                        </button>
                    </div>
                    <div className='flex flex-col mt-2 gap-2'>
                        {
                            menus.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.link}
                                    className='p-2 text-gray-50 text-[17.5px] rounded-sm hover:bg-rose-600 hover:text-white'
                                    style={{
                                        background: (location.pathname === item.link) ? '#E11D48' : null
                                    }}
                                >
                                    {item.icon}
                                    {item.label}
                                </Link>
                            ))
                        }

                        <button
                            className='p-2 text-gray-50 text-left text-[17.5px] rounded-sm hover:bg-rose-600 hover:text-white'
                        >
                            <i className='ri-logout-circle-r-line mr-2'></i>
                            Logout
                        </button>

                    </div>
                </aside>
                <section
                    className='bg-gray-100 h-screen'
                >
                    <nav className='bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0'>
                        <div className='flex items-center gap-4'>
                            <button
                                className='bg-gray-50 hover:bg-violet-600 hover:text-white w-8 h-8'
                                onClick={() => setMobileSize(mobileSize === 280 ? 0 : 280)}
                            >
                                <i className="ri-menu-2-line text-xl"></i>
                            </button>
                            <h1 className='text-md font-semibold'>ShopCode</h1>
                        </div>

                        <div>
                            <button className='relative'>
                                <img src="/images/avt.jpg" alt="Avatar" className='w-10 h-10 rounded-full' onClick={() => setAccountMenu(!accountMenu)} />
                                {
                                    accountMenu && (
                                        <div className='absolute top-18 right-0 bg-white w-[200px] shadow-lg p-6'>
                                            <div>
                                                <h1 className='text-lg font-semibold'>Er Saurav</h1>
                                                <p className='text-gray-500'>dummy@gmail.com</p>
                                                <div className='h-px bg-gray-200 my-4'></div>
                                                <button>
                                                    <i className="ri-logout-circle-r-line mr-2"></i>
                                                    Logout
                                                </button>
                                            </div>
                                        </div>
                                    )
                                }
                            </button>
                        </div>
                    </nav>
                    <div className='p-6'>
                        {children}
                    </div>
                </section>
            </div >
        </>
    )
}

export default Layout