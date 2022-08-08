import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import heroImage from "../assets/FundraisingHero.png"
import Content from '../components/Content';
import ContentGrid from '../components/ContentGrid'
import pGrid2 from '../assets/Fundraisinggrid1.png'
import pGrid1 from '../assets/Fundraisinggrid2.png'
import Help from '../components/Help';
import News from '../components/News';

const Fundraising = () => {
    const grid = [
        {
            image: pGrid1,
            title: 'Fundraiser events',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
            buttonTxt: 'Find Out More',
            isButton: true,
        },
        {
            image: pGrid2,
            title: 'Fundraise for HERD',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
            buttonTxt: 'Find Out More',
            isButton: true,
        },
    ]
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                heroTitle="Fundraising"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="How to fundraise, Own capacity, Globalgiving etc means lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum."
            />
            <div className="py-150">
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

export default Fundraising
