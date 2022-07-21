import React from 'react'

const SectionHero = ({ heroImage, heroTitle, isButton, isBottom }) => {
    return (
        <div class="relative justify-center flex">
            <img src={heroImage} alt="" />
            <div class={`absolute text-white ${isBottom ? 'bottom-269' : 'bottom-180'}`}>
                <h1 class="font-sans font-normal text-22 lg:text-40 leading-50 uppercase tracking-wider text-center">
                    {heroTitle}
                </h1>
                {isButton &&
                    <button className="font-sans text-15 my-0 mx-auto mt-5 justify-center flex bg-transparent text-white py-6 px-30 border border-white hover:bg-white hover:text-black-100 hover:border-transparent rounded">
                        Our Story
                    </button>
                }

            </div>
        </div>
    )
}

export default SectionHero
