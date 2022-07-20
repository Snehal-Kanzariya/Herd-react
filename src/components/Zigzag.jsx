import React from 'react'
import zigzagImg from '../assets/raisefund.png'
import rightArrow from '../assets/arrow_right.svg'

const Zigzag = () => {
    return (
        <>
            <section className="lg:flex py-150">
                <div class="w-full lg:w-5/12 pl-50 xs:pr-50 xs:justify-center xs:flex lg:pr-0  justify-around xs:pb-10 lg:pb-0">
                    <img class="object-cover"
                        src={zigzagImg} />
                </div>
                <div className="w-full lg:w-6/12 justify-around">
                    <div className="container">
                        <div className="lg:pl-132 lg:pt-84">
                            <h1 class="title">Raise Funds for HERD</h1>
                            <p class="font-sans">
                                Be a champion to our elephants by hosting a third-party
                                fundraising event to aid our HERD Trust. Giving your time and resources to help spread
                                the
                                word about our elephant orphans means the world
                                to us, and more importantly, to their survival. The funds you raise will directly go to
                                our
                                initiatives
                                and make the world’s difference.
                            </p>
                            <button class="pt-6">
                                <div class="flex border-b border-[#00000066]">
                                    <span class="pr-3 mb-2 font-sans text-16">Fundraise</span>
                                    <img src={rightArrow} alt="" class="flex " />
                                </div>
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Zigzag