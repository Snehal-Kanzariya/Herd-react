import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import heroImage from "../assets/MerchandiseHero.png"
import m1 from '../assets/MerchandiseGrid1.png'
import m2 from '../assets/MerchandiseGrid2.png'
import m3 from '../assets/MerchandiseGrid3.png'
import m4 from '../assets/MerchandiseGrid4.png'
import m5 from '../assets/MerchandiseGrid5.png'
import m6 from '../assets/MerchandiseGrid6.png'
import m7 from '../assets/MerchandiseGrid7.png'
import m8 from '../assets/MerchandiseGrid8.png'
import m9 from '../assets/MerchandiseGrid9.png'
import Content from '../components/Content'
import Help from '../components/Help';
import News from '../components/News';

const Merchandise = () => {
    const grid = [
        {
            image: m1,
            title: 'Books',
        },
        {
            image: m2,
            title: 'Caps',
        },
        {
            image: m3,
            title: 'Digital Prints',
        },
        {
            image: m4,
            title: 'HERD Wisdoms',
        },
        {
            image: m5,
            title: 'HERD Keyrings and Magnets',
        },
        {
            image: m6,
            title: 'JabuLadies',
        },
        {
            image: m7,
            title: 'Little Mhambi',
        },
        {
            image: m8,
            title: 'Socks',
        },
        {
            image: m9,
            title: 'Cycling Jersey',
        },
    ]
    console.log(grid);
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                subTitle={"HERD Shop"}
                heroTitle="Merchandise"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="Have a little bit of HERD to take home, All proceeds from our HERD Online Shop go to HERD Trust, to help us to support, care for and protect the elephant orphans and herd in our care and cover the immense costs of sustaining them from year to year at HERD"
                description1="Browse our collections below and feel free to email us at admin@herd.org.za with any questions."
            />
            <div className="py-150">
                <div className="grid grid-cols-1 lg:grid-cols-3  gap-25 px-25 sm:px-50">
                    {grid.map(item => {
                        return (
                            <div className="relative xs:justify-center xs:flex">
                                <img src={item.image} alt="" className="xs:w-full" />
                                <div className="absolute bottom-7 text-white">
                                    <h1 className="font-sans text-27 text-center pb-46">
                                        {item.title}
                                    </h1>
                                    <div className="btns">
                                        <button
                                            className="flex justify-center font-sans p-2 mr-15 items-center bg-transparent text-white px-5 small:px-10 border border-[#ffffff80] hover:bg-black-100 hover:text-white hover:border-transparent rounded">
                                            View Items
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
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

export default Merchandise
