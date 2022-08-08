import React from 'react'
import FooterElephant from '../assets/footerform.svg';
import FooterLogo from '../assets/footerlogo.svg';
import fb from '../assets/fb.svg';
import insta from '../assets/insta.svg';
import twitter from '../assets/twitter.svg';
import youtube from '../assets/youtube.svg';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer>
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
                            <Link to="/">
                                <img src={FooterLogo} alt="" />
                            </Link>

                            <ul className="flex pt-31.91 pb-28.87 ">
                                <li className="pr-5">
                                    <a href="https://www.facebook.com/HERDElephantsSA">
                                        <img src={fb} alt="" />
                                    </a>
                                </li>
                                <li className="pr-5">
                                    <a href="https://www.instagram.com/herd_elephants/">
                                        <img src={insta} alt="" />
                                    </a>
                                </li>
                                <li className="pr-5">
                                    <a href="https://twitter.com/HERD_Elephants">
                                        <img src={twitter} alt="" />
                                    </a>
                                </li>
                                <li className="pr-5">
                                    <a href="https://www.youtube.com/channel/UCske8PIaYjaPH1yBr_JojwQ">
                                        <img src={youtube} alt="" />
                                    </a>
                                </li>
                            </ul>
                            <Link to="/Contact">
                                <button
                                    className="p-2 bg-transparent text-white px-7 border border-white hover:bg-white hover:text-black-100 hover:border-black-100 rounded">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                        <ul className="xs:pt-30 sm:pt-0 lg:pr-130 font-sans text-white font-normal uppercase tracking-wider">
                            <li className="text-28">
                                <Link to="/Foster">Foster</Link>
                            </li>
                            <li className="text-28">
                                <Link to="/Donation">Donate</Link>
                            </li>
                            <li className="text-28">
                                <Link to="/HerdShop">shop</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="sm:flex text-white">
                        <ul className="xs:pt-30 lg:pt-0 sm:pr-123 font-sans text-15 leading-18 tracking-wider font-normal">
                            <Link to='/OurStory'>
                                <li className="pb-19">Our Story</li>
                            </Link>
                            <Link to='/MeetHerd'>
                                <li className="pb-19">The Jabulani Herd</li>
                            </Link>
                            <Link to='/MeetKumbura'>
                                <li className="pb-19">Elephant Moments</li>
                            </Link>
                            <Link to='/Projects'>
                                <li className="pb-19">Projects</li>
                            </Link>
                            <Link to='/MeetTeam'>
                                <li className="pb-19">Meet the Team</li>
                            </Link>
                        </ul>
                        <ul className="xs:pt-30 lg:pt-0 font-sans text-15 leading-18 tracking-wider font-normal">
                            <Link to="/Location">
                                <li className="pb-19">Location</li>
                            </Link>

                            <Link to="/HerdBlog">
                                <li className="pb-19">Blog</li>
                            </Link>

                            <Link to="/Faq">
                                <li className="pb-19">FAQ’s</li>
                            </Link>

                            <Link to="/Gallery">
                                <li className="pb-19">Gallery</li>
                            </Link>

                            <Link to="/annualReports">
                                <li className="pb-19">Annual Reports</li>
                            </Link>

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