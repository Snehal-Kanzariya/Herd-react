import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import heroImage from "../assets/HelpHero.png";
import Content from '../components/Content';
import News from '../components/News';
import raisefund from '../assets/raisefund.png'
import Zigzag from '../components/Zigzag';
import Help1 from '../assets/Help1.png'
import Help2 from '../assets/Help2.png'
import Help3 from '../assets/Help3.png'
import Help4 from '../assets/Help4.png'
import ElephantIcon1 from '../assets/helpele1.svg'
import ElephantIcon2 from '../assets/helpele2.svg'
import ContentGrid from '../components/ContentGrid';


const HelpHerd = () => {
    const grid = [
        {
            image: Help1,
            title: 'Our Wishlist',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
            buttonTxt: 'View Our Wishlist',
            isMb: false,
            isButton: true,
        },
        {
            image: Help2,
            title: 'Donate',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
            buttonTxt: 'Make A Donation',
            isMb: true,
            isButton: true,
        },
        {
            image: Help3,
            title: 'Fundraising',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
            buttonTxt: 'Explore Fundraising',
            isButton: true,
        },
        {
            image: Help4,
            title: 'HERD Shop',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
            buttonTxt: 'View Our Shop',
            isButton: true,
        },
    ]
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                heroTitle="Help the Herd"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="We rely on incredible people like you to keep us going. Every cent counts, and no contribution is too small. HERD’s running costs all come from public funding to take us from month to month, so we really appreciate your support."
            />

            <div className="py-148">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-25 px-25 sm:px-50">
                    {grid.map(item => {
                        return <ContentGrid image={item.image} title={item.title} description={item.description} buttonTxt={item.buttonTxt} isButton={item.isButton} isMb={item.isMb} />
                    })}
                </div>
            </div>

            <section className="bg-gray-100 pt-88 pb-73">
                <div className="container">
                    <div className="lg:flex">
                        <div className="pt-39 xs:justify-center xs:flex xs:pb-25">
                            <img src={ElephantIcon1} alt="" />
                        </div>

                        <div className="px-50 sm:pl-118 sm:pr-116">
                            <h1 className="text-center font-sans uppercase text-30 pb-17 leading-38 tracking-wider font-normal">
                                TAX EXEMPTION</h1>
                            <p className="font-sans max-w-509 text-center text-15 leading-6 pb-37 tracking-wider text-gray-200">Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                            </p>
                            <button
                                className="justify-center flex my-0 mx-auto text-15 font-normal font-sans leading-19 tracking-wider
                                 bg-transparent text-black px-7 py-2 border border-black-100 border-opacity-40 hover:bg-black-200 hover:text-white hover:border-transparent rounded">
                                Explore
                            </button>
                        </div>
                        <div className="pt-39 xs:justify-center xs:flex">
                            <img src={ElephantIcon2} alt="" />
                        </div>
                    </div>
                </div>
            </section>


            <Zigzag
                zigzagImg={raisefund}
                isPr={false}
                isReverse={false}
                title={"Leave a legacy with HERD"}
                paragraph={"Diam vulputate ut pharetra sit. Mattis pellentesque id nibh tortor id. Amet consectetur adipiscing elit duis. Amet mauris commodo quis imperdiet massa tincidunt. Lorem dolor sed viverra ipsum nunc aliquet. Enim ut tellus elementum sagittis vitae et leo. In vitae turpis massa sed elementum tempus egestas sed sed. Aliquet enim tortor at auctor. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Diam quam nulla porttitor massa. Amet dictum sit amet justo"}
                buttonText={"Leave A Legacy"}
                isButton={true}
                isPb={true}

            />
            <News
                mainTitle="LATEST NEWS"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
            />
        </Layout>
    )
}

export default HelpHerd