import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import heroImage from "../assets/DonationHero.png"
import Content from '../components/Content';
import Zigzag from '../components/Zigzag';
import type1 from '../assets/type1.png'
import type2 from '../assets/type2.png'
import Help from '../components/Help';
import News from '../components/News';

const Donation = () => {
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                subTitle={"Help The Herd"}
                heroTitle="Make a Donation"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="Every little bit makes a difference, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <div className="donations bg-gray-100">
                <div className="grid grid-cols-1 xl:grid-cols-2 pb-83">
                    <div className="xs:justify-center xs:flex xl:pl-190 md:border-r border-r-green border-opacity-60 ">
                        <div className="pt-63 pb-68">
                            <h1 className="pl-29 font-sans pb-41 text-35 text-black-100">Once-off donation</h1>
                            <input type="text" placeholder="$50" className="px-5 py-2 mr-6" />
                            <button className="bg-green text-white p-3 font-sans rounded px-17 py-2 font-medium text-15">
                                Donate
                            </button>
                        </div>
                    </div>
                    <div className="xs:justify-center xs:flex">
                        <div className="pt-63 pb-68">
                            <h1 className="pl-29 font-sans pb-41 text-35 text-black-100">Monthly donation</h1>
                            <input type="text" placeholder="$15" className="px-5 py-2 mr-6" />
                            <button className="bg-green text-white p-3 font-sans rounded px-17 py-2 font-medium text-15">
                                Donate
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="donation-title pt-150 justify-center flex pb-52 font-normal leading-38 tracking-wider">
                <h1 className="font-sans text-30 px-25 uppercase text-black-100">Other ways you can donate</h1>
            </div>
            <Zigzag
                isPt={true}
                zigzagImg={type1}
                isPr={false}
                isReverse={true}
                title={"Type number 1"}
                paragraph={"Diam vulputate ut pharetra sit. Mattis pellentesque id nibh tortor id. Amet consectetur adipiscing elit duis. Amet mauris commodo quis imperdiet massa tincidunt. Lorem dolor sed viverra ipsum nunc aliquet. Enim ut tellus elementum sagittis vitae et leo. In vitae turpis massa sed elementum tempus egestas sed sed. Aliquet enim tortor at auctor. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Diam quam nulla porttitor massa. Amet dictum sit amet justo donec enim diam vulputate ut. At varius vel pharetra vel turpis nunc eget lorem dolor .Lorem ipsum dolor ."}
                buttonText={"Find Out More"}
                isButton={true}
                isPb={true}
            />
            <Zigzag
                zigzagImg={type2}
                isPr={false}
                isReverse={false}
                title={"Type number 2"}
                paragraph={"Diam vulputate ut pharetra sit. Mattis pellentesque id nibh tortor id. Amet consectetur adipiscing elit duis. Amet mauris commodo quis imperdiet massa tincidunt. Lorem dolor sed viverra ipsum nunc aliquet. Enim ut tellus elementum sagittis vitae et leo. In vitae turpis massa sed elementum tempus egestas sed sed. Aliquet enim tortor at auctor. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Diam quam nulla porttitor massa. Amet dictum sit amet justo donec enim diam vulputate ut. At varius vel pharetra vel turpis nunc eget lorem dolor .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut viverra ipsum."}
                buttonText={"Find Out More"}
                isButton={true}
            />
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

export default Donation
