import React from 'react'
import Image from '../assets/timisatabgrid.png'

const ImageGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-25 px-50">
            <div className="relative sm:justify-center sm:flex">
                <img src={Image} alt="" />
                <div className="absolute bottom-7 text-white">
                    <h1 className="text-27 text-center">
                        Timisa
                    </h1>
                    <p className="text-center text-13 pb-26">
                        Female | 5 years old
                    </p>
                    <div className="flex">
                        <button
                            className="p-2 mr-15 items-center bg-transparent text-white px-10 border border-[#ffffff80] hover:bg-green hover:text-white hover:border-transparent rounded">
                            View Profile
                        </button>
                        <button
                            className="p-2 items-center bg-transparent text-white px-10 border border-[#ffffff80] hover:bg-green hover:text-white hover:border-transparent rounded">
                            Foster
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageGrid