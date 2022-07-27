import React from 'react'

const ImageGrid = ({ image, title, subTitle, buttonText1, buttonText2, isButton }) => {
    return (
        <div className="relative xs:justify-center xs:flex">
            <img src={image} alt="" className="xs:w-full" />
            <div className="absolute bottom-7 text-white">
                <h1 className="text-27 text-center">
                    {title}
                </h1>
                <p className="text-center text-13 pb-26">
                    {subTitle}
                </p>
                <div className="btns">
                    <button
                        className="p-2 mr-15 items-center bg-transparent text-white px-5 small:px-10 border border-[#ffffff80] hover:bg-green hover:text-white hover:border-transparent rounded">
                        {buttonText1}
                    </button>
                    <button
                        className="p-2 items-center bg-transparent text-white px-5 small:px-10 border border-[#ffffff80] hover:bg-green hover:text-white hover:border-transparent rounded">
                        {buttonText2}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageGrid
{/* <button
    className="justify-center flex mx-auto mb-0 mt-100 p-2 nav items-center text-16 bg-transparent text-black-100 px-5 border border-black-100 hover:bg-black-100 hover:text-white hover:border-transparent rounded">
    Load More
</button> */}
{/* <button className="flex justify-center mx-auto mb-0 mt-99">
    <div className="flex border-b border-[#00000066]">
        <span className="pr-3 mb-2 font-sans text-16">View All Elephants</span>
        <img src={rightArrow} alt="" className="flex " />
    </div>
</button> */}