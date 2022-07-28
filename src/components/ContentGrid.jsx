import React from 'react'
import arrow_right from '../assets/arrow_right.svg'

const ContentGrid = ({ image, isSubTitle, title, description, buttonTxt, isButton, isTextSize, isMb }) => {
    return (
        <div className="grid-content">
            <img src={image} alt="" className="xs:w-full" />
            <div className="pt-45">
                {isSubTitle &&
                    <h3 className="font-sans text-13 font-normal leading-4 tracking-wider text-gray-200 pb-2">The Herd</h3>
                }

                <h1 className={`title ${isTextSize ? 'text-22 leading-7' : 'text-35 leading-44'}`}>{title}</h1>
                <p className="font-sans font-normal text-15 leading-6 tracking-wider text-gray-200">
                    {description}
                </p>
            </div>

            {isButton &&
                <button className={`my-0 mx-auto pt-19 pb-54 ${isMb && 'lg:mb-72'} `}>
                    <div className="flex border-b border-[#00000066] mb-2">
                        <span className="mr-2 mb-2 font-sans text-16">{buttonTxt}</span>
                        <img src={arrow_right} alt="" className="flex opacity-40" />
                    </div>
                </button>
            }


        </div>
    )
}

export default ContentGrid
