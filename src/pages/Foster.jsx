import React from 'react'
import Layout from '../components/Layout'
import heroImage from "../assets/FosterHero.png";
import SectionHero from '../components/SectionHero';
import Content from '../components/Content';
import News from '../components/News';
import Help from '../components/Help';


const Foster = () => {
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                heroTitle="Foster an Elephant"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="The beautiful thing about elephants, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
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

export default Foster
