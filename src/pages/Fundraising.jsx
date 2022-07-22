import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import heroImage from "../assets/FundraisingHero.png"
import Content from '../components/Content';
import Help from '../components/Help';
import News from '../components/News';

const Fundraising = () => {
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
