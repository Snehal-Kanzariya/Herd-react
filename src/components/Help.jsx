import React from 'react'
import grid1 from '../assets/grid1.png';
import grid2 from '../assets/grid2.png';
import grid3 from '../assets/grid3.png';

const Help = ({ mainTitle, mainParagraph, isBgGray }) => {
    return (
        <section className={`pt-93 pb-100 ${isBgGray && 'bg-gray-100'}`}>
            <div className="help-header">
                <h1 className="font-sans text-black xs:text-xl lg:!text-3xl uppercase text-center">
                    {mainTitle}
                </h1>
                <p className="pt-13 mx-auto my-0 font-sans text-gray-200 max-w-662 text-center text-sm xs:px-25 md:px-50">
                    {mainParagraph}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-25 xs:px-25 md:!px-50 pt-50">
                <div className="relative xs:justify-center xs:flex">
                    <img src={grid1} alt="" className="xs:w-full" />
                    <div className="absolute bottom-11">
                        <h1 className="font-sans text-white xs:text-xl sm:!text-27 leading-34 tracking-wider pb-17">
                            Foster an Elephant</h1>
                        <button
                            className="font-sans justify-center flex mx-auto my-0 p-2 text-base items-center bg-transparent text-white px-14 border border-white hover:bg-white hover:text-black-100 hover:border-transparent rounded">
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="relative xs:justify-center xs:flex">
                    <img src={grid2} alt="" className="xs:w-full" />
                    <div className="absolute bottom-11">
                        <h1 className="font-sans text-white xs:text-xl sm:!text-27 leading-34 tracking-wider pb-17">
                            Help The Herd
                        </h1>
                        <button
                            className="font-sans justify-center flex mx-auto my-0 p-2 text-base items-center bg-transparent text-white px-14 border border-white hover:bg-white hover:text-black-100 hover:border-transparent rounded">
                            Make a Donation
                        </button>
                    </div>
                </div>
                <div className="relative xs:justify-center xs:flex">
                    <img src={grid3} alt="" className="xs:w-full" />
                    <div className="absolute bottom-11">
                        <h1 className="font-sans text-white xs:text-xl sm:!text-27 leading-34 tracking-wider pb-17">
                            Browse Our Shop
                        </h1>
                        <button
                            className="font-sans justify-center flex mx-auto my-0 p-2 text-base items-center bg-transparent text-white px-14 border border-white hover:bg-white hover:text-black-100 hover:border-transparent rounded">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Help