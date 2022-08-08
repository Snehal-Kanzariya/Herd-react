import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ image, subTitle, title }) => {
    return (
        <div className="bg-white sm:px-11">
            <div className="pt-36 ">
                <img src={image} alt="" className="justify-center flex mx-auto my-0 sm:px-14" />
            </div>
            <div className="pl-7 pr-25 sm:text-center md:text-start">
                <h1 className="subtitle pt-10 font-sans text-12 font-normal leading-14 tracking-wider text-gray-200">
                    {subTitle}
                </h1>
                <h1 className="title text-xl leading-25 pt-11">
                    {title}
                </h1>
                <p className="pt-11 pb-27 text-18 font-sans text-gray-200">$20.00</p>
                <div className="buttons flex sm:justify-center md:justify-start pb-7">
                    <Link to="/Account">
                        <div
                            className="px-5 py-2 text-15 font-sans mr-18 bg-transparent text-black-100 border border-black-100 border-opacity-40 hover:bg-black-100 hover:text-white hover:border-transparent rounded">
                            View
                        </div>
                    </Link>
                    <Link to="/Cart">
                        <div className="bg-green text-white rounded px-14 py-3 font-sans tracking-wider font-medium text-xs hover:bg-transparent hover:text-green border border-green">
                            Add To Cart
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Product