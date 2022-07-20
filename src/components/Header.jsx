import React from 'react'
import loginImg from '../assets/login.svg'
import accountImg from '../assets/account.svg'
import cartImg from '../assets/cart.svg'
import logoImg from '../assets/logo.svg'
import menuImg from '../assets/more.svg'
import loginIcon from "../assets/loginmenu.svg"
import userIcon from '../assets/user.svg'
import cartIcon from '../assets/cart_black.svg'
import closeIcon from '../assets/close.svg'
import bgmenu from '../assets/menubg.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
    let Links = [
        { name: "Orphans", link: "/" },
        { name: "Meet The Herd", link: "/" },
        { name: "Projects", link: "/" },
        { name: "Our Story", link: "/" },
        { name: "HERD Shop", link: "/" },
    ]

    return (
        <div className="header">
            <ul className="text-white smallest:text-10 sm:text-base flex text-right justify-end bg-black">
                <li className="p-3">
                    <a href="#" className='flex'>
                        <img src={loginImg} alt="" className='pr-2' />
                        Login
                    </a>
                </li>
                <li className="p-3">
                    <a href="#" className="flex">
                        <img src={accountImg} alt="" className="pr-2" />
                        My Account
                    </a>
                </li>
                <li className="p-3">
                    <a href="#" className="flex">
                        <img src={cartImg} alt="" className="pr-2" />
                        My Cart
                    </a>
                </li>
            </ul>
            <nav className="shadow-md w-full">
                <div className="smallest:flex sm:flex items-center justify-between bg-gray-100 pt-21 pb-25 smallest:px-5 sm:px-5 md:px-10 px-7">
                    <div className="cursor-pointer pl-6">
                        <img src={logoImg} alt="" />
                    </div>
                    <ul className="lg:flex lg:items-center smallest:hidden sm:hidden">
                        {
                            Links.map((Link) => (
                                <li className="lg:pr-3 xl:pr-27 nav">
                                    <a href="Link.link" className="lg:text-sm xl:text-base">{Link.name}</a>
                                </li>
                            ))
                        }
                        <di className="flex" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight">
                            <img src={menuImg} alt="" />
                            <span className="nav pl-11">More</span>
                        </di>
                    </ul>
                    <div className="buttons smallest:hidden sm:hidden lg:flex lg:items-center">
                        <button
                            className="p-2 nav text-15 items-center text-16 mr-19 bg-transparent text-black px-5 border border-black hover:bg-black hover:text-white hover:border-transparent rounded">
                            Foster An Elephant
                        </button>
                        <button className="p-2 nav text-15 bg-green text-white border border-green rounded hover:bg-transparent hover:text-green">
                            Donate
                        </button>
                    </div>
                    <div className="smallest:flex sm:flex lg:hidden " type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <img src={menuImg} alt="" className="pr-3" />
                    </div>
                </div>
            </nav>
            {/* menu */}
            <div
                className="z-50 bg-white offcanvas offcanvas-end px-24 fixed bottom-0 left-0 flex flex-col max-w-full invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none w-full"
                tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header flex items-center justify-between p-4 ">
                    <img src={logoImg} alt="" id="offcanvasRightLabel" />
                    <button type="button" invisible
                        className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                        data-bs-dismiss="offcanvas" aria-label="Close"><img src={closeIcon} alt="" /></button>
                </div>
                <div className="offcanvas-body p-4 overflow-y-auto font-sans">
                    <div className="-z-50 menu-bg absolute top-0 left-0 w-full h-full flex items-center justify-center lg:pr-27">
                        <img src={bgmenu} alt="" />
                    </div>
                    <div className="lg:flex mt-40">
                        <div className="lg:ml-28 xl:ml-164">
                            <ul className="lg:mr-20 sm:mr-55">
                                <li className="text-[28px]">
                                    <Link to="/">Foster</Link>
                                </li>
                                <li className="text-[28px]">Donate</li>
                                <li className="text-[28px]">shop</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="lg:mr-20 sm:mr-55 text-base leading-tight">
                                <li className="pb-3">Our Story</li>
                                <li className="pb-3">The Jabulani Herd</li>
                                <li className="pb-3">Elephant Moments</li>
                                <li className="pb-3">Projects</li>
                                <li className="pb-3">Meet the Team</li>
                            </ul>
                        </div>
                        <div className="lg:border-r">
                            <ul className="lg:mr-20 sm:mr-55">
                                <li className="pb-3">Location</li>
                                <li className="pb-3">Blog</li>
                                <li className="pb-3">FAQ’s</li>
                                <li className="pb-3">Gallery</li>
                                <li className="pb-3">Annual Reports</li>
                            </ul>
                        </div>
                        <div className="lg:pl-90">
                            <ul>
                                <li className="pb-4"><a href="#" className="flex"><img src={loginIcon} alt=""
                                    className="pr-2" />Login</a>
                                </li>
                                <li className="pb-4"><a href="#" className="flex"><img src={userIcon} alt="" className="pr-2" />
                                    My Account</a>
                                </li>
                                <li className="pb-4"><a href="#" className="flex"><img src={cartIcon} alt="" className="pr-2" />
                                    My Cart</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
