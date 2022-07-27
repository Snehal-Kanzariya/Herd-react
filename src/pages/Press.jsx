import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero';
import heroImage from "../assets/PressHero.png";
import Content from '../components/Content';
import News from '../components/News';
import Help from '../components/Help';

const Press = () => {
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                heroTitle="Press"
                isButton={false}
                isBottom={false}
                isGreenButton={false}
            />
            <Content
                description="Awareness of what we do through elephant news stories helps us make a greater impact. And our orphaned elephants have certainly often made the news with their adorable antics and soul-stirring stories of survival against all odds. Here's the latest on HERD and our elephants, as reported by the press."
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

export default Press
