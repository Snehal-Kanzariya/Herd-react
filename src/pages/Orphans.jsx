import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import heroImage from "../assets/OrphansHero.png";
import Content from '../components/Content';
import Zigzag from '../components/Zigzag';
import donation_partners from '../assets/donation_partners.png'
import Help from '../components/Help';
import News from '../components/News';
import Image1 from '../assets/TimisaOrphans.png'
import Image2 from '../assets/KhanyisaOrphans.png'
import ImageGrid from '../components/ImageGrid'
import rightArrow from '../assets/arrow_right.svg'


const Orphans = () => {
    const gridList = [
        {
            image: Image1,
            title: "Timisa",
            subTitle: "Female | 5 years old",
            buttonText1: 'View Profile',
            buttonText2: 'Foster'
        },
        {
            image: Image2,
            title: "Kumbura",
            subTitle: "Female | 5 years old",
            buttonText1: 'View Profile',
            buttonText2: 'Foster'
        },
        {
            image: Image1,
            title: "Timisa",
            subTitle: "Female | 5 years old",
            buttonText1: 'View Profile',
            buttonText2: 'Foster'
        },
        {
            image: Image2,
            title: "Kumbura",
            subTitle: "Female | 5 years old",
            buttonText1: 'View Profile',
            buttonText2: 'Foster'
        },
    ]

    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                heroTitle="Orphans"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="The beautiful thing about elephants, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />
            <Zigzag
                zigzagImg={donation_partners}
                isPr={false}
                isReverse={true}
                title={"What makes them different?"}
                paragraph={"Diam vulputate ut pharetra sit. Mattis pellentesque id nibh tortor id. Amet consectetur adipiscing elit duis. Amet mauris commodo quis imperdiet massa tincidunt. Lorem dolor sed viverra ipsum nunc aliquet. Enim ut tellus elementum sagittis vitae et leo. In vitae turpis massa sed elementum tempus egestas sed sed. Aliquet enim tortor at auctor. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Diam quam nulla porttitor massa. Amet dictum sit amet justo donec enim diam vulputate ut. At varius vel pharetra vel turpis nunc eget lorem dolor .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua nunc aliquet."}
                buttonText={"Meet Our Partners"}
                isButton={false}
            />

            <div className="pb-150">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-25 px-25 sm:px-50">
                    {gridList.map(item => {
                        return <ImageGrid image={item.image} title={item.title} subTitle={item.subTitle} buttonText1={item.buttonText1} buttonText2={item.buttonText2} />
                    })}
                </div>
                <button className="flex justify-center mx-auto mb-0 mt-99">
                    <div className="flex border-b border-[#00000066]">
                        <span className="pr-3 mb-2 font-sans text-16">View All Elephants</span>
                        <img src={rightArrow} alt="" className="flex " />
                    </div>
                </button>
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

export default Orphans
