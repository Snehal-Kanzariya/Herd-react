import React from 'react'
import FooterElephant from '../assets/footerform.svg';
import FooterLogo from '../assets/footerlogo.svg';
import fb from '../assets/fb.svg';
import insta from '../assets/insta.svg';
import twitter from '../assets/twitter.svg';
import youtube from '../assets/youtube.svg';


const Footer = () => {
    return (
        <footer>
            <div className="bg-[#242525] pt-53 sm:hidden lg:block">
                <div className="container">
                    <div className="flex text-center justify-center">
                        <img src={FooterElephant} alt="" />
                        <div className="font-sans text-30 text-center text-white pl-5">
                            Get the latest HERD news straight to your inbox
                        </div>
                    </div>
                    <form action="#" className="flex pb-12 py-43 text-[#F7F6F3] justify-center">
                        <input type="text" placeholder="Name" className="border-b-[1px] border-[#ECEBE0]  bg-transparent" />
                        <input type="text" placeholder="Surname"
                            className="border-b-[1px] border-[#ECEBE0]  bg-transparent mx-33" />
                        <input type="email" placeholder="Email address"
                            className="w-[402px] border-b-[1px] border-[#ECEBE0]  bg-transparent" />
                        <button
                            className="p-2 bg-transparent text-white px-7 ml-69 border border-white hover:bg-white hover:text-black hover:border-transparent rounded">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
            <div className="bg-[#222222]">
                <div className="container">
                    <div className="pt-100 pb-137 flex text-white sm:justify-end lg:justify-center">
                        <div className="mr-96">
                            <img src={FooterLogo} alt="" className="max-w-[148px]" />
                            <ul className="flex pt-[31.91px] pb-[28.87px] ">
                                <li className="pr-5">
                                    <a href="#">
                                        <img src={fb} alt="" />
                                    </a>
                                </li>
                                <li className="pr-5">
                                    <a href="#">
                                        <img src={insta} alt="" />
                                    </a>
                                </li>
                                <li className="pr-5">
                                    <a href="#">
                                        <img src={twitter} alt="" />
                                    </a>
                                </li>
                                <li className="pr-5">
                                    <a href="#">
                                        <img src={youtube} alt="" />
                                    </a>
                                </li>
                            </ul>
                            <button
                                className="p-2 bg-transparent text-white px-7 border border-white hover:bg-white hover:text-black hover:border-transparent rounded">
                                Contact Us
                            </button>
                        </div>
                        <div className="lg:flex">
                            <div>
                                <ul className="mr-130">
                                    <li className="text-[28px]">Foster</li>
                                    <li className="text-[28px]">Donate</li>
                                    <li className="text-[28px]">shop</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="mr-129 text-base leading-tight">
                                    <li className="pb-3">Our Story</li>
                                    <li className="pb-3">The Jabulani Herd</li>
                                    <li className="pb-3">Elephant Moments</li>
                                    <li className="pb-3">Projects</li>
                                    <li className="pb-3">Meet the Team</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="">
                                    <li className="pb-3">Location</li>
                                    <li className="pb-3">Blog</li>
                                    <li className="pb-3">FAQ’s</li>
                                    <li className="pb-3">Gallery</li>
                                    <li className="pb-3">Annual Reports</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="lg:flex">
                        <div
                            className="pb-4 text-[#D0CFCD] sm:flex sm:justify-center lg:justify-start font-[Montserrat] text-11 leading-3 tracking-[0.02em]">
                            <p className="sm:pb-14">
                                All rights reserved Hoedspruit Elephant Rehabilitation and Development 2021
                            </p>
                        </div>
                        <div
                            className="lg:flow-root lg:ml-auto pb-4 text-[#D0CFCD] sm:flex sm:justify-center font-[Montserrat] text-11 leading-3 tracking-[0.02em] sm:pl-0">
                            <ul className="flex">
                                <li>Privacy Policy</li>
                                <li className="ml-7">POPI Compliance</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer   