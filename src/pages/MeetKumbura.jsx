import React from 'react'
import Layout from '../components/Layout'
import SectionHero from '../components/SectionHero'
import heroImage from "../assets/meetKumburaHero.png";
import Help from '../components/Help';
import News from '../components/News';

const MeetKumbura = () => {
    return (
        <Layout>
            <SectionHero
                heroImage={heroImage}
                subTitle="Foster An Elephant"
                heroTitle="meet Kumbura"
                isButton={false}
                isBottom={false}
                greemButton={"Foster Kumbura"}
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

export default MeetKumbura