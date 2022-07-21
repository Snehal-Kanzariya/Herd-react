import React from 'react'
import FooterElephant from '../assets/footerform.svg';
import FooterLogo from '../assets/footerlogo.svg';
import fb from '../assets/fb.svg';
import insta from '../assets/insta.svg';
import twitter from '../assets/twitter.svg';
import youtube from '../assets/youtube.svg';


const Footer = () => {
    return (
        <footer className="">
            <div className="bg-black-200 pt-60 pb-79 lg:!block xs:hidden ">
                <div className="container justify-center flex">
                    <img src={FooterElephant} alt="" />
                    <div className="font-sans text-30 text-center text-white pl-5">
                        Get the latest HERD news straight to your inbox
                    </div>
                </div>
                <div className="pt-60">
                    <form className="flex justify-center">
                        <input type="text" placeholder='Name' className="text-16 font-normal leading-[160%;] text-gray-100 bg-black-200 border-b border-gray-400" />
                        <input type="text" placeholder='Surname ' className="text-16 font-normal leading-[160%;] text-gray-100 bg-black-200 border-b border-gray-400 mx-33" />
                        <input type="email" placeholder='Email address' className="text-16 font-normal leading-[160%;] text-gray-100 bg-black-200 border-b border-gray-400" />
                        <button
                            className="py-2 bg-transparent text-white px-23 ml-69 border border-white hover:bg-white hover:text-black-100 hover:border-transparent rounded">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
            <div className="bg-black-100 py-100 flex justify-center">
                <div className="lg:flex">
                    <div className="sm:flex">
                        <div className="sm:pr-24">
                            <img src={FooterLogo} alt="" />
                            <ul className="flex pt-31.91 pb-28.87 ">
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
                                className="p-2 bg-transparent text-white px-7 border border-white hover:bg-white hover:text-black-100 hover:border-black-100 rounded">
                                Contact Us
                            </button>
                        </div>
                        <ul className="xs:pt-30 sm:pt-0 lg:pr-130 font-sans text-white font-normal uppercase tracking-wider">
                            <li className="text-28">Foster</li>
                            <li className="text-28">Donate</li>
                            <li className="text-28">shop</li>
                        </ul>
                    </div>

                    <div className="sm:flex text-white">
                        <ul className="xs:pt-30 lg:pt-0 sm:pr-123 font-sans text-15 leading-18 tracking-wider font-normal">
                            <li className="pb-19">Our Story</li>
                            <li className="pb-19">The Jabulani Herd</li>
                            <li className="pb-19">Elephant Moments</li>
                            <li className="pb-19">Projects</li>
                            <li className="pb-19">Meet the Team</li>
                        </ul>
                        <ul className="xs:pt-30 lg:pt-0 font-sans text-15 leading-18 tracking-wider font-normal">
                            <li className="pb-19">Location</li>
                            <li className="pb-19">Blog</li>
                            <li className="pb-19">FAQ’s</li>
                            <li className="pb-19">Gallery</li>
                            <li className="pb-19">Annual Reports</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=" bg-black-100 ">
                <div className="container lg:flex">
                    <div className="pb-4 text-[#D0CFCD] xs:flex xs:justify-center lg:justify-start font-sans text-11 leading-3 tracking-[0.02em]">
                        <p className="xs:px-4 xs:pl-12 sm:px-0 sm:pb-14">
                            All rights reserved Hoedspruit Elephant Rehabilitation and Development 2021
                        </p>
                    </div>
                    <div
                        className="lg:flow-root lg:ml-auto pb-4 text-[#D0CFCD] xs:flex xs:justify-center font-sans text-11 leading-3 tracking-[0.02em] sm:pl-0">
                        <ul className="flex">
                            <li>Privacy Policy</li>
                            <li className="ml-7">POPI Compliance</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer