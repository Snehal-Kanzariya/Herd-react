import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import heroImage from "../assets/fundraisingeventHero.png"
import Content from '../components/Content';
import Zigzag from '../components/Zigzag';
import fundevetzigzag1 from '../assets/fundevetzigzag1.png'
import fundevetzigzag2 from '../assets/fundevetzigzag2.png'
import ContentGrid from '../components/ContentGrid'
import pGrid1 from '../assets/eventGrid1.png'
import pGrid2 from '../assets/eventGrid2.png'
import Help from '../components/Help';
import News from '../components/News';

const FundraisingEvents = () => {
    const grid = [
        {
            image: pGrid1,
            title: 'Fundraise for HERD',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
            buttonTxt: 'Find Out More',
            isButton: true,
        },
        {
            image: pGrid2,
            title: 'Corperate Fundraising',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
            buttonTxt: 'Find Out More',
            isButton: true,
        },
    ]
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                subTitle={"Fundraising"}
                heroTitle="Fundraiser events"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="Would you like to get involved? em ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum."
            />

            <Zigzag
                zigzagImg={fundevetzigzag1}
                isPr={false}
                isReverse={true}
                title={"Want to do something special?"}
                paragraph={"Diam vulputate ut pharetra sit. Mattis pellentesque id nibh tortor id. Amet consectetur adipiscing elit duis. Amet mauris commodo quis imperdiet massa tincidunt. Lorem dolor sed viverra ipsum nunc aliquet. Enim ut tellus elementum sagittis vitae et leo. In vitae turpis massa sed elementum tempus egestas sed sed. Aliquet enim tortor at auctor. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Diam quam nulla porttitor massa. Amet dictum sit amet justo donec enim diam vulputate ut. At varius vel pharetra vel turpis nunc eget lorem dolor .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                buttonText={"Find Out More"}
                isButton={false}
                isPb={true}

            />
            <Zigzag
                zigzagImg={fundevetzigzag2}
                isPr={false}
                isReverse={false}
                title={"Birthday events"}
                paragraph={"Diam vulputate ut pharetra sit. Mattis pellentesque id nibh tortor id. Amet consectetur adipiscing elit duis. Amet mauris commodo quis imperdiet massa tincidunt. Lorem dolor sed viverra ipsum nunc aliquet. Enim ut tellus elementum sagittis vitae et leo. In vitae turpis massa sed elementum tempus egestas sed sed. Aliquet enim tortor at auctor. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Diam quam nulla porttitor massa. Amet dictum sit amet justo donec enim diam vulputate ut. At varius vel pharetra vel turpis nunc eget lorem dolor .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                buttonText={"Find Out More"}
                isButton={false}
            />
            <div className="pt-145 pb-150">
                <h1 class="font-sans text-center pb-76 text-30 uppercase text-black-100">discover Other fundraising</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-50 gap-x-25 px-25 sm:px-50">
                    {grid.map(item => {
                        return <ContentGrid image={item.image} title={item.title} description={item.description} buttonTxt={item.buttonTxt} isButton={item.isButton} isMb={item.isMb} />
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

export default FundraisingEvents