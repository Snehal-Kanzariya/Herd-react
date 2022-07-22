import React from 'react'
import rightArrow from '../assets/arrow_right.svg'

const Zigzag = ({ zigzagImg, isPr, isReverse, isPt136, title, paragraph, buttonText, isButton, isPb }) => {
    return (
        <>
            <section className={`lg:flex pt-150 ${isPb ? 'pb-0' : 'pb-20 sm:pb-150'}`}>
                <div className={`lg:w-5/12 sm:px-50 xs:justify-center xs:flex lg:pr-0 justify-around xs:pb-10 lg:!pb-0 ${isPr && 'xs:pr-50'} ${isReverse && 'order-1'}`} >
                    <img src={zigzagImg} alt="" className="object-cover xs:px-3 sm:!px-0 xs:w-full lg:max-w-551" />
                </div>
                <div className="w-full lg:w-6/12 justify-around">
                    <div className="container">
                        <div className={`lg:pl-132 lg:pt-84 ${isPt136 && 'lg:pt-136'}`}>
                            <h1 className="title xs:text-center sm:!text-left">{title}</h1>
                            <p className="xs:px-3 sm:px-0 font-sans pt-5 text-gray-200 text-15 leading-19 tracking-wider font-normal">
                                {paragraph}
                            </p>
                            {isButton &&
                                <button className="pt-7 xs:px-3 sm:px-0">
                                    <div className="flex border-b border-[#00000066]">
                                        <span className="pr-3 mb-2 font-sans text-16">{buttonText}</span>
                                        <img src={rightArrow} alt="" className="flex " />
                                    </div>
                                </button>
                            }

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Zigzag