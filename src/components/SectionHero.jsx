import React from 'react'
import { Link } from 'react-router-dom'

const SectionHero = ({ heroImage, heroTitle, isButton, isBottom, subTitle, greemButton, isGreenButton }) => {
    return (
        <div className="hero">
            <div class="relative justify-center flex">
                <img src={heroImage} alt="" />
                <div class={`absolute text-white ${isBottom ? 'bottom-269' : 'bottom-180'}`}>
                    <p className="font-sans text-16 text-white text-center font-normal tracking-wider leading-19">{subTitle}</p>
                    <h1 class="font-sans font-normal text-xl lg:text-40 md:leading-50 uppercase tracking-wider text-center">
                        {heroTitle}
                    </h1>
                    {isButton &&
                        <Link to='/OurStory'>
                            <button className="font-sans text-15 my-0 mx-auto mt-5 justify-center flex bg-transparent text-white py-6 px-30 border border-white hover:bg-white hover:text-black-100 hover:border-transparent rounded">
                                Our Story
                            </button>
                        </Link>

                    }
                    {isGreenButton &&
                        <button
                            className="font-sans my-0 mx-auto mt-5 justify-center flex p-2 bg-green text-white px-5 border border-green hover:bg-transparent hover:text-white hover:border-white rounded">
                            {greemButton}
                        </button>
                    }
                </div>
            </div>
        </div >

    )
}

export default SectionHero
