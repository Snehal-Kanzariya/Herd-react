import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import heroImage from "../assets/PartnersHero.png";
import Content from '../components/Content';
import partnertitle from '../assets/partnertitle.svg'
import partner1 from '../assets/partner1.svg'
import Help from '../components/Help';
import News from '../components/News';

const Partners = () => {
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                heroTitle="Partners"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="The beautiful thing about elephants, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />
            <section className="partners pt-113">
                <div className="partners-title">
                    <div className="justify-center flex pb-33">
                        <img src={partnertitle} alt="" />
                    </div>
                    <h2 className="font-sans text-25 font-normal leading-31 text-center tracking-wider uppercase text-gray-300">Become a dontion parnter</h2>
                    <div className="justify-center flex pt-38 pb-90">
                        <button className="bg-green hover:bg-transparent font-sans rounded border border-green pl-25 pr-7 pt-2 pb-13 text-white hover:text-green text-15 leading-19 text-center tracking-wider">
                            Download Form
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-29">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="pt-39 pb-43">
                            <img src={partner1} alt="" />
                        </div>
                        <div className="pt-59 pb-45">
                            <h2 className="font-sans text-22 font-normal leading-7 tracking-wider text-black">Ron Magill
                                Conservation Endowment</h2>
                            <p className="text-gray-200 pt-1 pb-17 font-sans text-13 tracking-wider font-normal">Lorem ipsum dolor sit amet, sed do
                                Ut enim ad minim veniam, quis nostrud it amet.</p>
                            <div>
                                <a href="#" type="button"
                                    className="font-sans bg-transparent hover:bg-black-100 text-black font-normal text-15 hover:text-white py-2 px-15 border border-black hover:border-transparent rounded">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="pt-39 pb-43 pr-7">
                            <img src={partner1} alt="" />
                        </div>
                        <div className="pt-59 pb-45">
                            <h2 className="font-sans text-22 font-normal leading-7 tracking-wider text-black">Ron Magill
                                Conservation Endowment</h2>
                            <p className="text-gray-200 pt-1 pb-17 font-sans text-13 tracking-wider font-normal">Lorem ipsum dolor sit amet, sed do
                                Ut enim ad minim veniam, quis nostrud it amet.</p>
                            <div>
                                <a href="#" type="button"
                                    className="font-sans bg-transparent hover:bg-black-100 text-black font-normal text-15 hover:text-white py-2 px-15 border border-black hover:border-transparent rounded">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="pt-39 pb-43 pr-7">
                            <img src={partner1} alt="" />
                        </div>
                        <div className="pt-59 pb-45">
                            <h2 className="font-sans text-22 font-normal leading-7 tracking-wider text-black">Ron Magill
                                Conservation Endowment</h2>
                            <p className="text-gray-200 pt-1 pb-17 font-sans text-13 tracking-wider font-normal">Lorem ipsum dolor sit amet, sed do
                                Ut enim ad minim veniam, quis nostrud it amet.</p>
                            <div>
                                <a href="#" type="button"
                                    className="font-sans bg-transparent hover:bg-black-100 text-black font-normal text-15 hover:text-white py-2 px-15 border border-black hover:border-transparent rounded">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="pt-39 pb-43 pr-7">
                            <img src={partner1} alt="" />
                        </div>
                        <div className="pt-59 pb-45">
                            <h2 className="font-sans text-22 font-normal leading-7 tracking-wider text-black">Ron Magill
                                Conservation Endowment</h2>
                            <p className="text-gray-200 pt-1 pb-17 font-sans text-13 tracking-wider font-normal">Lorem ipsum dolor sit amet, sed do
                                Ut enim ad minim veniam, quis nostrud it amet.</p>
                            <div>
                                <a href="#" type="button"
                                    className="font-sans bg-transparent hover:bg-black-100 text-black font-normal text-15 hover:text-white py-2 px-15 border border-black hover:border-transparent rounded">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="pt-39 pb-43 pr-7">
                            <img src={partner1} alt="" />
                        </div>
                        <div className="pt-59 pb-45">
                            <h2 className="font-sans text-22 font-normal leading-7 tracking-wider text-black">Ron Magill
                                Conservation Endowment</h2>
                            <p className="text-gray-200 pt-1 pb-17 font-sans text-13 tracking-wider font-normal">Lorem ipsum dolor sit amet, sed do
                                Ut enim ad minim veniam, quis nostrud it amet.</p>
                            <div>
                                <a href="#" type="button"
                                    className="font-sans bg-transparent hover:bg-black-100 text-black font-normal text-15 hover:text-white py-2 px-15 border border-black hover:border-transparent rounded">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="pt-39 pb-43 pr-7">
                            <img src={partner1} alt="" />
                        </div>
                        <div className="pt-59 pb-45">
                            <h2 className="font-sans text-22 font-normal leading-7 tracking-wider text-black">Ron Magill
                                Conservation Endowment</h2>
                            <p className="text-gray-200 pt-1 pb-17 font-sans text-13 tracking-wider font-normal">Lorem ipsum dolor sit amet, sed do
                                Ut enim ad minim veniam, quis nostrud it amet.</p>
                            <div>
                                <a href="#" type="button"
                                    className="font-sans bg-transparent hover:bg-black-100 text-black font-normal text-15 hover:text-white py-2 px-15 border border-black hover:border-transparent rounded">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="pt-39 pb-43 pr-7">
                            <img src={partner1} alt="" />
                        </div>
                        <div className="pt-59 pb-45">
                            <h2 className="font-sans text-22 font-normal leading-7 tracking-wider text-black">Ron Magill
                                Conservation Endowment</h2>
                            <p className="text-gray-200 pt-1 pb-17 font-sans text-13 tracking-wider font-normal">Lorem ipsum dolor sit amet, sed do
                                Ut enim ad minim veniam, quis nostrud it amet.</p>
                            <div>
                                <a href="#" type="button"
                                    className="font-sans bg-transparent hover:bg-black-100 text-black font-normal text-15 hover:text-white py-2 px-15 border border-black hover:border-transparent rounded">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="pt-39 pb-43 pr-7">
                            <img src={partner1} alt="" />
                        </div>
                        <div className="pt-59 pb-45">
                            <h2 className="font-sans text-22 font-normal leading-7 tracking-wider text-black">Ron Magill
                                Conservation Endowment</h2>
                            <p className="text-gray-200 pt-1 pb-17 font-sans text-13 tracking-wider font-normal">Lorem ipsum dolor sit amet, sed do
                                Ut enim ad minim veniam, quis nostrud it amet.</p>
                            <div>
                                <a href="#" type="button"
                                    className="font-sans bg-transparent hover:bg-black-100 text-black font-normal text-15 hover:text-white py-2 px-15 border border-black hover:border-transparent rounded">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Help
                mainTitle="How you can help"
                mainParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
                isBgGray={true}
            />
            <News
                mainTitle="LATEST NEWS"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
            />
        </Layout>
    )
}

export default Partners