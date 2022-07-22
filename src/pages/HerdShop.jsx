import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import heroImage from "../assets/ShopHero.png"
import Content from '../components/Content'
import Help from '../components/Help';
import News from '../components/News';

const HerdShop = () => {
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                subTitle={"THe herd shop"}
                heroTitle="Make a Donation"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="Helping the herd means lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet."
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

export default HerdShop