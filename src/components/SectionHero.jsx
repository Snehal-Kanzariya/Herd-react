import React from 'react'
import Hero from '../assets/homeHero.png';

const SectionHero = () => {
    return (
        <div class="relative justify-center flex">
            <img src={Hero} alt="" />
            <div class="absolute bottom-180 text-white">
                <h1 class="font-sans font-normal text-22 lg:text-40 leading-50 uppercase tracking-wider text-center">
                    a unique herd with a unique story
                </h1>
                <button className="font-sans text-15 my-0 mx-auto mt-5 justify-center flex bg-transparent text-white py-6 px-30 border border-white hover:bg-white hover:text-black hover:border-transparent rounded">
                    Our Story
                </button>
            </div>
        </div>
    )
}

export default SectionHero
{/* <section className="hero">
                <div className="w-full h-full object-cover">
                    <img src={Hero} alt="" />
                </div>
                <div className="absolute inline-block left-0 right-0 bottom-[164px] align-middle items-center justify-center">
                    <h1 className="font-sans text-center text-15 sm:text-28 md:text-40 uppercase text-white my-0 mx-auto justify-center flex">
                        a unique herd with a unique story
                    </h1>
                    <button className="font-sans text-15 my-0 mx-auto mt-5 justify-center flex bg-transparent text-white py-6 px-30 border border-white hover:bg-white hover:text-black hover:border-transparent rounded">
                        Our Story
                    </button>
                </div>
            </section> */}