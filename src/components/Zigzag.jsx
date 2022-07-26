import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import rightArrow from '../assets/arrow_right.svg'

const Zigzag = ({ zigzagImg, isPr, isReverse, isPt136, title, paragraph, paragraph1, isParagraph1, paragraph2, isParagraph2, paragraph3, isParagraph3, buttonText, isButton, isPt, isPb, linkButton = "/" }) => {
    useEffect(() => {
        // scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <>
            <section className={`lg:flex  ${isPt ? 'pt-0' : 'pt-20 sm:pt-150'} ${isPb ? 'pb-0' : 'pb-20 sm:pb-150'}`}>
                <div className={`lg:w-5/12 sm:px-50 xs:justify-center xs:flex lg:pr-0 justify-around xs:pb-10 lg:!pb-0 ${isPr && 'xs:pr-50'} ${isReverse && 'order-1'}`} >
                    <img src={zigzagImg} alt="" className="object-cover xs:px-25 sm:!px-0 xs:w-full lg:max-w-551" />
                </div>
                <div className="w-full lg:w-6/12 justify-around">
                    <div className={`sm:px-50 lg:pl-132 lg:pt-84 ${isPt136 && 'lg:pt-136'}`}>
                        <h1 className="title xs:text-center sm:!text-left">{title}</h1>
                        <p className="xs:px-25 sm:!px-0 font-sans pt-5 text-gray-200 text-15 leading-19 tracking-wider font-normal">
                            {paragraph}
                        </p>
                        {isParagraph1 &&
                            <p className="xs:px-25 sm:!px-0 font-sans pt-5 text-gray-200 text-15 leading-19 tracking-wider font-normal">
                                {paragraph1}
                            </p>
                        }
                        {isParagraph2 &&
                            <p className="xs:px-25 sm:!px-0 font-sans pt-5 text-gray-200 text-15 leading-19 tracking-wider font-normal">
                                {paragraph2}
                            </p>
                        }
                        {isParagraph3 &&
                            <p className="xs:px-25 sm:!px-0 font-sans pt-5 text-gray-200 text-15 leading-19 tracking-wider font-normal">
                                {paragraph3}
                            </p>
                        }

                        {isButton &&
                            <Link to={linkButton}>
                                <button className="pt-7 xs:px-3 sm:!px-0"
                                    onClick={() => {
                                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                    }}
                                >
                                    <div className="flex border-b border-[#00000066]">
                                        <span className="pr-3 mb-2 font-sans text-16">{buttonText}</span>
                                        <img src={rightArrow} alt="" className="flex " />
                                    </div>
                                </button>
                            </Link>

                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Zigzag